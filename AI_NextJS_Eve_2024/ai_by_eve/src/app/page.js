"use client";

import { useChat } from "ai/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="">
      <main>
        <h1>First AI</h1>
        {messages.map((m) => (
          <div key={m.id}>
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <input
            className="dark:bg-black"
            value={input}
            placeholder="What to do where"
            onChange={handleInputChange}
          ></input>
        </form>
        {/* {completion ? (
          <div>{completion}</div>
        ) : (
          <div>Recomended pleces to visit...</div>
        )} */}
      </main>
    </div>
  );
}
