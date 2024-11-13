"use client";

import { useState } from "react";
import { generate, getData, generateObj, streamComponent } from "./api/actions";
import { readStreamableValue } from "ai/rsc";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default function Home() {
  const [generation, setGeneration] = useState("");
  const [generation1, setGeneration1] = useState("");
  const [generation2, setGeneration2] = useState("");
  const [component, setComponent] = useState("");

  return (
    <div className="">
      <main>
        <div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setComponent(await streamComponent());
            }}
          >
            <button className="dark:bg-teal-700 m-2 p-2 rounded">
              Get Component
            </button>
            <div>{component}</div>
          </form>
        </div>
        <hr />
        <div>
          <button
            className="dark:bg-teal-700 m-2 p-2 rounded"
            onClick={async () => {
              const { object } = await generateObj(
                "people who have very superhero-like names"
              );
              for await (const partialObject of readStreamableValue(object)) {
                if (partialObject) {
                  setGeneration2(JSON.stringify(partialObject.people, null, 2));
                }
              }
            }}
          >
            View people
          </button>
          <pre>{generation2}</pre>
        </div>
        <hr />
        <button
          className="dark:bg-teal-700 m-2 p-2 rounded"
          onClick={async () => {
            const { people } = await getData(
              "people who sound like they have superhero names"
            );
            setGeneration1(JSON.stringify(people, null, 2));
          }}
        >
          Get people
        </button>
        <pre className="mb-4">{generation1}</pre>
        <button
          onClick={async () => {
            const { output } = await generate(
              "What is the deepest lake in the US? Get wordy answer, please."
            );
            for await (const delta of readStreamableValue(output)) {
              setGeneration(
                (currentGeneration) => `${currentGeneration}${delta}`
              );
            }
          }}
        >
          Ask!
        </button>
        <div>{generation}</div>
      </main>
    </div>
  );
}
