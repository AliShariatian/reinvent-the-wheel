"use client";

import { type ButtonHTMLAttributes, type MouseEvent, type ReactElement } from "react";

import { useDialogContext } from "./dialog";
import { Slot, type SlotProps } from "../slot";

export interface DialogTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Render the child element directly instead of wrapping it in a <button>. */
  asChild?: boolean;
  children: ReactElement | string;
}

export function DialogTrigger({ asChild = false, onClick, ...props }: DialogTriggerProps) {
  const { setOpen } = useDialogContext();

  const sharedProps: SlotProps = {
    "data-slot": "dialog-trigger",
    onClick: (e: MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      setOpen(true);
    },
    ...props,
  };

  if (asChild) return <Slot {...sharedProps} />;
  return <button type="button" {...sharedProps} />;
}
