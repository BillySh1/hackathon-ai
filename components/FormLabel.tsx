import Link from "next/link";
import { useState } from "react";

export default function FormLabel() {
  const [texts, setTexts] = useState(["1", "2", "3", "4", "5", "6", "7", "8"]);
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="title">{">> Enter your keywords here to generate a image <<"}</div>
      <div className="w-full grid grid-cols-4 gap-4 grid-bg">
        {texts.map((x, idx) => {
          return (
            <div
              key={idx}
              className="bg-white px-4 py-2 text-black text-center rounded-sm"
            >
              {x}
            </div>
          );
        })}
      </div>
      <Link href={"/sd"} className="next">
        {"NEXT ->"}
      </Link>
    </div>
  );
}
