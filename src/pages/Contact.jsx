export default function Contact() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="text-sm text-slate-600 mb-4">
        Call us at{" "}
        <a href="tel:+233501234567" className="text-emerald-600">
          +233 50 123 4567
        </a>{" "}
        or fill the form below.
      </p>
      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent (mock)");
        }}
      >
        <input
          className="w-full border p-2 rounded"
          placeholder="Your name"
          required
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Your email or phone"
          required
        />
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Message"
          rows={4}
          required
        />
        <button className="bg-emerald-600 text-white px-4 py-2 rounded">
          Send message
        </button>
      </form>
    </div>
  );
}
