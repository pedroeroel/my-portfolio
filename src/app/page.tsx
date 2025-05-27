import projectCard from "./components/project-card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home | <roel.code />",
};

export default function Home() {
  return (
    <main  className='main' >
      <section className='w-full h-full flex flex-col gap-5' >
        <h2 className="font-bold text-5xl lg:text-6xl">Hey, I&apos;m Roel!</h2>
        <p className="border-1">Fullstack developer, independent artist.</p>
      </section>
  </main>
  );
}