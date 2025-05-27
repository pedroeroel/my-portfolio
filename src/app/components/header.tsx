"use client";
import { useEffect } from "react";
import Link from "next/link"

export default function Header() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/typewriter-effect@latest/dist/core.js";
    script.async = true;
    script.onload = () => {
      // @ts-expect-error
      const Typewriter = window.Typewriter; 
      if (Typewriter) {
        const typewriterHelloElem = document.querySelector("#hello-typewriter");
        const typewriterHello = new Typewriter(typewriterHelloElem, {
          loop: true,
          delay: 75,
        });
        typewriterHello
        .typeString("Hello, I'm Roel!")
        .pauseFor(1500)
        .deleteAll()
        .typeString("Welcome to my portfolio!")
        .pauseFor(1000)
        .start();
      }
      const typewriterHelloWorldElem = document.querySelector("#hw-typewriter");
      const typewriterHelloWorld = new Typewriter(typewriterHelloWorldElem, {
        loop: true,
        delay: 75,
      });
      typewriterHelloWorld
      .typeString("console.log(	&apos;Hello, World!	&apos;)")
      .pauseFor(1500)
      .deleteAll()
      .typeString("print(	&apos;Hello, World!	&apos;)")
      .pauseFor(1000)
      .start();
      
    };
      document.body.appendChild(script);
  return () => {
    document.body.removeChild(script);
  };
}, []);

return (

  <header className="flex items-center justify-between p-4 bg-gray-100 text-gray-900">

    <h1 className="text-xl font-bold w-1/3">&lt;<span className="text-blue-500">roel</span>.code /&gt;</h1>

    <nav className="w-1/3">

      <ul className="flex space-x-10 justify-center">
        <li>
          <Link  href="/" className="border-b-2 not-hover:border-transparent  transition duration-200 ease-in-out">
            home
          </Link>
        </li>
        <li>
          <a href="/about" className="border-b-2 not-hover:border-transparent  transition duration-200 ease-in-out">
            about
          </a>
        </li>
        <li>
          <a href="/projects" className="border-b-2 not-hover:border-transparent  transition duration-200 ease-in-out">
           projects
          </a>
        </li>
      </ul>

    </nav>

    <div
      className="text-lg font-semibold text-gray-700 w-1/3"
    >
      <p id="hw-typewriter" className="text-right text-gray-400 m-0" style={{ minHeight: "1.5em" }}>
        console.log(	&apos;Hello, World!	&apos;)
      </p>
    </div>
    
  </header>
);}