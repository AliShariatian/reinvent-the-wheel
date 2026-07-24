import type { ReactNode } from "react";
import type { LinkProps } from "next/link";

export type ActiveProps = { isActive: boolean };
export type RenderProps = ActiveProps & { isPending: boolean };
export type Renderable<T> = T | ((props: RenderProps) => T);

export type NavLinkProps<T extends string> = Omit<LinkProps<T>, "className" | "children"> & {
  className?: string | ((props: ActiveProps) => string | undefined);
  children?: Renderable<ReactNode>;
  exact?: boolean;
};

export type NavLinkContentProps = {
  isActive: boolean;
  children?: Renderable<ReactNode>;
};
