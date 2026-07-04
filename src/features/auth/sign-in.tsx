"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "http://localhost:3000",
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Cek email kamu untuk login.");
    }

    setLoading(false);
  }

  return (
    <div className="mx-auto mt-24 max-w-md rounded-2xl border p-8 shadow-sm">
      <h1 className="mb-6 text-3xl font-bold">
        Sign In
      </h1>

      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button
        className="mt-6 w-full"
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? "Loading..." : "Continue"}
      </Button>
    </div>
  );
}