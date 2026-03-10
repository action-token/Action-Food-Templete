import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";

import { cn } from "@actionverse/ui";
import { ThemeProvider, ThemeToggle } from "@actionverse/ui/theme";
import { Toaster } from "@actionverse/ui/toast";

import { env } from "~/env";
import { TRPCReactProvider } from "~/trpc/react";

import "~/app/styles.css";

import { Header } from "~/components/header/header";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://turbo.t3.gg"
      : "http://localhost:3000",
  ),
  title: "Efood",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const geistSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "bg-background text-foreground min-h-screen font-sans antialiased",
        geistSans.variable,
        geistMono.variable,
      )}
    >
      <body>
        <div style={{ display: "contents" }}>
          <ThemeProvider>
            <TRPCReactProvider>
              <Header />
              {props.children}
              <div className="absolute right-4 bottom-4">
                <ThemeToggle />
              </div>
              <Toaster />
            </TRPCReactProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
