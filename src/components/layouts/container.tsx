import type { FC, ReactElement, ReactNode, JSX } from "react";
import { cn } from "@/utils";

type Props = {
  children?: ReactNode;
  className?: string;
  as?: keyof Pick<JSX.IntrinsicElements, "div" | "section" | "main">;
};

export const Container: FC<Props> = ({ children, className, as: Tag = "div" }): ReactElement => {
  return <Tag className={cn("container mx-auto max-w-7xl px-5", className)}>{children}</Tag>;
};
