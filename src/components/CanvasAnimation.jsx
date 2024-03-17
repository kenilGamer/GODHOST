import React, { useRef, useEffect } from 'react';

const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  const particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const animateParticles = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Add particles continuously
      const particleCount = 10; // Adjust the number of particles
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 5 + 1,
          color: getRandomColor(),
          speedX: (Math.random() - 0.5) * 3,
          speedY: (Math.random() - 0.5) * 3,
        });
      }

      particles.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.radius -= 0.5;

        if (particle.radius <= 0) {
          particles.splice(index, 1);
        }
      });

      requestAnimationFrame(animateParticles);
    };

    const getRandomColor = () => {
      const randomR = Math.floor(Math.random() * 256);
      const randomG = Math.floor(Math.random() * 256);
      const randomB = Math.floor(Math.random() * 256);
      return `rgba(${randomR}, ${randomG}, ${randomB}, 1)`;
    };

    animateParticles();

    return () => {
      particles.length = 0;
    };
  }, []);

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('orientationchange', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('orientationchange', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        top: 0,
        left: 0,
        zIndex: 1, // Push canvas to the background
      }}
    ></canvas>
  );
};

export default CanvasAnimation;
