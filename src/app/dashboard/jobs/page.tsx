"use client";

import { useState } from "react";
import JobSearch from "@/components/jobs/job-search";
import JobList from "@/components/jobs/job-list";
import { Job, searchJobs } from "@/lib/api/jobs";

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(keyword: string) {
    setLoading(true);

    try {
      const result = await searchJobs(keyword);
      setJobs(result);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl p-10">
        <h1 className="text-4xl font-bold">
          Job Finder
        </h1>

        <p className="mt-2 text-slate-600">
          Cari pekerjaan berdasarkan kata kunci.
        </p>

        <div className="mt-8">
          <JobSearch onSearch={handleSearch} />
        </div>

        {loading ? (
          <div className="mt-8">Loading...</div>
        ) : (
          <div className="mt-8">
            <JobList jobs={jobs} />
          </div>
        )}
      </div>
    </main>
  );
}