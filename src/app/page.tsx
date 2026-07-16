import { FC, ReactElement } from "react";

import { Container } from "@/components/layouts/container";

import { ModalExample, DialogExample, RippleExample } from "./_components/examples";

const HomePage: FC = (): ReactElement => {
  return (
    <div className="min-h-screen py-20">
      <Container className="flex flex-col items-center gap-10">
        <ModalExample />
        <DialogExample />
        <RippleExample />
      </Container>
    </div>
  );
};

export default HomePage;
