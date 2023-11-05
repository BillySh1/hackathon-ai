"use client";
import { AppState } from "@/state";
import { useSelector } from "react-redux";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import abi from "./abi.json";

export default function SDPage() {
  const current = useSelector<AppState, any>((state) => state.foo.current);
  const account = useAccount();
  const { config } = usePrepareContractWrite({
    address: "0x72eFE91Cf3069aCeAb1B22C8729Cd6696C9bD321",
    abi: abi,
    functionName: "mint",
    args: [account.address, ['0x66df07d3be08df44e1675e60b40e02925ecaa161f4c47523c20c8fcb94a043c2'], ""],
  });
  const { data, write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-white gap-10">
      <div
        className="overlay"
        style={{
          backgroundImage: `url(data:image/jpeg;base64,${current.img})`,
        }}
      />

      <div className="preview">
        <img
          className="preview-img"
          src={`data:image/jpeg;base64,${current.img}`}
          alt=""
        />
      </div>
      <div className="description">{current.des}</div>

      {(isSuccess && (
        <a
          className="next"
          href={`https://mumbai.polygonscan.com/tx/${data?.hash}`}
        >
          Mumbai scan
        </a>
      )) || (
        <Link
          className={`next ${isLoading && "disable"}`}
          style={{
            zIndex: 10,
            color: "#000",
          }}
          onClick={(e) => {
            e.preventDefault();
            write?.();
          }}
          href={""}
        >
          {"Inscribe ->"}
        </Link>
      )}

      <div className="connect-btn">
        <ConnectButton />
      </div>
    </div>
  );
}
