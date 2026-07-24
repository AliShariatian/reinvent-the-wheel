"use client";

import { FC, PropsWithChildren, ReactElement } from "react";
import { IconContext } from "react-icons";

export const IconsProvider: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return <IconContext value={{ size: "20" }}>{children}</IconContext>;
};
