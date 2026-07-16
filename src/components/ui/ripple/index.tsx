"use client";

import { FC, ReactElement, ReactNode } from "react";

import { useRipple } from "@/hooks/use-ripple";

type Props = {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
};

export const Ripple: FC<Props> = ({ disabled, ...props }): ReactElement => {
  const ref = useRipple<HTMLDivElement>({ scaleSize: 30, disabled });
  return <div ref={ref} {...props} />;
};
