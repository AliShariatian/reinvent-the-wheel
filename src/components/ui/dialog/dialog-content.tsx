"use client";

import {
  Suspense,
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type MouseEvent,
  type ReactNode,
} from "react";
import { useDialogContext } from "./dialog";
import { cn } from "@/utils";

export interface DialogContentProps extends Omit<ComponentPropsWithoutRef<"dialog">, "children"> {
  children: ReactNode;
  /** Shown via Suspense while lazy content (React.lazy / next/dynamic) is loading. */
  fallback?: ReactNode;
  /**
   * Keep children mounted after the first open instead of unmounting on close.
   * Off by default so heavy/lazy content is re-fetched fresh only when it
   * actually matters to you — turn on to preserve internal state (e.g. a form)
   * between opens.
   */
  keepMounted?: boolean;
  /** Disable closing on backdrop click. ESC still closes (native <dialog> behavior). */
  disableBackdropClose?: boolean;
}

export function DialogContent({
  children,
  fallback,
  keepMounted = false,
  disableBackdropClose = false,
  className,
  ...props
}: DialogContentProps) {
  const { open, setOpen } = useDialogContext();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const hasOpenedRef = useRef(false);

  if (open) hasOpenedRef.current = true;

  // Drive the native element from React state.
  useEffect(() => {
    const node = dialogRef.current;
    if (!node) return;

    if (open && !node.open) {
      node.showModal();
    } else if (!open && node.open) {
      node.close();
    }
  }, [open]);

  // Native <dialog> fires 'close' for both ESC and node.close() calls —
  // this is what keeps React state in sync when the user hits ESC.
  useEffect(() => {
    const node = dialogRef.current;
    if (!node) return;

    const handleClose = () => setOpen(false);
    node.addEventListener("close", handleClose);
    return () => node.removeEventListener("close", handleClose);
  }, [setOpen]);

  const handleBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (disableBackdropClose) return;
    // A click lands on the <dialog> element itself only when it hits the
    // backdrop area, since real content sits in a child wrapper.
    if (e.target === dialogRef.current) setOpen(false);
  };

  // This is the actual lazy-loading mechanism: children (and therefore any
  // React.lazy()/next-dynamic import inside them) aren't rendered at all
  // until the dialog has been opened at least once.
  const shouldRenderContent = keepMounted ? hasOpenedRef.current : open;

  return (
    <dialog
      ref={dialogRef}
      data-slot="dialog-content"
      onClick={handleBackdropClick}
      className={cn(
        "m-auto max-h-[85vh] w-full max-w-lg rounded-xl border bg-white p-6 shadow-xl",
        "backdrop:bg-black/50",
        "translate-y-2 opacity-0 open:translate-y-0 open:opacity-100",
        "starting:open:translate-y-2 starting:open:opacity-0",
        "backdrop:opacity-0 open:backdrop:opacity-100 starting:open:backdrop:opacity-0",
        "allow-discrete transition-[opacity,transform,overlay,display] duration-200",
        "backdrop:allow-discrete backdrop:transition-opacity backdrop:duration-200",
        className,
      )}
      {...props}
    >
      <div data-slot="dialog-content-inner">
        {shouldRenderContent && (
          <Suspense fallback={fallback ?? <DialogContentFallback />}>{children}</Suspense>
        )}
      </div>
    </dialog>
  );
}

function DialogContentFallback() {
  return (
    <div data-slot="dialog-loading" className="flex items-center justify-center py-10">
      <span className="size-5 animate-spin rounded-full border-2" />
    </div>
  );
}
