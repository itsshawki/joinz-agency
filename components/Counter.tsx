"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: string;
  label: string;
}

export default function Counter({ target, label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated]);

  const animateCounter = () => {
    const numericMatch = target.match(/\d+/);
    
    if (!numericMatch) {
      setValue(target);
      return;
    }

    const numericPart = numericMatch[0];
    const prefix = target.split(numericPart)[0];
    const suffix = target.split(numericPart)[1];
    const end = parseInt(numericPart, 10);

    let start = 0;
    const duration = 2000;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setValue(`${prefix}${end}${suffix}`);
        clearInterval(timer);
      } else {
        setValue(`${prefix}${Math.floor(start)}${suffix}`);
      }
    }, stepTime);
  };

  return (
    <div ref={ref} className="text-center">
      <div className="text-primary font-headline font-extrabold text-4xl md:text-5xl mb-2">
        {value}
      </div>
      <div className="text-on-surface-variant text-xs font-bold">
        {label}
      </div>
    </div>
  );
}
