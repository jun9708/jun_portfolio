'use client';

import React from 'react';
import '../globals.css'; // CSS 위치 맞게 조절하세요

const Marquee: React.FC = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-content">
        🚀 Hey there! Thanks for stopping by my portfolio. Feel free to reach out anytime!😊 &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default Marquee;
