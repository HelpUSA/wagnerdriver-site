import type { Locale } from './config';
import en from './dictionaries/en.json';
import pt from './dictionaries/pt.json';
import es from './dictionaries/es.json';

type Dict = Record<string, unknown>;

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function deepMerge<T extends Dict, U extends Dict>(a: T, b: U): T & U {
  const out: Dict = { ...a };
  for (const k of Object.keys(b)) {
    const av = (a as Dict)[k];
    const bv = (b as Dict)[k];
    out[k] = isPlainObject(av) && isPlainObject(bv) ? deepMerge(av, bv) : bv;
  }
  return out as T & U;
}

export async function getDictionary(locale: Locale): Promise<Dict> {
  const base: Dict = en as Dict; // <- objeto normal (sem "as const")
  let override: Dict = {};
  if (locale === 'pt') override = pt as Dict;
  else if (locale === 'es') override = es as Dict;

  return deepMerge(base, override);
}
