"use client";

import { useEffect, useRef } from "react";

/**
 * A dot grid that brightens and lifts toward the pointer.
 * Static (no animation loop) when reduced motion is requested or on touch-only devices.
 */
export function HeroGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const gap = 30;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let running = false;
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
    let t = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!running) draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const radius = 190;
      const cols = Math.ceil(w / gap) + 1;
      const rows = Math.ceil(h / gap) + 1;
      const ox = (w - (cols - 1) * gap) / 2;
      const oy = (h - (rows - 1) * gap) / 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          let x = ox + c * gap;
          let y = oy + r * gap;
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const near = Math.max(0, 1 - dist / radius);
          // Slow ambient wave so the grid feels alive without the pointer.
          const wave = reduce ? 0 : (Math.sin(c * 0.35 + t) + Math.cos(r * 0.3 + t * 0.8)) * 0.5;
          if (near > 0) {
            x += (dx / (dist || 1)) * near * 6;
            y += (dy / (dist || 1)) * near * 6;
          }
          const alpha = 0.14 + Math.max(0, wave) * 0.06 + near * 0.75;
          const size = 1 + near * 1.6;
          ctx.fillStyle =
            near > 0.05 ? `rgba(120, 152, 255, ${alpha})` : `rgba(150, 172, 224, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const loop = () => {
      t += 0.012;
      pointer.x += (pointer.tx - pointer.x) * 0.12;
      pointer.y += (pointer.ty - pointer.y) * 0.12;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = e.clientX - rect.left;
      pointer.ty = e.clientY - rect.top;
      if (pointer.x < -1000) {
        pointer.x = pointer.tx;
        pointer.y = pointer.ty;
      }
    };
    const onLeave = () => {
      pointer.tx = -9999;
      pointer.ty = -9999;
    };

    // Only animate while the hero is on screen.
    const io = new IntersectionObserver(([entry]) => {
      if (reduce) return;
      if (entry.isIntersecting && !running) {
        running = true;
        raf = requestAnimationFrame(loop);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });

    resize();
    io.observe(canvas);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    if (finePointer && !reduce) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 size-full [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_35%,transparent_85%)]"
    />
  );
}
