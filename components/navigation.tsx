"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ui/themesToggle";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "next-themes";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="relative w-32 h-32 rounded-lg overflow-hidden bg-muted" />
    );
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const navItems = [
    { href: "/", label: language === "en" ? "Home" : "الرئيسية" },
    { href: "/services", label: language === "en" ? "Services" : "الخدمات" },
    { href: "/about", label: language === "en" ? "About Us" : "من نحن" },
    { href: "/contact", label: language === "en" ? "Contact" : "اتصل بنا" },
  ];

  return (
    <nav
      className="
  sticky top-0 z-50 w-full border-b border-border overflow-hidden
  bg-white/60 dark:bg-[#1C2443] backdrop-blur"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <div className="relative w-32 h-32 rounded-lg overflow-hidden">
                <Image
                  src={
                    currentTheme === "dark"
                      ? "/ReqonicLogoWhite-BlueBackground.svg"
                      : "/image.svg"
                  }
                  alt="Reqonic Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline gap-5 rtl:space-x-reverse rtl:ml-0 rtl:mr-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center gap-3  rtl:space-x-reverse">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1 rtl:space-x-reverse cursor-pointer"
            >
              <Globe className="h-4 w-4" />
              <span>{language === "en" ? "العربية" : "English"}</span>
            </Button>

            <ThemeToggle />
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="lg" className="p-2">
                  <Menu className="h-10 w-10" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side={language === "ar" ? "right" : "left"}
                className="w-[300px] sm:w-[400px] bg-white/90 dark:bg-[#1C2443] backdrop-blur"
              >
                <div className="flex flex-col justify-start space-y-4 mt-4">
                  <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse mb-2">
                    <div className="relative w-36 h-36 rounded-lg overflow-hidden">
                      <Image
                        src={
                          currentTheme === "dark"
                            ? "/ReqonicLogoWhite-BlueBackground.svg"
                            : "/image.svg"
                        }
                        alt="Reqonic Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4 px-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors",
                          pathname === item.href
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  <div className="flex justify-between items-center px-2 pt-4 border-t border-border">
                    <Button
                      variant="ghost"
                      onClick={toggleLanguage}
                      className="justify-start space-x-2 rtl:space-x-reverse cursor-pointer"
                    >
                      <Globe className="h-4 w-4" />
                      <span>{language === "en" ? "العربية" : "English"}</span>
                    </Button>
                    {/* <Button asChild className="">
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        {language === "en" ? "Get Started" : "ابدأ الآن"}
                      </Link>
                    </Button> */}
                    <div>
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
