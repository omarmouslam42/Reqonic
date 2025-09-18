"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  Database,
  Cloud,
  Cpu,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type Language = "en" | "ar";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function HeroSection() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Advanced Technology Solutions for the Digital Age",
      description:
        "Empowering individuals and businesses with cutting-edge IT infrastructure, cloud services, and innovative technology solutions tailored to your needs.",
      ctaServices: "Explore Services",
      ctaContact: "Contact Us",
      indicators: {
        security: "Enterprise Security",
        support: "24/7 Support",
        clients: "500+ Clients",
      },
      cards: {
        database: {
          title: "Database Systems",
          desc: "Scalable database architecture and management",
        },
        cloud: {
          title: "Cloud Services",
          desc: "Modern cloud infrastructure and migration",
        },
        infra: {
          title: "IT Infrastructure",
          desc: "Complete IT setup and maintenance",
        },
        security: {
          title: "Security Solutions",
          desc: "Advanced cybersecurity and protection",
        },
      },
    },
    ar: {
      title: "حلول تكنولوجية متقدمة لعصر رقمي",
      description:
        "نمكن الأفراد والشركات من خلال بنية تحتية تقنية متطورة، وخدمات سحابية، وحلول مبتكرة مصممة خصيصًا لتلبية احتياجاتك.",
      ctaServices: "استكشف الخدمات",
      ctaContact: "تواصل معنا",
      indicators: {
        security: "أمان المؤسسات",
        support: "دعم على مدار الساعة",
        clients: "500+ عميل",
      },
      cards: {
        database: {
          title: "أنظمة قواعد البيانات",
          desc: "بنية قواعد بيانات قابلة للتوسع وإدارة متقدمة",
        },
        cloud: {
          title: "الخدمات السحابية",
          desc: "بنية تحتية سحابية حديثة وحلول ترحيل",
        },
        infra: {
          title: "البنية التحتية لتقنية المعلومات",
          desc: "إعداد وصيانة شاملة لتقنية المعلومات",
        },
        security: {
          title: "حلول الأمن السيبراني",
          desc: "حماية متقدمة وأمن إلكتروني شامل",
        },
      },
    },
  };

  const t = translations[language as Language];

  return (
    <section
      dir={language === "ar" ? "rtl" : "ltr"}
      className="relative 
    min-h-[60vh]       
    md:min-h-[75vh]     
    lg:h-screen         
    py-8 md:py-16 lg:py-24   
    flex items-center justify-center 
    bg-cover bg-center bg-no-repeat
   "
      style={{
        backgroundImage: `url('abstract-techno-background-with-connecting-lines.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-primary/50 z-0"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center font-serif text-center lg:text-left">
          {/* Hero Content */}
          <motion.div
            className="space-y-8 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight ">
                {t.title.split(" ").map((word, i) =>
                  word.toLowerCase() === "technology" ||
                  word.includes("تكنولوجية") ? (
                    <span key={i} className="text-[#4E86FF]">
                      {word}{" "}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  )
                )}
              </h1>
              <p className="text-lg lg:text-xl text-gray-200 ">
                {t.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Button
                size="lg"
                className="text-lg px-8 bg-primary hover:bg-primary/90 shadow-lg"
                asChild
              >
                <Link href="/services">
                  {t.ctaServices} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-black dark:text-white hover:bg-white hover:text-black transition-all"
                asChild
              >
                <Link href="/contact">
                  {t.ctaContact} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#4E86FF]" />
                <span className="text-sm">{t.indicators.security}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-[#4E86FF]" />
                <span className="text-sm">{t.indicators.support}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-[#4E86FF]" />
                <span className="text-sm">{t.indicators.clients}</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual (cards) */}
          <motion.div
            className="relative grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              t.cards.database,
              t.cards.cloud,
              t.cards.infra,
              t.cards.security,
            ].map((card, idx) => (
              <Card
                key={idx}
                className={`bg-white/10 backdrop-blur border border-white/20 text-white transition-transform duration-500 
      ${idx % 2 === 0 ? "sm:-translate-y-4" : "sm:translate-y-4"}`}
              >
                <CardContent className="p-6 space-y-3">
                  {idx === 0 && (
                    <Database className="h-8 w-8 text-[#4E86FF] m-auto lg:mx-0" />
                  )}
                  {idx === 1 && (
                    <Cloud className="h-8 w-8 text-[#4E86FF] m-auto lg:mx-0" />
                  )}
                  {idx === 2 && (
                    <Cpu className="h-8 w-8 text-[#4E86FF] m-auto lg:mx-0" />
                  )}
                  {idx === 3 && (
                    <Shield className="h-8 w-8 text-[#4E86FF] m-auto lg:mx-0" />
                  )}
                  <h3 className="font-semibold">{card.title}</h3>
                  <p className="text-sm text-gray-200">{card.desc}</p>
                </CardContent>
              </Card>
            ))}

            {/* Floating Effects */}
            {/* <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
