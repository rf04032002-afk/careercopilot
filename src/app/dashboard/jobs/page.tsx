import { jobs } from "@/data/jobs";

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl p-10">
        <h1 className="text-4xl font-bold">
          Job Finder
        </h1>

        <p className="mt-2 text-slate-600">
          Temukan pekerjaan yang sesuai.
        </p>

        <div className="mt-10 space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold">
                {job.title}
              </h2>

              <p className="mt-2 text-slate-600">
                {job.company} • {job.location}
              </p>

              <p className="mt-2">
                {job.type}
              </p>

              <p className="mt-2 font-semibold text-indigo-600">
                {job.salary}
              </p>

              <p className="mt-4 text-slate-500">
                {job.description}
              </p>

              <button className="mt-6 rounded-lg bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}