import React, { useEffect, useState } from 'react';

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

// 별 색깔 후보 배열 (원하는 색으로 추가 가능)
const STAR_COLORS = ['#ffffff', '#ffd700', '#00ffff', '#ff69b4', '#87cefa'];

interface FallingStarProps {
  color?: string;
}

export default function FallingStar({ color }: FallingStarProps) {
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const startLeft = randomBetween(0, 100); // vw %
    const size = randomBetween(2, 5); // px
    const duration = randomBetween(3, 6); // s
    const delay = randomBetween(0, 5); // s

    setStyle({
      left: `${startLeft}vw`,
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      opacity: 0.8,
      backgroundColor: color || STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      filter: `drop-shadow(0 0 6px ${color || STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)]})`,
    });
  }, [color]);

  return <div className="falling-star" style={style} />;
}
