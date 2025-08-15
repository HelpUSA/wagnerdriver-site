// i18n/get-dictionary.ts
import 'server-only';
import type { Locale } from './config';
import en from './dictionaries/en.json';
import pt from './dictionaries/pt.json';
import es from './dictionaries/es.json';

function deepMerge<T>(base: T, over: Partial<T> | undefined): T {
  if (!over) return base;
  if (Array.isArray(base)) return (over as unknown as T) ?? base;
  if (base && typeof base === 'object') {
    const out: any = { ...base };
    for (const k of Object.keys(over as any)) {
      const b = (base as any)[k];
      const o = (over as any)[k];
      out[k] =
        b && typeof b === 'object' && !Array.isArray(b)
          ? deepMerge(b, o)
          : (o ?? b);
    }
    return out;
  }
  return (over as T) ?? base;
}

export async function getDictionary(locale: Locale) {
  const base = en as const;
  const cand =
    locale === 'pt' ? (pt as any) :
    locale === 'es' ? (es as any) :
    {};
  return deepMerge(base, cand);
}
