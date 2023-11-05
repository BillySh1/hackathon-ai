"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/state";
import Loading from "./Loading";
import Link from "next/link";
import { onSelect } from "@/state/foo/action";

export default function SDGenerate() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>([]);
  const [index, setIndex] = useState(0);
  const texts = useSelector<AppState, any>((state) => state.foo.texts);
  const dispatch = useDispatch();
  const fetchSD = async () => {
    setLoading(true);
    const payload = {
      prompt: `cxxooo, sharp edge, highly detailed, 3D, ${texts
        .filter((x: string) => !!x)
        .join(" ")}`,
      batch_size: "1",
      sampler_index: "UniPC",
      steps: 15,
      width: 240,
      height: 240,
    };
    const res = await fetch("/proxy/sdapi/v1/txt2img", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => r.json());
    setResult([...result, { img: res.images[0], des: res.info }]);
    setLoading(false);
  };
  const fetchSDIMG = async () => {
    setLoading(true);
    const payload = {
      init_images: [result[index].img],
      batch_size: "1",
      sampler_index: "UniPC",
      denoising_strength: 0.5,
      steps: 15,
      width: 480,
      height: 480,
    };
    const res = await fetch("/proxy/sdapi/v1/img2img", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => r.json());
    setResult([...result, { img: res.images[0], des: res.info }]);
    setLoading(false);
  };
  return (
    <div className="flex w-3/5 min-h-screen flex-col items-center gap-1">
      <div className="img-container">
        {result.length > 0 && !loading && (
          <div
            onClick={() => setIndex(index - 1)}
            className={`arrow ${index === 0 ? "disable" : ""}`}
          >
            {"<-"}
          </div>
        )}
        {loading && <Loading />}
        {!loading && result.length > 0 && (
          <img
            className="h-full"
            src={`data:image/jpeg;base64, ${result[index]?.img}`}
            alt=""
          />
        )}
        {result.length > 0 && !loading && (
          <div
            onClick={() => setIndex(index + 1)}
            className={`arrow ${index === result.length - 1 ? "disable" : ""}`}
          >
            {"->"}
          </div>
        )}

        {result.length > 0 && (
          <div
            className={`repaint ${loading && "disable"}`}
            onClick={fetchSDIMG}
          >
            💐 Repaint
          </div>
        )}
        {/* {result.length > 0 && (
          <div className="paragraph">{result[index].des}</div>
        )} */}
      </div>

      <div
        className={`button-generate ${loading && "disable"}`}
        onClick={fetchSD}
      >
        Generate
      </div>

      {result.length > 0 && (
        <Link
          onClick={() => {
            dispatch(
              onSelect({
                current: result[index],
              })
            );
          }}
          href={"/res"}
          className="next"
        >
          {"NEXT ->"}
        </Link>
      )}
    </div>
  );
}

export const config = {
  maxDuration: 50,
};
