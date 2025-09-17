import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import ThemeToggle from "./../components/ui/themesToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/context/LanguageContext";
import { Loading } from "@/components/Loading";

export const metadata: Metadata = {
  title: "Reqonic - Technology & IT Solutions",
  description:
    "Professional technology and IT solutions for individuals and businesses. Database systems, cloud services, IT infrastructure, and more.",
  generator: "v0.app",
  icons: {
    icon: "/ReqonicLogoWhite-BlueBackground.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </LanguageProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
