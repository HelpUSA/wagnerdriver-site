import type { Locale } from './config';
import en from './dictionaries/en.json';
import pt from './dictionaries/pt.json';
import es from './dictionaries/es.json';

type AnyObj = Record<string, any>;

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function deepMerge<T extends AnyObj, U extends AnyObj>(a: T, b: U): T & U {
  const out: AnyObj = { ...a };
  for (const k of Object.keys(b)) {
    const av = (a as AnyObj)[k];
    const bv = (b as AnyObj)[k];
    out[k] = isPlainObject(av) && isPlainObject(bv) ? deepMerge(av as AnyObj, bv as AnyObj) : bv;
  }
  return out as T & U;
}

function withCompat(dict: AnyObj): AnyObj {
  const d = { ...dict };

  // --- HERO / CTA fallbacks ---
  d.hero ??= {};
  // Alias antigo: alguns componentes usam hero.call
  if (d.hero.call == null && d.hero.callNow != null) d.hero.call = d.hero.callNow;

  d.cta ??= {};
  if (d.cta.call == null)  d.cta.call  = d.hero.call ?? d.hero.callNow ?? 'Call now';
  if (d.cta.sms == null)   d.cta.sms   = d.hero.sms ?? 'SMS';
  if (d.cta.email == null) d.cta.email = d.hero.email ?? 'Email';

  // --- HOW section fallback ---
  d.how ??= {
    title: 'How it works',
    steps: [
      { title: 'Reach out', desc: 'Call or SMS for the quickest booking.' },
      { title: 'Confirm',   desc: 'We confirm pickup details and price.' },
      { title: 'Ride',      desc: 'Relax — we track flights and plan routes.' },
    ],
  };

  // --- NotFound fallback (alguns layouts usam textos) ---
  d.notFound ??= {
    title: 'Page not found',
    cta: 'Go to homepage',
  };

  return d;
}

// Retorna `any` para simplificar nos componentes
export async function getDictionary(locale: Locale): Promise<any> {
  const base: AnyObj = en as AnyObj;
  const override: AnyObj =
    locale === 'pt' ? (pt as AnyObj)
    : locale === 'es' ? (es as AnyObj)
    : {};

  const merged = deepMerge(base, override);
  return withCompat(merged);
}
