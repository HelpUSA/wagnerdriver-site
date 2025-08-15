import type { Locale } from './config';
export async function getDictionary(locale: Locale) {
  switch (locale) {
    case 'pt':
      return (await import('@/i18n/dictionaries/pt.json')).default;
    case 'es':
      return (await import('@/i18n/dictionaries/es.json')).default;
    default:
      return (await import('@/i18n/dictionaries/en.json')).default;
  }
}
