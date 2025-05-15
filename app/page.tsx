'use client'; 

import Header from './components/Header'; 
import Marquee from './components/Marquee';  // 1. Marquee 임포트
import Hero from './components/hero';
import Profile from './components/profile';
import About from './components/About';
import QA from './components/QA';
import Project from './components/Project';
import End from './components/end';
import FloatingButtons from './components/FloatingButtons';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <>
      <Header />
      <Marquee />
      <main className="scroll-smooth pt-16"> 
        <Hero />
        <section id="profile">
          <Profile />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="qa">
          <QA />
        </section>
        <section id="end">
          <End />
        </section>
        <FloatingButtons />
      </main>
    </>
  );
}
