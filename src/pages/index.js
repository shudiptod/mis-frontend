import Image from "next/image";
import { Inter } from "next/font/google";
import Dashboard from "@/components/Pages/Dashboard/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function index() {
  return (
    <>
      <Dashboard />
    </>
  );
}
