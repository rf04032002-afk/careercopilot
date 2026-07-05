"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignIn() {
  const [email, setEmail] = useState("");

  async function handleLogin() {
    if (!supabase) {
      alert("Supabase belum dikonfigurasi.");
      return;
    }

    const { error } = await supabase.auth.signInWithOtp({
      email,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Cek email kamu.");
    }
  }

  return (
    <div className="mx-auto mt-24 max-w-md rounded-2xl border p-8">
      <h1 className="mb-6 text-3xl font-bold">Sign In</h1>

      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button className="mt-6 w-full" onClick={handleLogin}>
        Continue
      </Button>
    </div>
  );
}