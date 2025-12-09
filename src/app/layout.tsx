import { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/app/theme-provider";

import "./globals.css";


export const metadata: Metadata = {
  title: "Rishi Kapadia — Developer | Builder | Problem Solver",
  description:
    "Full-stack developer passionate about building fast, intuitive digital experiences. I blend strong fundamentals in web development, AI, and core CS concepts to craft impactful products—from scalable MERN apps to intelligent tools powered by automation and LLMs",
  authors: [{ name: "Rishi Kapadia", url: "" }],
  openGraph: {
    title: "Rishi Kapadia — Developer | Builder | Problem Solver",
    description:
      "Full-stack developer passionate about building fast, intuitive digital experiences. I blend strong fundamentals in web development, AI, and core CS concepts to craft impactful products—from scalable MERN apps to intelligent tools powered by automation and LLMs",
    siteName: "Rishi Kapadia — Developer | Builder | Problem Solver",
    url: "",
    type: "website",
    images: [
      {
        url: "/assets/og.webp",
        width: 1200,
        height: 630,
        alt: "Rishi Kapadia Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishi Kapadia — Developer | Builder | Problem Solver",
    description:
      "Full-stack developer passionate about building fast, intuitive digital experiences. I blend strong fundamentals in web development, AI, and core CS concepts to craft impactful products—from scalable MERN apps to intelligent tools powered by automation and LLMs.",
    images: ["/assets/logo.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  }
};


const drukwide = localFont({
  src: "../components/fonts/Druk-Super-Trial.otf",
  variable: "--font-drukwide",
  display: "swap",
});

const druksuper = localFont({
  src: "../components/fonts/DrukText-Super-Trial.otf",
  variable: "--font-druksuper",
  display: "swap",
});

const leaguespartan = localFont({
  src: "../components/fonts/LeagueSpartan-Regular.ttf",
  variable: "--font-leaguespartan",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${drukwide.variable} ${druksuper.variable} ${leaguespartan.variable}`}
      >
        <body className="font-leaguespartan antialiased bg-[#FAF9F6] min-h-screen dark:bg-[#0a0a0a]">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            enableColorScheme
            disableTransitionOnChange
          >
          <main className="mx-auto max-w-3xl flex-1 px-5 pb-28">
            {children}
          </main>
            <Navbar />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
