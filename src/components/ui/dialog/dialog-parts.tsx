import type { FC, HTMLAttributes } from "react";
import { cn } from "@/utils";

export const DialogHeader: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div
    data-slot="dialog-header"
    className={cn("mb-4 flex flex-col gap-1.5", className)}
    {...props}
  />
);

export const DialogTitle: FC<HTMLAttributes<HTMLHeadingElement>> = ({ className, ...props }) => (
  <h2 data-slot="dialog-title" className={cn("text-lg font-semibold", className)} {...props} />
);

export const DialogDescription: FC<HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => <p data-slot="dialog-description" className={cn("text-sm", className)} {...props} />;

export const DialogFooter: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div
    data-slot="dialog-footer"
    className={cn("mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
    {...props}
  />
);
