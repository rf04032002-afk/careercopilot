export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
  description: string;
  applyUrl: string;
}

export async function searchJobs(keyword: string): Promise<Job[]> {
  const response = await fetch(`/api/jobs?q=${encodeURIComponent(keyword)}`);

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const data = await response.json();

  return data.jobs;
}