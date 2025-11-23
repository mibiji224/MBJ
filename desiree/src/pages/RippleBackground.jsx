import React, { useEffect, useRef } from 'react';

const RippleBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // Configuration
  const settings = {
    damping: 0.99, // How fast ripples fade (0.9 to 0.99)
    shimmer: 5,    // Intensity of the ripple brightness
    color: [219, 10, 10], // Your Red color #db0a0a in RGB
    background: [8, 7, 7], // Your Black background #080707 in RGB
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let halfWidth, halfHeight;
    
    // We use two buffers to calculate the wave physics
    // buffer1: current state, buffer2: previous state
    let buffer1 = [];
    let buffer2 = [];
    let fps = 0;

    // Resize handler
    const resize = () => {
      // We scale the internal resolution down for performance.
      // A 1:1 pixel ratio is too heavy for CPU fluid sim.
      // 0.2 to 0.4 looks "soft" and runs fast.
      const scaleFactor = 0.25; 
      
      width = Math.ceil(window.innerWidth * scaleFactor);
      height = Math.ceil(window.innerHeight * scaleFactor);
      halfWidth = width >> 1;
      halfHeight = height >> 1;

      canvas.width = width;
      canvas.height = height;

      // Initialize buffers with 0
      const size = width * (height + 2) * 2; // *2 for safety
      buffer1 = new Array(size).fill(0);
      buffer2 = new Array(size).fill(0);
    };

    // Mouse interaction
    const handleMouseMove = (e) => {
      const scaleFactor = 0.25; // Must match resize scale
      const x = Math.floor(e.clientX * scaleFactor);
      const y = Math.floor(e.clientY * scaleFactor);
      
      // Trigger a ripple at mouse position
      // We modify the PREVIOUS buffer to start the wave
      if (x > 0 && x < width && y > 0 && y < height) {
        buffer1[x + y * width] = 500; // Ripple strength
      }
    };

    // Main Animation Loop
    const loop = () => {
      // Swap buffers
      const temp = buffer1;
      buffer1 = buffer2;
      buffer2 = temp;

      const imgData = ctx.getImageData(0, 0, width, height);
      const data = imgData.data;

      // Wave Propagation Algorithm
      // Loop through every pixel (skipping edges)
      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          
          const i = x + y * width;
          
          // The magic physics formula:
          // Calculate velocity based on neighbors (up, down, left, right)
          buffer1[i] = (
            (buffer2[i - 1] +
             buffer2[i + 1] +
             buffer2[i - width] +
             buffer2[i + width]) >> 1
          ) - buffer1[i];

          // Apply damping (loss of energy)
          buffer1[i] -= buffer1[i] >> 5; // Optimized bitwise damping

          // Render: Map wave height to pixel color
          // 0 is calm, positive/negative is wave height
          let waveHeight = buffer1[i];
          
          // Calculate index in the pixel array (RGBA)
          const pixelIndex = i * 4;
          
          // If water is calm, draw background. If turbulent, add color.
          if (waveHeight === 0) {
             data[pixelIndex] = settings.background[0];     // R
             data[pixelIndex + 1] = settings.background[1]; // G
             data[pixelIndex + 2] = settings.background[2]; // B
             data[pixelIndex + 3] = 255; // Alpha
          } else {
             // Calculate intensity based on wave height
             // We offset the ripple to create a "shading" effect
             const offset = 1024 - waveHeight;
             
             // Mix the background with the ripple color
             // This creates the visual "highlight" on the wave crests
             data[pixelIndex] = settings.background[0] + (waveHeight * settings.shimmer); 
             data[pixelIndex + 1] = settings.background[1]; 
             data[pixelIndex + 2] = settings.background[2]; 
             data[pixelIndex + 3] = 255;
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
      animationRef.current = requestAnimationFrame(loop);
    };

    // Init
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Add touch support for mobile
    window.addEventListener('touchmove', (e) => {
        handleMouseMove(e.touches[0]);
    });

    resize();
    loop();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-1 pointer-events-none"
      style={{ 
          // Ensures the canvas sits behind everything but visible
          zIndex: -1,
          // Smooths out the low-res pixels for a 'liquid' look
          imageRendering: 'auto' 
      }}
    />
  );
};

export default RippleBackground;