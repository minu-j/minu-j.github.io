"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Cover from "../components/Home/Cover/Cover";
import Education from "../components/Home/Education/Education";
import Footer from "../components/common/Footer/Footer";
import Awards from "../components/Home/Awards/Awards";
import Contect from "../components/Home/Contect/Contect";
import Projects from "../components/Home/Projects/Projects";
import Skills from "../components/Home/Skills/Skills";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenVh, setScreenVh] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleScreen = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setScrollPosition(scrollTop);
  };
  const getScreenVh = () => {
    const vhValue = window.innerHeight;
    setScreenVh(vhValue);
  };
  const handleMouseMove = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    console.log(`     ____  ___  _______  
 __ / / / / / |/ / ___/  
/ // / /_/ /    / (_ /   
\\___/\\____/_/|_/\\___/  __
  /  |/  /  _/ |/ / / / /
 / /|_/ // //    / /_/ / 
/_/  /_/___/_/|_/\\____/  
                            
Front-end Developer Portfolio

My GitHub : https://github.com/minu-j/`);
    getScreenVh();
    window.addEventListener("scroll", handleScreen);
    window.addEventListener("resize", getScreenVh);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScreen);
      window.removeEventListener("resize", getScreenVh);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className={styles.main}>
      <Cover scrollPosition={scrollPosition} screenVh={screenVh} />
      <Education scrollPosition={scrollPosition} screenVh={screenVh} />
      <Awards scrollPosition={scrollPosition} screenVh={screenVh} />
      <Skills scrollPosition={scrollPosition} screenVh={screenVh} />
      <Projects scrollPosition={scrollPosition} screenVh={screenVh} />
      <Contect scrollPosition={scrollPosition} screenVh={screenVh} />
      <Footer />
      {mousePosition.y ? (
        <div
          className={styles.cursor}
          style={{
            top: mousePosition.y - 500,
            left: mousePosition.x - 500,
          }}
        ></div>
      ) : null}
    </main>
  );
}
