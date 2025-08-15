
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="pt-24">
      <section className="container mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-white/10">
          <Image src="/img/image03.png" alt="Private chauffeur service — single-vehicle" fill className="object-cover" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-3">Private chauffeur service — single-vehicle</h1>
          <p className="text-white/75 mt-3">Personalized, reliable service operated by Wagner using his own vehicle.</p><p className="text-white/75 mt-3">Perfect for travelers who value direct communication and consistent quality.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/" className="rounded-2xl border border-white/20 px-4 py-2">Back to home</Link>
            <a href="tel:+12510000000" className="rounded-2xl bg-white text-black px-4 py-2 font-semibold">Call to book</a>
          </div>
        </div>
      </section>
    </main>
  );
}
