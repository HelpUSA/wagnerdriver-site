import type { Locale } from './config';
import en from './dictionaries/en.json';
import pt from './dictionaries/pt.json';
import es from './dictionaries/es.json';

type Dict = Record<string, any>;

function deepMerge<T extends Dict, U extends Dict>(base: T, override: U): T & U {
  const out: Dict = { ...base };
  for (const key of Object.keys(override)) {
    const b = (base as Dict)[key];
    const o = (override as Dict)[key];
    const bothObjects =
      b && o &&
      typeof b === 'object' &&
      typeof o === 'object' &&
      !Array.isArray(b) &&
      !Array.isArray(o);

    out[key] = bothObjects ? deepMerge(b, o) : (o ?? b);
  }
  return out as T & U;
}

export async function getDictionary(locale: Locale): Promise<Dict> {
  // NÃO usar "as const" aqui; apenas mantenha como objetos comuns
  const base: Dict = en as Dict;
  const override: Dict =
    locale === 'pt' ? (pt as Dict) :
    locale === 'es' ? (es as Dict) :
    (en as Dict);

  return deepMerge(base, override);
}
