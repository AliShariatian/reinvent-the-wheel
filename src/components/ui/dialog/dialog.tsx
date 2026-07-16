"use client";

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

interface DialogContextValue {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const DialogContext = createContext<DialogContextValue | null>(null);

export function useDialogContext(): DialogContextValue {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error(
      "Dialog compound components (DialogTrigger, DialogContent, ...) must be rendered inside <Dialog>.",
    );
  }
  return context;
}

export interface DialogProps {
  children: ReactNode;
  /** Controlled open state. Omit for uncontrolled usage. */
  open?: boolean;
  /** Initial state when uncontrolled. */
  defaultOpen?: boolean;
  /** Fires whenever the open state changes, from either a trigger or the native dialog (ESC / backdrop). */
  onOpenChange?: (open: boolean) => void;
}

/**
 * Root component. Just a context provider — the actual <dialog> element
 * lives in DialogContent so it can be shown with showModal().
 */
export function Dialog({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
}: DialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen: Dispatch<SetStateAction<boolean>> = (value) => {
    const next = typeof value === "function" ? (value as (prev: boolean) => boolean)(open) : value;

    if (!isControlled) setUncontrolledOpen(next);
    onOpenChange?.(next);
  };

  return <DialogContext.Provider value={{ open, setOpen }}>{children}</DialogContext.Provider>;
}
