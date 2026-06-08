'use client';
import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * end * Math.pow(10, decimals)) / Math.pow(10, decimals));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [hasStarted, end, duration, decimals]);

  return (
    <span ref={ref} style={{ fontFamily: 'var(--font-accent)', fontWeight: 700 }}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
