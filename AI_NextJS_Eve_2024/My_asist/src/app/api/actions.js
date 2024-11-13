"use server";

import { generateText, streamText, generateObject, streamObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { createStreamableValue, streamUI } from "ai/rsc";
import { object, z } from "zod";


export async function streamComponent() {
  const result = await streamUI({
    model: openai("gpt-4o-mini"),
    prompt: "Do you know ho is Pasha?",
    text: ({ content }) => <div>{content}</div>,
  });
  return result.value;
}

export async function generateObj(input) {
  const stream = createStreamableValue();

  (async () => {
    const { partialObjectStream } = await streamObject({
      model: openai("gpt-4o-mini"),
      system: "You generate fake data for three people",
      prompt: input,
      schema: z.object({
        people: z.array(
          z.object({
            name: z.string().describe("name of a fake person"),
            address: z.string().describe("US address format"),
            age: z.number(),
          })
        ),
      }),
    });
    for await (const partialObject of partialObjectStream) {
      stream.update(partialObject);
    }
    stream.done();
  })();

  return { object: stream.value };
}

export async function getData(input) {
  const { object: people } = await generateObject({
    model: openai("gpt-4o-mini"),
    system: "You generate fake data for three people",
    prompt: input,
    schema: z.object({
      people: z.array(
        z.object({
          name: z.string().describe("name of a fake person"),
          address: z.string().describe("US address format"),
          age: z.number(),
        })
      ),
    }),
  });
  return { people };
}

export async function getData0(input) {
  const { object: people } = await generateObject({
    model: openai("gpt-4o-mini"),
    system: "You generate fake data for three people",
    prompt: "input",
    schema: z.object({
      people: z.array(
        z.object({
          name: z.string().describe("name of a fake person"),
          address: z.string().describe("Ukraine address"),
          age: z.number().describe("age of the person"),
        })
      ),
    }),
  });
  return { people };
}

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
  // const assistantId = "asst_7NTwKaXeUlqw017g4bMKLQvB"; // ID консультанта

  const { text } = await generateText({
    model: openai("gpt-4o-mini"),
    prompt: question,
  });
  return { text };
}
