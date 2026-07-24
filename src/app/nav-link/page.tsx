import { FC, ReactElement } from "react";
import { redirect } from "next/navigation";

const Page: FC = (): ReactElement => {
  redirect("/");
};

export default Page;
