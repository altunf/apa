"use client";
import React from "react";
import Link from "next/link";
import { Menu, School } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <School className="h-6 w-6" />
            <span className="sr-only">Anasayfa</span>
          </Link>{" "}
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground"
          >
            Anasayfa
          </Link>
          <Link
            href="/universities"
            className="text-muted-foreground hover:text-foreground"
          >
            Üniversiteler
          </Link>
          <Link
            href="/academics"
            className="text-muted-foreground hover:text-foreground"
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
      </SheetContent>
    </Sheet>
  );
};
