import JobCard from "./job-card";
import { Job } from "@/lib/api/jobs";

interface Props {
  jobs: Job[];
}

export default function JobList({ jobs }: Props) {
  if (jobs.length === 0) {
    return (
      <div className="rounded-xl border bg-white p-8 text-center">
        Tidak ada lowongan ditemukan.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}