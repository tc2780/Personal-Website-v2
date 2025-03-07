import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import "animate.css/animate.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tracy Chow",
  description: "Personal Website",
  openGraph: {
    title: "Tracy Chow",
    description: "Personal Website",
    url: "https://tc2780.netlify.app/",
    images: [
      {
        url: "https://tc2780.netlify.app/images/websiteV2.png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-W3M7ZF33QS" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
