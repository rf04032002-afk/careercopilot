export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  employmentType: string;
  salary?: string;
  description: string;
  applyUrl: string;
}

export async function getJobs(): Promise<Job[]> {
  return [];
}