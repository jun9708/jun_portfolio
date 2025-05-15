'use client';

import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // 모바일에서 메뉴 닫기
    }
  };

  const navItems = [
    { id: 'profile', label: 'MyProfile' },
    { id: 'about', label: '관련활동' },
    { id: 'project', label: 'Project' },
    { id: 'qa', label: 'QnA' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      style={{ backdropFilter: scrolled ? 'saturate(180%) blur(10px)' : 'none' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="flex items-center space-x-2">
            <img src="/unnamed.gif" alt="GIF" className="w-10 h-10" />
            <div className={`text-xl font-bold ${scrolled ? 'text-black' : 'text-white'}`}>
              Jun Portfolio
            </div>
          </div>

          {/* 햄버거 메뉴 버튼 (모바일) */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* 네비게이션 버튼 (PC용) */}
          <div className="hidden lg:flex space-x-4">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleScrollToSection(id)}
                className={`
                  relative px-3 py-2 min-w-[80px] font-medium overflow-hidden
                  text-black rounded-md transition duration-300 ease-in-out
                  focus:outline-none focus:ring-2 focus:ring-blue-400
                  before:content-[''] before:absolute before:left-0 before:bottom-0
                  before:w-full before:h-0 before:bg-black before:z-[-1]
                  before:transition-all before:duration-300 before:ease-in-out
                  hover:text-white hover:before:h-full
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col items-start mt-2 space-y-2 pb-4">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleScrollToSection(id)}
                className="w-full text-left px-4 py-2 text-black hover:bg-black hover:text-white transition rounded-md"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
