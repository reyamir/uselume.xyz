import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <p>Hello, Lume</p>
    </div>
  );
}
