import { Box, UIProvider } from "@yamada-ui/react";
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
        <UIProvider>
          <Box
            height="100vh"
            width="100vw"
            display="flex"
            alignItems="center"
            justifyContent="center"
            paddingY="2xl"
            paddingX="4xl"
          >
            {children}
          </Box>
        </UIProvider>
      </body>
    </html>
  );
}
