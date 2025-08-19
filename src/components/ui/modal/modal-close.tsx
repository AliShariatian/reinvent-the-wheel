"use client";

import { ComponentProps, FC, MouseEvent, useCallback } from "react";
import { useModalContext } from "./use-modal-context";
import { cn } from "@/utils";

type Props = ComponentProps<"button">;

export const ModalClose: FC<Props> = ({ className, onClick, children, ...props }) => {
  const { closeModal } = useModalContext();

  const handleClick = useCallback(
    (ev: MouseEvent<HTMLButtonElement>) => {
      closeModal();
      onClick?.(ev);
    },
    [closeModal, onClick],
  );

  return (
    <button onClick={handleClick} className={cn("cursor-pointer", className)} {...props}>
      {children}
    </button>
  );
};
