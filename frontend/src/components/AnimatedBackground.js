import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const lines = [];
    const lineCount = 30;

    for (let i = 0; i < lineCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speed = 0.5 + Math.random();
      lines.push({ x, y, speed });
    }

    function draw() {
      ctx.fillStyle = "rgba(10, 10, 30, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + 200, line.y + 200);
        ctx.strokeStyle = "rgba(75, 166, 168, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(line.x + 100, line.y + 100, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(75, 166, 168, 0.8)";
        ctx.fill();

        line.x -= line.speed;
        line.y -= line.speed;

        if (line.x < -200 || line.y < -200) {
          line.x = canvas.width;
          line.y = Math.random() * canvas.height;
        }
      });

      requestAnimationFrame(draw);
    }

    draw();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="absolute inset-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default AnimatedBackground;
