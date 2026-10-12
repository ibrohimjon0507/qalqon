"use client";

import { useEffect, useRef } from "react";
import { drawMosaic } from "@/lib/canvas";

export default function MosaicBg({ tile = 36, className = "" }: { tile?: number; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const render = () => drawMosaic(cv, tile);
    render();
    let t: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(t);
      t = setTimeout(render, 250);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
    };
  }, [tile]);

  return <canvas ref={ref} aria-hidden className={`h-full w-full ${className}`} />;
}
