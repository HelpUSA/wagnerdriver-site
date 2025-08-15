export default function Page() {
  return (
    <main className="container mx-auto px-6 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-4">Help & FAQs</h1>
      <div className="space-y-6">
        <div>
          <p className="font-semibold">How far in advance should I book airport pickups?</p>
          <p className="text-white/75">We recommend 24–48 hours for GUF, PNS, and MOB. During peak season, please inquire earlier.</p>
        </div>
        <div>
          <p className="font-semibold">What’s the cancellation policy?</p>
          <p className="text-white/75">Free cancellations up to 12 hours before pickup. After that, a fee may apply.</p>
        </div>
        <div>
          <p className="font-semibold">Do you provide child seats?</p>
          <p className="text-white/75">Yes, upon request. Please mention the child’s age and weight when booking.</p>
        </div>
      </div>
    </main>
  );
}
