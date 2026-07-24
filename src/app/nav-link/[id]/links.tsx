"use client";

import { FC, ReactElement } from "react";
import { TbApple, TbAppleFilled } from "react-icons/tb";

import { NavLink } from "@/components/ui/nav-link";
import { Spinner } from "@/components/ui/spinner";

export const Links: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-5 gap-5">
      {Array.from({ length: 20 }).map((_, index) => (
        <NavLink
          key={index}
          href={`/nav-link/${index + 1}`}
          className="data-[current='true']:bb grid grid-cols-2 items-center justify-center gap-1 rounded-sm px-2 py-1"
        >
          {({ isActive, isPending }) => (
            <>
              {isPending ? <Spinner /> : isActive ? <TbAppleFilled /> : <TbApple />}
              <span>{index + 1}</span>
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};
