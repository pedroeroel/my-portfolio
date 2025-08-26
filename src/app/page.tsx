import projectCard from "./components/project-card";
import type { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: "home | <roel.code />",
};

export default function Home() {
  return (
    <main  className='main' >
      <section className='w-full h-full flex justify-between flex-col md:flex-row gap-5' >
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-5xl lg:text-6xl">Hey, I&apos;m Roel!</h2>
          <p className="">Developer, indie artist, and creator.</p>
        </div>
        <Image src="/img/roel.png" alt="Roel's picture" width={750} height={500} className="w-full md:w-210" />
      </section>
  </main>
  );
}