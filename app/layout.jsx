import "./globals.css";
import { Inter } from "next/font/google";
import UniversityProvider from "@/providers/university-provider";

const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "@/providers/theme-provider";

import { Navbar } from "../components/navbar";
import { SiteFooter } from "../components/site-footer";
export const metadata = {
  title: "Üniversite Bilgi Sistemi",
  description: "Generated by Fırat Altun",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UniversityProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <header className="flex min-h-screen w-full flex-col p-4">
              <Navbar />
              {children}
              <SiteFooter />
            </header>
          </ThemeProvider>
        </UniversityProvider>
      </body>
    </html>
  );
}
