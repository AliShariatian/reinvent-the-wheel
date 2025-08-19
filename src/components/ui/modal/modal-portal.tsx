"use client";

import { FC, ReactElement, ReactNode } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "./use-modal-context";

type Props = {
  children: ReactNode;
};

export const ModalPortal: FC<Props> = ({ children }): ReactElement | null => {
  const { isOpenModal } = useModalContext();

  if (!isOpenModal) return null;

  return createPortal(
    <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center">
      {children}
    </div>,
    document.body,
  );
};
