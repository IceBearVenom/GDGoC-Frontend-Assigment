"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  /** Design width of the children, in px */
  width: number;
  /** Design height of the children, in px */
  height: number;
  className?: string;
  children: ReactNode;
};

/**
 * Renders absolutely-positioned artwork at its original size, then scales it
 * down uniformly to fit the available width (never scales above 1).
 */
export default function ScaleToFit({ width, height, className = "", children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(Math.min(1, el.clientWidth / width));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div
      ref={ref}
      className={`w-full ${className}`}
      style={{ maxWidth: width, height: height * scale }}
    >
      <div
        className="relative origin-top-left"
        style={{ width, height, transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
