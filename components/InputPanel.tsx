"use client";
import { useState } from "react";
import OpenAI from "openai";
import Loading from "./Loading";

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
        <div className="flex w-full mt-4 space-x-3 max-w-3/5">
          <div className="flex-shrink-0 h-10 w-10 rounded-full">
            <img className="w-10 rounded-full" src="/answer.webp" alt="" />
          </div>
          <div className="w-full">
            <div className="w-full p-3 rounded-r-lg rounded-bl-lg">
              {text === "loading..." ? (
                <Loading />
              ) : (
                <p className="text-md w-full">{text}</p>
              )}
            </div>
          </div>
        </div>
      )
    );
  };

  const AskRender = (text: string) => {
    return (
      text && (
        <div className="flex w-full mt-4 space-x-3 max-w-3/5 ml-auto justify-end">
          <div className="flex-shrink-0 h-10 w-10 rounded-full">
            <img className="w-10 rounded-full" src="/ask.png" alt="" />
          </div>
          <div className="w-full">
            <div className="w-full p-3 rounded-r-lg rounded-bl-lg">
              <p className="text-md w-full">{text}</p>
            </div>
          </div>
        </div>
      )
    );
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <input
        className="chat-ipt"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            e.preventDefault();
            fetchOpenAI();
          }
        }}
        placeholder="Type your message…"
      />
      <div className="chat-container">
        <div className="flex flex-col flex-grow p-4 overflow-auto h-max">
          <div className="flex w-full mt-4 space-x-3 max-w-3/5">
            <div className="flex-shrink-0 h-10 w-10 rounded-full">
              <img className="w-10 rounded-full" src="/answer.webp" alt="" />
            </div>
            <div className="w-full">
              <div className="w-full p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-md w-full">
                  Hi artist! I am your digital clone, here to assist you in
                  finding inspiration to create your distinctive cxxooo image!
                </p>
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
      </div>
    </div>
  );
}
