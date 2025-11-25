import React, { useEffect, useRef } from 'react';

const LiquidBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // TRACKING REFS
  // where the mouse actually is
  const targetPos = useRef({ x: null, y: null }); 
  // where the "stabilized brush" is currently
  const currentPos = useRef({ x: null, y: null }); 

  const settings = {
    damping: 0.96,
    strength: 1000,
    background: [8, 7, 7],
    // NEW: Stabilizer (0.01 = super slow/smooth, 1.0 = no smoothing)
    // 0.15 provides a nice "weighted" feel.
    smoothing: 0.15 
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let buffer1 = [];
    let buffer2 = [];

    const resize = () => {
      const scaleFactor = 0.5;
      width = Math.ceil(window.innerWidth * scaleFactor);
      height = Math.ceil(window.innerHeight * scaleFactor);
      canvas.width = width;
      canvas.height = height;
      const size = width * height;
      buffer1 = new Int16Array(size);
      buffer2 = new Int16Array(size);
    };

    const drawRipple = (cx, cy) => {
      if (cx > 0 && cx < width && cy > 0 && cy < height) {
          buffer1[cx + cy * width] = settings.strength;
      }
    };

    // 1. UPDATE TARGET ONLY (No drawing here)
    const updateTarget = (clientX, clientY) => {
      const scaleFactor = 0.5;
      targetPos.current = {
        x: Math.floor(clientX * scaleFactor),
        y: Math.floor(clientY * scaleFactor)
      };
    };

    const handleMouseMove = (e) => updateTarget(e.clientX, e.clientY);
    
    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      updateTarget(touch.clientX, touch.clientY);
    };

    const loop = () => {
      // 2. CALCULATE STABILIZED MOVEMENT
      // We do the drawing logic INSIDE the loop now, not the event listener.
      if (targetPos.current.x !== null && currentPos.current.x !== null) {
        const target = targetPos.current;
        const current = currentPos.current;

        // Calculate distance to target
        const dx = target.x - current.x;
        const dy = target.y - current.y;

        // Only draw if we are far enough away to matter (optimization)
        if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
          // Move current position towards target by smoothing factor
          const nextX = current.x + dx * settings.smoothing;
          const nextY = current.y + dy * settings.smoothing;

          // Draw line between PREVIOUS stabilized pos and NEW stabilized pos
          const drawDx = nextX - current.x;
          const drawDy = nextY - current.y;
          const distance = Math.sqrt(drawDx * drawDx + drawDy * drawDy);
          const steps = Math.ceil(distance);

          for (let i = 0; i < steps; i++) {
            const t = i / steps;
            const lerpX = Math.floor(current.x + drawDx * t);
            const lerpY = Math.floor(current.y + drawDy * t);
            drawRipple(lerpX, lerpY);
          }

          // Update current position
          currentPos.current = { x: nextX, y: nextY };
        }
      } else if (targetPos.current.x !== null && currentPos.current.x === null) {
        // First frame logic: Snap directly to target so we don't streak from (0,0)
        currentPos.current = { ...targetPos.current };
      }

      // 3. FLUID SIMULATION
      const temp = buffer1;
      buffer1 = buffer2;
      buffer2 = temp;

      const imgData = ctx.getImageData(0, 0, width, height);
      const data = imgData.data;

      const damping = settings.damping;
      const w = width;
      const h = height;

      // Boundary checks
      for (let x = 0; x < w; x++) { buffer1[x] = 0; buffer1[(h - 1) * w + x] = 0; }
      for (let y = 0; y < h; y++) { buffer1[y * w] = 0; buffer1[y * w + (w - 1)] = 0; }

      for (let y = 1; y < h - 1; y++) {
        for (let x = 1; x < w - 1; x++) {
          const i = x + y * w;
          const heightVal = (
            (buffer2[i - 1] + buffer2[i + 1] + buffer2[i - w] + buffer2[i + w]) / 2
          ) - buffer1[i];

          buffer1[i] = heightVal * damping;

          // RENDER
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

          // Dynamic Alpha (Fade out)
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
      // Reset both on leave so the next entry snaps (preventing streaks)
      targetPos.current = { x: null, y: null }; 
      currentPos.current = { x: null, y: null };
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

//final na final na okei