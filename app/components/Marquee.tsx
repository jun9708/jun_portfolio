'use client';

import React from 'react';
import '../globals.css'; // CSS 위치 맞게 조절하세요

const Marquee: React.FC = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-content">
        🚀항상 성장하고 도전하는 개발자가 되도록 실천중입니다!😊 &nbsp;&nbsp;&nbsp;&nbsp;
        🥸Made By Jun💫 &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default Marquee;
