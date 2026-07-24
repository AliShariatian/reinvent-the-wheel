import { FC, ReactElement } from "react";
import { type Metadata } from "next";

import { NavLink } from "@/components/ui/nav-link";
import { Links } from "./links";

export const metadata: Metadata = {
  title: "NavLink Example",
};

type Props = PageProps<"/nav-link/[id]">;

const NavLinkExamplePage: FC<Props> = async ({ params }): Promise<ReactElement> => {
  const { id } = await params;

  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <Links />

      <div className="mt-20 flex flex-col items-center justify-center gap-10">
        <h1 className="text-2xl font-semibold">Page {id}</h1>

        <div className="flex items-center gap-4">
          <NavLink
            href={`/nav-link/${+id - 1}`}
            className="rounded-lg border border-slate-700 px-6 py-2 select-none hover:bg-slate-900"
          >
            Previous page <span className="text-sm opacity-80">({+id - 1})</span>
          </NavLink>

          <NavLink
            href={`/nav-link/${+id + 1}`}
            className="rounded-lg border border-slate-700 px-6 py-2 select-none hover:bg-slate-900"
          >
            Next page <span className="text-sm opacity-80">({+id + 1})</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavLinkExamplePage;
