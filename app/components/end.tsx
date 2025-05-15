'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

// ConfettiClient를 동적으로 import (SSR 비활성화)
const ConfettiClient = dynamic(() => import('./ConfettiClient'), {
  ssr: false,
});

export default function End() {
  const pathname = usePathname();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    if (pathname === '/end') {
      setShowConfetti(false);
      const timer = setTimeout(() => setShowConfetti(true), 50);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <section
      style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
      className="relative w-full flex flex-col justify-center items-center text-white px-4 py-8 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-900 z-[-1] fixed" />

      {showConfetti && <ConfettiClient />}

      <h1 className="text-5xl font-bold mb-6 text-center">Thank You!</h1>
      <p className="text-lg text-gray-400 text-center mb-8">
        여러분의 시간을 내어 저의 프로젝트를 살펴봐 주셔서 감사합니다.
        <br />
        앞으로도 많은 관심과 응원 부탁드립니다!
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com/jun9708"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-indigo-600 rounded-md text-white font-semibold hover:bg-indigo-700 transition"
        >
          깃허브 바로가기
        </a>
        <a
          href="https://jun9708.notion.site/a50f28e34096497eae7c71e3a6968ab2?pvs=74"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-600 rounded-md text-white font-semibold hover:bg-green-700 transition"
        >
          노션 바로가기
        </a>
      </div>
    </section>
  );
}
