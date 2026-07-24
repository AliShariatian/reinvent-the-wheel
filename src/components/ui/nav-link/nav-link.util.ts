import type { ActiveProps, Renderable, RenderProps } from "./nav-link.type";

export function resolveContent<T>(
  value: Renderable<T> | undefined,
  props: RenderProps,
): T | undefined {
  return typeof value === "function" ? (value as (p: RenderProps) => T)(props) : value;
}

export function resolveClassName(
  value: string | ((props: ActiveProps) => string | undefined) | undefined,
  props: ActiveProps,
): string | undefined {
  return typeof value === "function" ? value(props) : value;
}

export function checkActive(pathname: string, href: string, exact?: boolean): boolean {
  if (exact || href === "/") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}
