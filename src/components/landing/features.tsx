import {
  FileText,
  Briefcase,
  Sparkles,
  MessagesSquare,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "CV Analyzer",
    description: "AI menganalisis CV dan memberikan saran perbaikan.",
  },
  {
    icon: Briefcase,
    title: "Job Match",
    description: "Hitung kecocokan CV dengan lowongan kerja.",
  },
  {
    icon: Sparkles,
    title: "Cover Letter",
    description: "Generate cover letter profesional dalam hitungan detik.",
  },
  {
    icon: MessagesSquare,
    title: "Interview AI",
    description: "Latihan interview dengan AI seperti HR sungguhan.",
  },
];

export function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Everything You Need</h2>
          <p className="mt-4 text-slate-600">
            Semua alat yang dibutuhkan untuk mendapatkan pekerjaan.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border p-8 transition hover:shadow-lg"
              >
                <Icon className="mb-6 h-10 w-10 text-indigo-600" />

                <h3 className="text-xl font-semibold">{feature.title}</h3>

                <p className="mt-4 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}