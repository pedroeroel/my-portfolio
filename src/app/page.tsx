import projectCard from "./components/project-card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home | <roel.code />",
};

export default function Home() {
  return (
    <main  className='bg-gray-100 flex grow' >
        {projectCard(
          "Rafalia's Chronicles",
          "This is a description of my project. It showcases my skills and creativity.",
          "/rafalia-reader.png",
          "https://rafalia-reader.vercel.app"
        )}
  </main>
  );
}