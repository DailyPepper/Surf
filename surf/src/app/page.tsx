import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex bg-bg-start min-h-screen flex-col items-center p-[1rem]">
      <Header/>
        <section>
          <h1 className="text-blue-900 text-[3rem]">
            Серфинг - это больше, чем просто спорт
          </h1>
        </section>
    </main>
  );
}
