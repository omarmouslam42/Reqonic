"use client";
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { useLanguage } from "@/context/LanguageContext";



export default function HomePage() {
  const { language } = useLanguage();
  return (
    <main  dir={language === "ar" ? "rtl" : "ltr"} className="min-h-screen">
      <Navigation />
      <HeroSection />
    </main>
  )
}
