"use client";

import { useState } from "react";

export default function ResumeAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function analyze() {
    if (!file) return;

    setLoading(true);

    const form = new FormData();
    form.append("file", file);

    const res = await fetch("/api/analyze", {
      method: "POST",
      body: form,
    });

    const data = await res.json();

    setResult(data.text);

    setLoading(false);
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">

      <input
        type="file"
        accept=".pdf"
        onChange={(e) =>
          setFile(e.target.files ? e.target.files[0] : null)
        }
      />

      <button
        onClick={analyze}
        disabled={!file || loading}
        className="px-4 py-2 bg-black text-white rounded"
      >
        {loading ? "Reading..." : "Analyze Resume"}
      </button>

      {result && (
        <pre className="whitespace-pre-wrap border rounded p-4">
          {result}
        </pre>
      )}

    </div>
  );
}