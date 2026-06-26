import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chaitrali Kadam | DevOps & Cloud Engineer",
  description:
    "DevOps Engineer, Cloud Engineer, and Software Developer specializing in AWS, Azure, Kubernetes, CI/CD automation, and AI-powered cloud solutions. Based in Denver, Colorado.",
  keywords: [
    "Chaitrali Kadam",
    "DevOps Engineer",
    "Cloud Engineer",
    "Software Developer",
    "AWS",
    "Azure",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Denver",
    "Portfolio",
  ],
  authors: [{ name: "Chaitrali Kadam" }],
  creator: "Chaitrali Kadam",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Chaitrali Kadam | DevOps & Cloud Engineer",
    description:
      "Building scalable cloud infrastructure, DevOps automation & AI-powered solutions.",
    siteName: "Chaitrali Kadam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaitrali Kadam | DevOps & Cloud Engineer",
    description:
      "Building scalable cloud infrastructure, DevOps automation & AI-powered solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
