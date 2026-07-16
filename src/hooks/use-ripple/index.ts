import { useEffect, useRef, type RefObject } from "react";

import styles from "./ripple.module.css";

type Params = {
  scaleSize?: number;
  duration?: number;
  disabled?: boolean;
};

export const useRipple = <T extends HTMLElement>({
  scaleSize = 20,
  duration = 500,
  disabled = false,
}: Params = {}): RefObject<T | null> => {
  const rippleRef = useRef<T>(null);

  useEffect(() => {
    if (disabled) return;

    const node = rippleRef.current;
    if (!node) return;

    const targetNodeStyles = window.getComputedStyle(node);

    const needsPositionFix = targetNodeStyles.position === "static";
    if (needsPositionFix) {
      node.style.position = "relative";
    }

    const activeTimeouts = new Set<ReturnType<typeof setTimeout>>();

    const handlePointerDown = (ev: PointerEvent): void => {
      const rect = node.getBoundingClientRect();

      const insideX = ev.clientX - rect.left;
      const insideY = ev.clientY - rect.top;

      const rippleNode = document.createElement("span");
      rippleNode.classList.add(styles.ripple);
      rippleNode.style.setProperty("--top", `${insideY}px`);
      rippleNode.style.setProperty("--left", `${insideX}px`);
      rippleNode.style.setProperty("--borderRadius", targetNodeStyles.borderRadius);
      rippleNode.style.setProperty("--scaleSize", `${scaleSize}`);
      rippleNode.style.setProperty("--duration", `${duration}ms`);

      node.appendChild(rippleNode);

      const timeoutId = setTimeout(() => {
        rippleNode.remove();
        activeTimeouts.delete(timeoutId);
      }, duration);

      activeTimeouts.add(timeoutId);
    };

    node.addEventListener("pointerdown", handlePointerDown);

    return () => {
      node.removeEventListener("pointerdown", handlePointerDown);
      activeTimeouts.forEach(clearTimeout);
      activeTimeouts.clear();

      if (needsPositionFix) {
        node.style.removeProperty("position");
      }
    };
  }, [scaleSize, duration, disabled]);

  return rippleRef;
};
