"use client";
import { useState } from "react";
import OpenAI from "openai";

export default function InputPanel() {
  const [quenes, setQuenes] = useState<any>([]);
  const [query, setQuery] = useState("");
  const fetchOpenAI = async () => {
    setQuenes([...quenes, { ask: query, answer: "loading..." }]);
    const openai = new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      dangerouslyAllowBrowser: true,
    });
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-4",
    });
    setQuery("");
    setQuenes([
      ...quenes,
      { ask: query, answer: chatCompletion.choices[0].message.content },
    ]);
  };

  const AnswerRender = (text: string) => {
    return (
      text && (
        <div className="flex w-full mt-2 space-x-3 max-w-xs">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
            <img className="w-10 rounded-full" src="/answer.webp" alt="" />
          </div>
          <div>
            <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
              <p className="text-sm">{text}</p>
            </div>
          </div>
        </div>
      )
    );
  };

  const AskRender = (text: string) => {
    return (
      text && (
        <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
          <div>
            <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
              <p className="text-sm">{text}</p>
            </div>
          </div>
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
            <img className="w-10 rounded-full" src="/ask.png" alt="" />
          </div>
        </div>
      )
    );
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-black-100 text-gray-800 p-10">
      <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
              <img className="w-10 rounded-full" src="/answer.webp" alt="" />
            </div>
            <div>
              <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">Hi artist! I am your digital clone, here to assist you in finding inspiration to create your distinctive cxxooo image!</p>
              </div>
            </div>
          </div>
          {quenes.map((x: any) => {
            return (
              <div key={x.ask}>
                {AskRender(x.ask)}
                {AnswerRender(x.answer)}
              </div>
            );
          })}
        </div>

        <div className="bg-gray-300 p-4">
          <input
            className="flex items-center h-10 w-full rounded px-3 text-sm"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") fetchOpenAI();
            }}
            placeholder="Type your message…"
          />
        </div>
      </div>
    </div>
  );
}
