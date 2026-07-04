import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const resume = body.resume;

    const prompt = `
Kamu adalah HR Senior.

Analisa CV berikut.

Berikan:

1. Score ATS (0-100)
2. Kelebihan
3. Kekurangan
4. Skill yang kurang
5. Saran Perbaikan
6. Peluang dipanggil interview

CV:

${resume}
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return NextResponse.json({
      result: completion.choices[0].message.content,
    });
  } catch (err) {
    return NextResponse.json(
      {
        error: "Failed",
      },
      {
        status: 500,
      }
    );
  }
}