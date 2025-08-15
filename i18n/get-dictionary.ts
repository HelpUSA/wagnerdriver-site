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

// Retorna `any` para simplificar o uso nos componentes
export async function getDictionary(locale: Locale): Promise<any> {
  const base: AnyObj = en as AnyObj;
  let override: AnyObj = {};
  if (locale === 'pt') override = pt as AnyObj;
  else if (locale === 'es') override = es as AnyObj;

  return deepMerge(base, override) as AnyObj;
}
