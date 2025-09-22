import ServiceCard from "../components/ServiceCard";

function Services() {
  const SERVICES = [
    {
      id: "eye-exam",
      title: "Comprehensive Eye Exam",
      summary: "Full vision check and prescription update.",
    },
    {
      id: "cataract",
      title: "Cataract Assessment & Surgery",
      summary: "Consultation and advanced cataract care.",
    },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Popular Services</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {SERVICES.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </section>
  );
}

export default Services;
