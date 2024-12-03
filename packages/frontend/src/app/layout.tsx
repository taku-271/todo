import { UIProvider } from "@yamada-ui/react";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Test",
  description: "Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
