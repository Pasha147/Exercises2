"use client";

import { useChat } from "ai/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading} = useChat();
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
        {
          isLoading && <div><h2>LOADING...</h2></div>
        }
        <form onSubmit={handleSubmit}>
          <input
            className="dark:bg-gray-700 dark:disabled:bg-gray-300"
            value={input}
            placeholder="What to do where"
            onChange={handleInputChange}
            disabled={isLoading}
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
