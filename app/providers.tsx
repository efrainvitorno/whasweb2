"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="className"
      enableSystem={false}
      defaultTheme="dark"
    >
      {children}
    </ThemeProvider>
  );
}
