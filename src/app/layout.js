import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import StickyFooter from "@/components/sticky-footer";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arnav Agarwal",
  description: "Welcome to my corner of the internet :)",
};

// ...existing code...
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="">
          <div className="relative z-10 bg-background w-full shadow-lg">
            {children}
          </div>
          <StickyFooter />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
// ...existing code...