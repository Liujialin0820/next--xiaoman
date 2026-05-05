import { NextRequest } from "next/server";
import { streamText, convertToModelMessages } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { APIKEY } from "./key";


const openai = createOpenAI({
    apiKey: APIKEY
});

export async function POST(req: NextRequest) {
    try {
        const { messages } = await req.json();

        const result = streamText({
            model: openai("gpt-4o-mini"), // 👈 推荐这个
            system: "你是一个高级程序员，请给出清晰、专业的回答",
            messages: await convertToModelMessages(messages), // 👈 必须 await
        });

        return result.toUIMessageStreamResponse();
    } catch (err) {
        console.error(err);
        return new Response("error", { status: 500 });
    }
}