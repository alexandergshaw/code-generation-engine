import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Generation Playground",
  description: "Deterministic code generation playground UI",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
