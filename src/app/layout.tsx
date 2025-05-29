import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Montserrat, Bungee } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "WorkPlay - Play Your Way",
  description: "A world of endless games to explore on WorkPlay!",
  keywords: ["games", "gaming platform", "tambola", "interactive games"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${montserrat.variable} ${bungee.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
