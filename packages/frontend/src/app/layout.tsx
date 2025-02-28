import { UIProvider } from "@yamada-ui/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo",
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
