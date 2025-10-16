"use client";

import { FC, ReactElement, ReactNode } from "react";

import { useRipple } from "@/hooks/use-ripple";
import { cn } from "@/utils";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Ripple: FC<Props> = ({ children, className }): ReactElement => {
  const ref = useRipple<HTMLDivElement>({ scaleSize: 30 });

  return (
    <div ref={ref} className={cn("", className)}>
      {children}
    </div>
  );
};
