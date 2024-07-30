/** @format */
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Updated import for next/navigation
import Sidebar from "./components/sidebar";
import "../app/globals.css";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/score");
  }, [router]);

  return (
    <>
      <Sidebar />
    </>
  );
}
