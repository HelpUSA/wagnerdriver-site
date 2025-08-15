// i18n/get-dictionary.ts
import type { Locale } from './config';
import en from './dictionaries/en.json';
import pt from './dictionaries/pt.json';
import es from './dictionaries/es.json';

const MAP: Record<Locale, any> = { en, pt, es } as const;

// merge profundo para preencher chaves faltantes com EN
function deepMerge<T>(base: T, over?: Partial<T>): T {
  if (over === undefined || over === null) return structuredClone(base);
  if (Array.isArray(base)) return (over as any) ?? (structuredClone(base) as any);
  if (typeof base !== 'object' || base === null) return (over as any) ?? (base as any);

  const out: any = {};
  const keys = new Set([...Object.keys(base as any), ...Object.keys(over as any)]);
  for (const k of keys) {
    const bv = (base as any)[k];
    const ov = (over as any)[k];
    if (typeof bv === 'object' && bv !== null && !Array.isArray(bv)) {
      out[k] = deepMerge(bv, ov as any);
    } else {
      out[k] = ov === undefined ? bv : ov;
    }
  }
  return out;
}

export async function getDictionary(locale: Locale) {
  const sel = MAP[locale] ?? en;
  // EN é a base; o idioma escolhido sobrepõe o que existir
  return deepMerge(en, sel);
}
