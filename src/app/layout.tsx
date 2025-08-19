import { FC, ReactElement, ReactNode } from "react";
import type { Metadata } from "next";

import { geistMono, geistSans } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reinvent The Wheel",
  description: "Reinvent The Wheel Practice",
};

type Props = Readonly<{
  children: ReactNode;
}>;

const RootLayout: FC<Props> = ({ children }): ReactElement => {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
