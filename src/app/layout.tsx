import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { MotionProvider } from "@/components/MotionProvider";
import { profile } from "@/data/site";
import "./globals.css";

const geist = localFont({
  src: "../fonts/Geist-Variable.woff2",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

const bricolage = localFont({
  src: "../fonts/Bricolage-Variable.woff2",
  variable: "--font-bricolage",
  weight: "200 800",
  display: "swap",
});

const description =
  "Kishan Kumar Jha is a full stack developer in New Delhi building responsive websites, Shopify stores, backend APIs and business web applications with React, Next.js and Node.js.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: "Kishan Kumar Jha — Full Stack Developer | MERN, React, Next.js",
  description,
  authors: [{ name: profile.name }],
  keywords: [
    "Kishan Kumar Jha",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "Shopify developer",
    "New Delhi",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Kishan Kumar Jha — Full Stack Developer",
    description,
    siteName: "Kishan Kumar Jha",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kishan Kumar Jha — Full Stack Developer",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#04060c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${bricolage.variable}`}>
      <body className="grain min-h-dvh">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
