import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

// Optimize font loading
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "Anton | Freelancer And Web Developer From Bangladesh",
  description: "Freelance web developer with 3+ years of experience creating responsive, user-friendly websites and web applications.",
  keywords: ["Anton", "Web Developer", "Freelance Developer", "Portfolio", "Bangladesh", "Frontend", "Backend", "HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "Python", "Express", "Java", "MySQL"],
  authors: [{ name: "Anton", url: "#" }],
  creator: "Anton",
  metadataBase: new URL("https://mehedims.com"),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mehedims.com",
    title: "Anton | Freelancer And Web Developer From Bangladesh",
    description: "Freelance web developer with 3+ years of experience creating responsive, user-friendly websites and web applications.",
    siteName: "Anton | Freelancer And Web Developer From Bangladesh",
    images: [
      {
        url: "/images/socialshare.png",
        width: 1200,
        height: 630,
        alt: "Anton - Web Developer Portfolio",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anton | Freelancer And Web Developer From Bangladesh",
    description: "Freelance web developer with 3+ years of experience creating responsive, user-friendly websites and web applications.",
    images: ["/images/socialshare.png"],
    creator: "@mehedihasan",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://mehedims.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
