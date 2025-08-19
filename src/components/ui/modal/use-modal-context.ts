import { createContext, useContext } from "react";

type ModalContextType = {
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Component must be used within a Modal");
  return context;
};
