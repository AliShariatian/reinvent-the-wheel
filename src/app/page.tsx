import { FC, ReactElement } from "react";

import { ModalExample } from "./_components/examples";

const HomePage: FC = (): ReactElement => {
  return (
    <div className="min-h-screen">
      <ModalExample />
    </div>
  );
};

export default HomePage;
