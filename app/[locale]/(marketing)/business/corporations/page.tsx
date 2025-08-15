import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';

export default async function Page({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  return (
    <main className="container mx-auto px-6 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-4">{dict.pages.business.overviewTitle}</h1>
      <p className="text-white/75 mb-4">Partner with a dependable private car service in Gulf Shores for executive travel, meetings, and events.</p>
      <ul className="list-disc pl-5 space-y-2 text-white/80">
        <li>Central contact by phone/SMS or email.</li>
        <li>Itemized receipts on request.</li>
        <li>Coverage around Gulf Shores, Orange Beach, Foley, Fairhope, Mobile, Pensacola.</li>
      </ul>
    </main>
  );
}
