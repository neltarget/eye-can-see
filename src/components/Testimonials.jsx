export default function Testimonials() {
  const TESTIMONIALS = [
    {
      id: 1,
      name: "Ama Boateng",
      text: "Sight Givers transformed my vision! The staff were professional and kind.",
    },
    {
      id: 2,
      name: "Kwame Mensah",
      text: "I booked online easily and got treated the same week. Highly recommend!",
    },
    {
      id: 3,
      name: "Efua Adjei",
      text: "The doctor explained everything clearly. I feel very confident in their care.",
    },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">What our patients say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-white rounded-lg shadow-sm p-6">
            <p className="italic mb-3">“{t.text}”</p>
            <div className="font-semibold text-sm">— {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
