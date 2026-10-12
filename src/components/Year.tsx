"use client";

import { useEffect, useState } from "react";

/** Current year, rendered on the client to stay prerender-safe. */
export default function Year({ fallback = 2026 }: { fallback?: number }) {
  const [year, setYear] = useState(fallback);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
