'use client';

import About from "./component/about/about";
import HeroSection from "./component/hero/heroSection";
import Menu from "./component/hero/menu";
import { useState, useRef, useEffect } from "react";
import Skils from "./component/skils/skils";
import Projects from "./component/projects/projects";
import Contact from "./component/contact";


export default function Home() {

  const mainRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState("");

  useEffect(() => {
    const container = mainRef.current;

    if (!container) return;

    const handleScroll = () => {
      const section = container.querySelectorAll('section[id]');

      section.forEach((sec) => {
        const rect = sec.getBoundingClientRect();

        if (rect.top < 200 && rect.bottom > 200) {
          setActive(sec.id)
          history.replaceState(null, '', `#${sec.id}`)
        }
      })

    }
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])



  return (
    <div className="h-screen w-full flex flex-col overflow-hidden font-sans">
      <Menu active={active} />
      <main ref={mainRef} className="w-full overflow-y-auto overflow-x-hidden flex-1 sm:items-center items-start py-10 lg:px-30 scroll-smooth p-5">
        <div className="flex h-full w-full mb-10 items-center justify-center">
          <HeroSection />
        </div>
        <section id="About" className="flex flex-col min-h-[100vh]">
          <About />
        </section>
        <section id="Skils" className="flex flex-col">
          <Skils />
        </section>
        <section id="Projects" className="flex flex-col">
          <Projects />
        </section>
      </main>
      <div className="flex items-center justify-center h-[80px] w-full items-center shadow-lg shadow-white">
        <Contact />
      </div>
    </div>
  );
}
