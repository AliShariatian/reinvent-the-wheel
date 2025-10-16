import { createRef, useEffect } from "react";

type Params = {
  scaleSize?: number;
  duration?: number;
};

export const useRipple = <T extends HTMLElement>({
  scaleSize = 20,
  duration = 500,
}: Params = {}) => {
  const rippleRef = createRef<T>();

  useEffect(() => {
    const targetElement: T | null = rippleRef.current;
    if (!targetElement) return;

    const handleClick = (ev: MouseEvent): void => {
      const rect = targetElement.getBoundingClientRect();
      // BUG: Cant get center point of click
      const insideX = ev.clientX - rect.left;
      const insideY = ev.clientY - rect.top;

      const targetElementBorderRadius = window.getComputedStyle(targetElement).borderRadius;

      targetElement.style.position = "relative";

      const rippleSpan = document.createElement("span");
      rippleSpan.classList.add("ripple");
      rippleSpan.style.setProperty("--top", `${insideY}px`);
      rippleSpan.style.setProperty("--left", `${insideX}px`);
      rippleSpan.style.setProperty("--borderRadius", targetElementBorderRadius);
      rippleSpan.style.setProperty("--scaleSize", `${scaleSize}`);
      rippleSpan.style.setProperty("--duration", `${duration}ms`);

      targetElement.appendChild(rippleSpan);
      setTimeout(() => rippleSpan.remove(), duration);
    };

    targetElement.addEventListener("click", handleClick);

    return () => targetElement.removeEventListener("click", handleClick);
  }, [rippleRef, scaleSize, duration]);

  return rippleRef;
};
