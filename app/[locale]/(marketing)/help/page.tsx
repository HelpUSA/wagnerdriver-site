import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';

export default async function Page({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  const p = dict.pages.help;
  return (
    <main className="container mx-auto px-6 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-4">{p.title}</h1>
      <div className="space-y-6">
        <div><p className="font-semibold">{p.q1}</p><p className="text-white/75">{p.a1}</p></div>
        <div><p className="font-semibold">{p.q2}</p><p className="text-white/75">{p.a2}</p></div>
        <div><p className="font-semibold">{p.q3}</p><p className="text-white/75">{p.a3}</p></div>
      </div>
    </main>
  );
}
