import { NextRequest, NextResponse } from "next/server";

const jobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "Tech Indonesia",
    location: "Jakarta",
    type: "Full Time",
    salary: "Rp8.000.000 - Rp12.000.000",
    description: "React, Next.js, TypeScript",
    applyUrl: "https://example.com/job/1",
  },
  {
    id: "2",
    title: "Backend Developer",
    company: "Nusantara Digital",
    location: "Bandung",
    type: "Remote",
    salary: "Rp10.000.000 - Rp15.000.000",
    description: "Node.js, PostgreSQL",
    applyUrl: "https://example.com/job/2",
  },
  {
    id: "3",
    title: "UI UX Designer",
    company: "Creative Studio",
    location: "Yogyakarta",
    type: "Hybrid",
    salary: "Rp7.000.000",
    description: "Figma, Design System",
    applyUrl: "https://example.com/job/3",
  },
];

export async function GET(request: NextRequest) {
  const keyword =
    request.nextUrl.searchParams.get("q")?.toLowerCase() ?? "";

  const filtered = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(keyword) ||
      job.company.toLowerCase().includes(keyword) ||
      job.location.toLowerCase().includes(keyword)
    );
  });

  return NextResponse.json({
    jobs: filtered,
  });
}