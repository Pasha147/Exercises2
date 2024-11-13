"use server"

import { NextResponse } from "next/server";
import { createAndPoll } from "@ai-sdk/openai";
import OpenAI from "openai";



export async function askAssistant1(query) {

  const openai = new OpenAI();
  const thread_id='thread_TEoHZF0vxE6qZ2vqNxUs96Fa'
  const assistant_id='asst_7NTwKaXeUlqw017g4bMKLQvB'

  const message = await openai.beta.threads.messages.create(
    thread_id,
    {
      role: "user",
      content: query,
    }
  );
  let run = await openai.beta.threads.runs.createAndPoll(
    thread_id,
    { 
      assistant_id: assistant_id,
      instructions: "Answer the question, Please."
    }
  );
  if (run.status === 'completed') {
    const messages = await openai.beta.threads.messages.list(
      run.thread_id
    );
    for (const message of messages.data.reverse()) {
      console.log(`${message.role} > ${message.content[0].text.value}`);
    }
  } else {
    console.log(run.status);
  }

  /*
  const run = await openai.beta.threads.runs.createAndPoll(thread_id, {
    assistant_id: assistant_id,
  });

   
  // const messages = await openai.beta.threads.messages.list(thread_id, {
  //   run_id: run.id,
  // });

 

  const message = await openai.beta.threads.messages.create(
    thread_id,
    {
      role: "user",
      content: "Who is Pasha?"
    }
  );
   
  // const message = messages.data.pop()!;
  if (message.content[0].type === "text") {
    const { text } = message.content[0];
    const { annotations } = text;
    const citations = [];
  
    let index = 0;
    for (let annotation of annotations) {
      text.value = text.value.replace(annotation.text, "[" + index + "]");
      const { file_citation } = annotation;
      if (file_citation) {
        const citedFile = await openai.files.retrieve(file_citation.file_id);
        citations.push("[" + index + "]" + citedFile.filename);
      }
      index++;
    }
  
    console.log('text.value-->', text.value);
    console.log(citations.join("\n"));
  }
    */
    
}

export async function askAssistant(query) {
  const assistantId = "asst_7NTwKaXeUlqw017g4bMKLQvB"; // ID консультанта
  const systemMessage = { role: "system", content: "Please search for relevant information in the files before responding." };

 

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: `Assistant ID: ${assistantId}` },
        { role: "user", content: query },
      ],
      functions: [{ name: "file_search" }],
    }),
  });

  const data = await response.json();
  const answer = data.choices[0].message.content;

  return answer;
}