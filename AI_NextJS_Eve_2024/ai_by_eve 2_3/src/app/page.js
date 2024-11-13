"use client";

import { useState } from "react";
import { generate } from "./api/actions";
import { readStreamableValue } from "ai/rsc";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default function Home() {
  const [generation, setGeneration] = useState("");
  return (
    <div className="">
      <main>
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
