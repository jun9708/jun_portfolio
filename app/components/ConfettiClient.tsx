// components/ConfettiClient.tsx
"use client";

import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

const ConfettiClient = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <ReactConfetti
      width={dimensions.width}
      height={dimensions.height}
      recycle={true}
    />
  );
};

export default ConfettiClient;
