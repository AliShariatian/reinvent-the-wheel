"use client";

import { FC, ReactNode, useState } from "react";
import { useBodyScroll } from "@/hooks";
import { ModalContext } from "./use-modal-context";

type Props = {
  children: ReactNode;
};

export const Modal: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useBodyScroll({ scroll: !isOpen });

  return (
    <ModalContext.Provider
      value={{ isOpenModal: isOpen, openModal: handleOpen, closeModal: handleClose }}
    >
      {children}
    </ModalContext.Provider>
  );
};
