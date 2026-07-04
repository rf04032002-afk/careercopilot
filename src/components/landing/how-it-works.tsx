const steps = [
  {
    number: "01",
    title: "Upload CV",
    description: "Upload CV dalam format PDF atau DOCX.",
  },
  {
    number: "02",
    title: "Paste Job Link",
    description: "Masukkan URL lowongan pekerjaan.",
  },
  {
    number: "03",
    title: "AI Analysis",
    description: "AI menganalisis kecocokan CV dengan lowongan.",
  },
  {
    number: "04",
    title: "Apply",
    description: "Download CV, cover letter, lalu kirim lamaran.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">
          How It Works
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border bg-white p-8"
            >
              <div className="text-5xl font-bold text-indigo-600">
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}