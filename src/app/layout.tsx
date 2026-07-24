import { FC, ReactElement, ReactNode } from "react";
import type { Metadata } from "next";

import { ReactScan } from "@/components/performance/react-scan";
import { IconsProvider } from "@/components/core/icons-provider";
import { Header } from "@/components/layouts/header";

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
      <ReactScan />

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <IconsProvider>
          <Header />

          {children}
        </IconsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
