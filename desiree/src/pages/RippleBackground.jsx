import React, { useEffect, useRef } from 'react';

const LiquidBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // Track the previous position to draw lines between frames (prevents gaps on fast movement)
  const lastPos = useRef({ x: null, y: null });

  const settings = {
    damping: 0.96,
    strength: 1000, // Impact strength
    background: [8, 7, 7],
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let buffer1 = [];
    let buffer2 = [];
    
    const scaleFactor = 0.5; // Resolution scaling

    const resize = () => {
      width = Math.ceil(window.innerWidth * scaleFactor);
      height = Math.ceil(window.innerHeight * scaleFactor);
      canvas.width = width;
      canvas.height = height;
      const size = width * height;
      buffer1 = new Int16Array(size);
      buffer2 = new Int16Array(size);
    };

    // Determine index in buffer and apply strength
    const drawRipple = (cx, cy) => {
      if (cx > 0 && cx < width && cy > 0 && cy < height) {
          // Directly modify the buffer immediately
          buffer1[cx + cy * width] = settings.strength;
      }
    };

    // REAL-TIME HANDLING
    const processInput = (clientX, clientY) => {
      const x = Math.floor(clientX * scaleFactor);
      const y = Math.floor(clientY * scaleFactor);

      // If we have a previous position, interpolate a line to prevent gaps
      if (lastPos.current.x !== null) {
        const dx = x - lastPos.current.x;
        const dy = y - lastPos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const steps = Math.ceil(distance);

        for (let i = 0; i < steps; i++) {
          const t = i / steps;
          const lerpX = Math.floor(lastPos.current.x + dx * t);
          const lerpY = Math.floor(lastPos.current.y + dy * t);
          drawRipple(lerpX, lerpY);
        }
      }

      // Draw at current position
      drawRipple(x, y);
      
      // Update last position
      lastPos.current = { x, y };
    };

    const handleMouseMove = (e) => processInput(e.clientX, e.clientY);
    
    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      processInput(touch.clientX, touch.clientY);
    };

    const loop = () => {
      // FLUID SIMULATION
      const temp = buffer1;
      buffer1 = buffer2;
      buffer2 = temp;

      const imgData = ctx.getImageData(0, 0, width, height);
      const data = imgData.data;

      const damping = settings.damping;
      const w = width;
      const h = height;

      // 1. Physics Loop
      for (let y = 1; y < h - 1; y++) {
        for (let x = 1; x < w - 1; x++) {
          const i = x + y * w;
          
          // Averaging neighbor pixels to create wave propagation
          const heightVal = (
            (buffer2[i - 1] + buffer2[i + 1] + buffer2[i - w] + buffer2[i + w]) / 2
          ) - buffer1[i];

          buffer1[i] = heightVal * damping;

          // 2. Rendering Loop
          const pixelIndex = i * 4;
          let r = settings.background[0];
          const g = settings.background[1]; 
          const b = settings.background[2]; 
          const waveHeight = buffer1[i];

          if (waveHeight > 0) {
             r += waveHeight * 2; 
          }

          data[pixelIndex] = r < 0 ? 0 : r > 255 ? 255 : r;
          data[pixelIndex + 1] = g; 
          data[pixelIndex + 2] = b; 

          // Alpha based on wave height
          const alpha = Math.min(255, Math.max(0, waveHeight * 10));
          data[pixelIndex + 3] = alpha; 
        }
      }

      ctx.putImageData(imgData, 0, 0);
      animationRef.current = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    const handleMouseLeave = () => { 
      lastPos.current = { x: null, y: null };
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    loop();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: -1,
        filter: 'blur(2px)', 
        opacity: 0.9 
      }}
    />
  );
};

export default LiquidBackground;