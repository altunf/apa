"use client";
import React from "react";
import Link from "next/link";
import { MobileNavbar } from "@/components/mobile-navbar";
import { School } from "lucide-react";

import { ThemeButton } from "./theme-button";

export const Navbar = () => {
  return (
    <main className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <School className="h-6 w-6" />
          <span className="sr-only">Akademik Psikoloji Atlası</span>
        </Link>
        <Link
          href="/"
          className="text-foreground transition-colors hover:text-foreground flex items-center justify-center"
        >
          Anasayfa
        </Link>
        <Link
          href="/universities"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Üniversiteler
        </Link>
        <Link
          href="/academics"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Akademisyenler
        </Link>
        <Link
          href="/variables-and-definitions"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Değişkenler ve Tanımları
        </Link>
         <Link
          href="/about"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Hakkında
        </Link> 
        <Link
          href="/charts"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Görselleştirme
        </Link> 
      </nav>
      <MobileNavbar />
      <div>
        <ThemeButton />
      </div>
    </main>
  );
};
