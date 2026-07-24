import { ReactElement } from "react";
import { useLinkStatus } from "next/link";

import { resolveContent } from "./nav-link.util";
import type { NavLinkContentProps } from "./nav-link.type";

export function NavLinkContent({ isActive, children }: NavLinkContentProps): ReactElement {
  const { pending: isPending } = useLinkStatus();
  return <>{resolveContent(children, { isActive, isPending })}</>;
}
