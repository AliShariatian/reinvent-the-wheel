"use client";

import { ComponentProps, FC, MouseEvent, useCallback } from "react";

import { useModalContext } from "./use-modal-context";
import { cn } from "@/utils";

type Props = ComponentProps<"button">;

export const ModalTrigger: FC<Props> = ({ className, onClick, children, ...props }) => {
  const { openModal: open } = useModalContext();

  const handleClick = useCallback(
    (ev: MouseEvent<HTMLButtonElement>) => {
      open();
      onClick?.(ev);
    },
    [onClick, open],
  );

  return (
    <button onClick={handleClick} className={cn("cursor-pointer", className)} {...props}>
      {children}
    </button>
  );
};
