import { Job } from "@/lib/api/jobs";

interface Props {
  job: Job;
}

export default function JobCard({ job }: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">
        {job.title}
      </h2>

      <p className="mt-2 text-slate-600">
        {job.company}
      </p>

      <p className="text-sm">
        {job.location}
      </p>

      <p className="mt-2 text-indigo-600">
        {job.type}
      </p>

      <a
        href={job.applyUrl}
        target="_blank"
        className="mt-5 inline-block rounded-lg bg-indigo-600 px-4 py-2 text-white"
      >
        Apply
      </a>
    </div>
  );
}