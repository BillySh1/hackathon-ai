import { useState } from "react";

export default function FormLabel() {
  const [texts, setTexts] = useState(["", "", "", "", "", "", "", ""]);
  return (
    <div className="flex flex-col items-center gap-8 w-full mt-20">
      {/* <div className="title">{">> Enter your keywords here to generate a image <<"}</div> */}
      <div className="w-4/5 grid grid-cols-4 gap-4 grid-bg">
        {texts.map((x, idx) => {
          return (
            <input
              style={{
                outline: "none",
              }}
              key={idx}
              value={x}
              onChange={(e) => {
                const clone = JSON.parse(JSON.stringify(texts));
                clone[idx] = e.target.value;
                setTexts(clone);
              }}
              className={`grid-item ${!!texts[idx] ? "active-grid" : ""}`}
            ></input>
          );
        })}
      </div>
    </div>
  );
}
