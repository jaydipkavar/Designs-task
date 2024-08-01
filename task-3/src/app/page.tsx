/** @format */
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "../app/globals.css";


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/score");
  }, [router]);

  return <>{/* <Score /> */}</>;
}
