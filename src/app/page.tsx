import { FC, ReactElement } from "react";

import { ModalExample } from "./_components/examples";
import { Container } from "@/components/layouts/container";

const HomePage: FC = (): ReactElement => {
  return (
    <div className="min-h-screen py-20">
      <Container className="flex flex-col items-center gap-10">
        <ModalExample />
      </Container>
    </div>
  );
};

export default HomePage;
