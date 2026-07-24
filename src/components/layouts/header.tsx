import { FC, ReactElement } from "react";

import { Container } from "./container";
import { NavLink } from "../ui/nav-link";

export const Header: FC = (): ReactElement => {
  return (
    <header className="sticky top-0 z-10 flex h-20 items-center border-b border-b-slate-800 bg-gray-950">
      <Container>
        <NavLink href="/" className="data-[current='true']:underline">
          Home
        </NavLink>
      </Container>
    </header>
  );
};
