"use client";

import { FC, ReactElement, useCallback } from "react";
import { useModalContext } from "./use-modal-context";

type Props = {
  disableClose?: boolean;
};

export const ModalOverlay: FC<Props> = ({ disableClose = false }): ReactElement => {
  const { closeModal } = useModalContext();

  const handleClose = useCallback(() => {
    if (!disableClose) {
      closeModal();
    }
  }, [closeModal, disableClose]);

  return (
    <div
      onClick={handleClose}
      className="absolute top-0 right-0 bottom-0 left-0 backdrop-blur-xs"
    />
  );
};
