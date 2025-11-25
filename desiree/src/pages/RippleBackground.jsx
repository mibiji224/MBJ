import React, { useEffect, useRef } from 'react';

const LiquidBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const lastMousePos = useRef({ x: null, y: null });

  const settings = {
    damping: 0.96,        
    radius: 1,            // CHANGED: Reduced from 3 to 1 for a thin, sharp point
    strength: 800,        // CHANGED: Increased strength (400 -> 800) so the thin line is still visible
    background: [8, 7, 7] 
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let buffer1 = [];
    let buffer2 = [];

    const resize = () => {
      // 0.25 scale is still good for performance, but the radius: 1 makes it sharp
      const scaleFactor = 0.25; 
      
      width = Math.ceil(window.innerWidth * scaleFactor);
      height = Math.ceil(window.innerHeight * scaleFactor);

      canvas.width = width;
      canvas.height = height;

      const size = width * height;
      buffer1 = new Int16Array(size);
      buffer2 = new Int16Array(size);
    };

    const drawRipple = (cx, cy) => {
      const r = settings.radius;
      // Loop is much smaller now (creating a thinner line)
      for (let y = cy - r; y <= cy + r; y++) {
        for (let x = cx - r; x <= cx + r; x++) {
          if (x > 1 && x < width - 1 && y > 1 && y < height - 1) {
             // We removed the circle math for radius 1 because it's basically a single pixel/cross
             buffer1[x + y * width] = settings.strength;
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      const scaleFactor = 0.25;
      const x = Math.floor(e.clientX * scaleFactor);
      const y = Math.floor(e.clientY * scaleFactor);

      if (lastMousePos.current.x !== null) {
        const dx = x - lastMousePos.current.x;
        const dy = y - lastMousePos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const steps = Math.ceil(distance); // More steps ensures the thin line doesn't break
        
        for (let i = 0; i < steps; i++) {
          const t = i / steps;
          const lerpX = Math.floor(lastMousePos.current.x + dx * t);
          const lerpY = Math.floor(lastMousePos.current.y + dy * t);
          drawRipple(lerpX, lerpY);
        }
      } else {
        drawRipple(x, y);
      }
      lastMousePos.current = { x, y };
    };

    const handleTouchMove = (e) => {
      const scaleFactor = 0.25;
      const touch = e.touches[0];
      const x = Math.floor(touch.clientX * scaleFactor);
      const y = Math.floor(touch.clientY * scaleFactor);
      
      if (lastMousePos.current.x !== null) {
          const dx = x - lastMousePos.current.x;
          const dy = y - lastMousePos.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const steps = Math.ceil(distance);
          for (let i = 0; i < steps; i++) {
            const t = i / steps;
            const lerpX = Math.floor(lastMousePos.current.x + dx * t);
            const lerpY = Math.floor(lastMousePos.current.y + dy * t);
            drawRipple(lerpX, lerpY);
          }
      } else {
          drawRipple(x, y);
      }
      lastMousePos.current = { x, y };
    };

    const loop = () => {
      const temp = buffer1;
      buffer1 = buffer2;
      buffer2 = temp;

      const imgData = ctx.getImageData(0, 0, width, height);
      const data = imgData.data;

      const damping = settings.damping;
      const w = width;
      const h = height;

      for (let x = 0; x < w; x++) { buffer1[x] = 0; buffer1[(h - 1) * w + x] = 0; }
      for (let y = 0; y < h; y++) { buffer1[y * w] = 0; buffer1[y * w + (w - 1)] = 0; }

      for (let y = 1; y < h - 1; y++) {
        for (let x = 1; x < w - 1; x++) {
          const i = x + y * w;

          const heightVal = (
            (buffer2[i - 1] + buffer2[i + 1] + buffer2[i - w] + buffer2[i + w]) / 2
          ) - buffer1[i];

          buffer1[i] = heightVal * damping;

          // 3D Rendering Logic
          const xOffset = buffer1[i - 1] - buffer1[i + 1];
          let shading = xOffset; 

          const pixelIndex = i * 4;
          let r = settings.background[0];
          let g = settings.background[1];
          let b = settings.background[2];

          const waveHeight = buffer1[i];
          if (waveHeight > 0) {
             r += waveHeight; 
          }

          if (shading > 0) {
            const shine = shading * 8; 
            r += shine;       
            g += shine * 0.5; 
            b += shine * 0.5; 
          } 
          else if (shading < 0) {
             const shadow = -shading * 2;
             r -= shadow; 
          }

          data[pixelIndex] = r < 0 ? 0 : r > 255 ? 255 : r;
          data[pixelIndex + 1] = g < 0 ? 0 : g > 255 ? 255 : g;
          data[pixelIndex + 2] = b < 0 ? 0 : b > 255 ? 255 : b;
          data[pixelIndex + 3] = 255; 
        }
      }

      ctx.putImageData(imgData, 0, 0);
      animationRef.current = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    const handleMouseLeave = () => { lastMousePos.current = { x: null, y: null }; };
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
        // Reduced blur so the thin line doesn't disappear
        filter: 'blur(1px)', 
        opacity: 0.8
      }}
    />
  );
};

export default LiquidBackground;