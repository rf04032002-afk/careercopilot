import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-50 p-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold">
          CareerCopilot Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          AI Career Assistant
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <Link
            href="/dashboard/resume"
            className="rounded-xl border bg-white p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold">
              Resume Analyzer
            </h2>

            <p className="mt-2 text-slate-500">
              Upload CV lalu analisis ATS.
            </p>
          </Link>

          <Link
            href="/dashboard/jobs"
            className="rounded-xl border bg-white p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold">
              Job Finder
            </h2>

            <p className="mt-2 text-slate-500">
              Cari lowongan kerja.
            </p>
          </Link>

          <Link
            href="/dashboard/interview"
            className="rounded-xl border bg-white p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold">
              Interview Coach
            </h2>

            <p className="mt-2 text-slate-500">
              Latihan interview AI.
            </p>
          </Link>

        </div>

      </div>
    </main>
  );
}