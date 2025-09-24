import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { NextResponse } from "next/server";

const MODEL_NAME = "gemini-1.5-flash";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!process.env.NEXT_PUBLIC_ASISTENTE_VIRTUAL_API_KEY) {
      return NextResponse.json({ error: "Google API key not configured." }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_ASISTENTE_VIRTUAL_API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.7,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
      { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
      { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
      { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    ];

    const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }], generationConfig, safetySettings });

    const responseText = result.response.text();
    return NextResponse.json({ response: responseText });

  } catch (error) {
    console.error("Error in AI assistant API:", error);
    return NextResponse.json({ error: "An error occurred while processing your request." }, { status: 500 });
  }
}
