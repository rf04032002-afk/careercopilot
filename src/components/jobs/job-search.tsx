"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  onSearch: (keyword: string) => void;
}

export default function JobSearch({ onSearch }: Props) {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="mb-8 flex gap-4">
      <input
        className="flex-1 rounded-lg border p-3"
        placeholder="Cari pekerjaan..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <Button
        onClick={() => onSearch(keyword)}
      >
        Search
      </Button>
    </div>
  );
}