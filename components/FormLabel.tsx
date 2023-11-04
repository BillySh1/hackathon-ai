import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/state";
import { updateTexts } from "@/state/foo/action";
export default function FormLabel() {
  const texts = useSelector<AppState, any>((state) => state.foo.texts);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center gap-8 w-full mt-10">
      {/* <div className="title">
        {">> Enter your keywords below to generate a image <<"}
      </div> */}
      <div className="w-4/5 grid grid-cols-4 gap-4 grid-bg">
        {texts.map((x: string, idx: number) => {
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
                dispatch(
                  updateTexts({
                    texts: clone,
                  })
                );
              }}
              className={`grid-item ${!!texts[idx] ? "active-grid" : ""}`}
            ></input>
          );
        })}
      </div>
    </div>
  );
}
