import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const resume = body.resume;

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        result: `
AI belum diaktifkan.

Ringkasan CV:

${resume}

Silakan tambahkan OPENAI_API_KEY nanti untuk mendapatkan analisis AI lengkap.
`,
      });
    }

    const OpenAI = (await import("openai")).default;

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: `
Kamu adalah HR Senior.

Analisa CV berikut.

Berikan:

1. Score ATS
2. Kelebihan
3. Kekurangan
4. Skill yang kurang
5. Saran perbaikan

CV:

${resume}
`,
        },
      ],
    });

    return NextResponse.json({
      result: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}