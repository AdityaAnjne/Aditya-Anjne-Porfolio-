import type { Metadata, Viewport } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import FrozenBackground from "@/components/FrozenBackground";
import ScrollProgress from "@/components/ScrollProgress";
import MagneticTargets from "@/components/MagneticTargets";
import SeasonProvider, {
  SEASON_BOOT_SCRIPT,
} from "@/components/SeasonProvider";
import LanguageProvider from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "Aditya Anjne — Software Engineering Student",
  description:
    "Portfolio of Aditya Anjne, a software engineering student building full-stack web applications with Java, Spring Boot, React, and AI.",
  authors: [{ name: "Aditya Anjne" }],
  openGraph: {
    title: "Aditya Anjne — Software Engineering Student",
    description:
      "Full-stack software engineering portfolio: Java, Spring Boot, React, and AI.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Anjne — Software Engineering Student",
    description:
      "Full-stack software engineering portfolio: Java, Spring Boot, React, and AI.",
  },
};

export const viewport: Viewport = {
  themeColor: "#060e1c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        {/* Apply the selected season before hydration. */}
        <script dangerouslySetInnerHTML={{ __html: SEASON_BOOT_SCRIPT }} />
      </head>
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <LanguageProvider>
          <SeasonProvider>
            <FrozenBackground />
            <ScrollProgress />
            {children}
            <CustomCursor />
            <MagneticTargets />
          </SeasonProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
