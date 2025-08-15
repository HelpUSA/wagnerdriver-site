import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';

export default async function Page({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  const p = dict.pages.airport;
  return (
    <main className="pt-24">
      <section className="container mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-white/10">
          <Image src="/img/image04.png" alt={`p.title`} fill className="object-cover" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-3">{p.title}</h1>
          <p className="text-white/75 mt-3">{p.p1}</p>
          <p className="text-white/75 mt-3">{p.p2}</p>
          <div className="mt-6 flex gap-3">
            <Link href={`/${params.locale}`} className="rounded-2xl border border-white/20 px-4 py-2">Home</Link>
            <a href="tel:+12510000000" className="rounded-2xl bg-white text-black px-4 py-2 font-semibold">Call to book</a>
          </div>
        </div>
      </section>
    </main>
  );
}
