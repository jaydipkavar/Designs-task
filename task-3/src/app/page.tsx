/** @format */
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import "../app/globals.css";
import Sidebar from '@/app/components/sidebar';


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
