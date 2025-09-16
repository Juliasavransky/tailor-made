import { useCallback, useEffect, useState } from "react";

export function useCarousel(length: number, options?: { keyboard?: boolean }) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % length) + length) % length); // מבטיח ערך תקין גם עם מספר שלילי
    },
    [length]
  );

  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  // אפשרות: תמיכה בדפדוף עם מקלדת
  useEffect(() => {
    if (!options?.keyboard) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, options?.keyboard]);

  return { index, next, prev, goTo, setIndex };
}
