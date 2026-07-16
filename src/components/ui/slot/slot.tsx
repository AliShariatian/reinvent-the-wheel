"use client";

import { cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";

type AnyProps = Record<string, unknown>;

export interface SlotProps extends AnyProps {
  children: ReactNode;
}

/**
 * Merges its own props onto its single child element instead of rendering a
 * wrapper. Handlers (onClick, onFocus, ...) are composed so both the child's
 * own handler and the slot's handler run; `className` is concatenated.
 * This is the mechanism behind every `asChild` prop in the Dialog components.
 */
export function Slot({ children, ...slotProps }: SlotProps) {
  if (!isValidElement(children)) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.error("Slot: expected a single valid React element as `children`.");
    }
    return null;
  }

  const child = children as ReactElement<AnyProps>;
  return cloneElement(child, mergeProps(child.props, slotProps));
}

function mergeProps(childProps: AnyProps, slotProps: AnyProps): AnyProps {
  const merged: AnyProps = { ...childProps, ...slotProps };

  for (const key in slotProps) {
    const childValue = childProps[key];
    const slotValue = slotProps[key];
    const isEventHandler = /^on[A-Z]/.test(key);

    if (isEventHandler && typeof childValue === "function" && typeof slotValue === "function") {
      merged[key] = (...args: unknown[]) => {
        (slotValue as (...a: unknown[]) => void)(...args);
        (childValue as (...a: unknown[]) => void)(...args);
      };
    } else if (
      key === "className" &&
      typeof childValue === "string" &&
      typeof slotValue === "string"
    ) {
      merged[key] = `${slotValue} ${childValue}`;
    }
  }

  return merged;
}
