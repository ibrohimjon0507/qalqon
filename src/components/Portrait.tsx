"use client";

import { useEffect, useRef } from "react";
import { drawPortrait } from "@/lib/canvas";

type Props = {
  name: string;
  c1?: string;
  c2?: string;
  photo?: string;
  resW?: number;
  resH?: number;
  className?: string;
};

/** Lawyer portrait: real photo if `photo` set, otherwise a monogram canvas. */
export default function Portrait({
  name,
  c1,
  c2,
  photo,
  resW = 600,
  resH = 800,
  className = "",
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!photo && ref.current) {
      drawPortrait(ref.current, { name, c1, c2 });
    }
  }, [name, c1, c2, photo]);

  if (photo) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={photo}
        alt={name}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <canvas
      ref={ref}
      width={resW}
      height={resH}
      role="img"
      aria-label={name}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
