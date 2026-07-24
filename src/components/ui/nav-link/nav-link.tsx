"use client";

import { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { checkActive, resolveClassName } from "./nav-link.util";
import { NavLinkContent } from "./nav-link-content";
import type { NavLinkProps } from "./nav-link.type";

/**
 * NavLink Component
 *
 * @example
 * // plain string: active styled via data-current in CSS/Tailwind
 * <NavLink href="/" className="data-[current='true']:font-bold">
 *   Home
 * </NavLink>
 *
 * // function className: swap a class based on isActive
 * <NavLink href="/" className={({ isActive }) => (isActive ? "active" : "")}>
 *   Home
 * </NavLink>
 *
 * // function children with isPending: show a pending state while navigating
 * <NavLink href="/">
 *   {({ isActive, isPending }) => (
 *     <>
 *       <HomeIcon filled={isActive} />
 *       Home
 *       {isPending && <Spinner />}
 *     </>
 *   )}
 * </NavLink>
 *
 * @see https://aurorascharff.no/posts/building-an-active-navlink-component-in-nextjs/
 */
export function NavLink<T extends string>({
  href,
  children,
  className,
  exact = false,
  ...rest
}: NavLinkProps<T>): ReactElement {
  const pathname = usePathname();
  const isActive = checkActive(pathname, href.toString(), exact);

  return (
    <Link
      href={href}
      data-current={isActive ? true : false}
      className={resolveClassName(className, { isActive })}
      {...rest}
    >
      <NavLinkContent isActive={isActive}>{children}</NavLinkContent>
    </Link>
  );
}
