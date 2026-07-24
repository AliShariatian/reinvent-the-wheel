import { FC, ReactElement } from "react";
import Link from "next/link";

export const NavLinkExample: FC = (): ReactElement => {
  return (
    <section className="flex w-full flex-wrap items-center justify-center gap-8 rounded-3xl border border-slate-700 py-28">
      <Link href="/nav-link/1">Nav Link</Link>
    </section>
  );
};
