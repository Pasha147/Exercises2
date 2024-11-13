"use server";

import { generateText, streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { createStreamableValue } from "ai/rsc";

export async function generate(input) {
  const stream = createStreamableValue("");
  (async () => {
    const { textStream } = await streamText({
      model: openai("gpt-4o-mini"),
      prompt: input,
    });

    for await (const delta of textStream) {
      stream.update(delta);
    }
    stream.done();
  })();

  return { output: stream.value };
}

export async function getAnswer(question) {
  const { text } = await generateText({
    model: openai("gpt-4o-mini"),
    prompt: question,
  });
  return { text };
}
