"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const SessionCounter = ({ target = 5000, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    let frame;
    if (inView) {
      let start = 0;
      const startTime = performance.now();

      const animate = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1); // max 1
        const current = Math.floor(progress * target);
        setCount(current);

        if (progress < 1) {
          frame = requestAnimationFrame(animate);
        }
      };

      setCount(0); // reset on view
      frame = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return (
    <div ref={ref}>
      {count.toLocaleString()}
    </div>
  );
};

export default SessionCounter;
