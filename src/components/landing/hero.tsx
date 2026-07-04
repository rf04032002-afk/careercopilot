import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600">
            🚀 AI Career Assistant
          </span>

          <h1 className="mt-8 text-6xl font-extrabold tracking-tight text-slate-900">
            Get Hired Faster with AI
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-slate-600">
            Upload CV, analisis lowongan kerja, buat cover letter, dan latihan interview dengan AI.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}