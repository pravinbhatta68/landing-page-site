import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalpravin.example"),
  title: { default: "Free AI Marketing Consultation | Digital Pravin", template: "%s | Digital Pravin" },
  description: "Get a customized AI marketing plan designed to help your business attract qualified leads and improve sales.",
  openGraph: { title: "Get Your Customized AI Marketing Plan", description: "Book a free one-to-one AI marketing consultation for your business.", type: "website", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Get Your Customized AI Marketing Plan", description: "Book a free one-to-one AI marketing consultation for your business.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={manrope.variable}>{children}</body></html>;
}
