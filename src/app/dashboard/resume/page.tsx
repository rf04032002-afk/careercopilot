"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-5xl p-10">
        <h1 className="text-4xl font-bold">
          Resume Analyzer
        </h1>

        <p className="mt-3 text-slate-600">
          Upload CV kamu dan AI akan memberikan analisis profesional.
        </p>

        <div className="mt-10 rounded-3xl border-2 border-dashed border-slate-300 bg-white p-12 text-center">

          <div className="mx-auto max-w-md">

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="w-full"
              onChange={(e) => {
                if (e.target.files?.length) {
                  setFile(e.target.files[0]);
                }
              }}
            />

            {file && (
              <div className="mt-6 rounded-xl bg-slate-100 p-4 text-left">
                <p className="font-semibold">File dipilih</p>

                <p className="mt-2 text-slate-600">
                  {file.name}
                </p>

                <p className="text-sm text-slate-500">
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </div>
            )}

            <Button
              className="mt-8 w-full"
              disabled={!file}
            >
              Analyze Resume
            </Button>

          </div>

        </div>
      </div>
    </main>
  );
}