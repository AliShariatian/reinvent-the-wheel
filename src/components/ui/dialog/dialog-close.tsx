"use client";

import { type ButtonHTMLAttributes, type MouseEvent, type ReactElement } from "react";

import { useDialogContext } from "./dialog";
import { Slot, type SlotProps } from "../slot";

export interface DialogCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children: ReactElement | string;
}

export function DialogClose({ asChild = false, onClick, ...props }: DialogCloseProps) {
  const { setOpen } = useDialogContext();

  const sharedProps: SlotProps = {
    "data-slot": "dialog-close",
    onClick: (e: MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      setOpen(false);
    },
    ...props,
  };

  if (asChild) return <Slot {...sharedProps} />;
  return <button type="button" {...sharedProps} />;
}
