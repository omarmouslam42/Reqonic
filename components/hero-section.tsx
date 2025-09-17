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

const translations: Record<
  Language,
  {
    title: string;
    description: string;
    ctaServices: string;
    ctaContact: string;
    indicators: {
      security: string;
      support: string;
      clients: string;
    };
    cards: {
      database: { title: string; desc: string };
      cloud: { title: string; desc: string };
      infra: { title: string; desc: string };
      security: { title: string; desc: string };
    };
  }
> = {
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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language as Language];

  return (
    <section
      dir={language === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                {t.title.split(" ").map((word, i) =>
                  word.toLowerCase() === "technology" ||
                  word.includes("تكنولوجية") ? (
                    <span key={i} className="text-primary">
                      {word}{" "}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  )
                )}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                {t.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg px-8 bg-[#1C2443] hover:bg-[#1C2443] transition-all text-white"
                asChild
              >
                <Link href="/services">
                  {t.ctaServices} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white border-1 bg-transparent hover:bg-transparent hover:text-black transition-all dark:hover:text-white"
                asChild
              >
                <Link href="/contact">
                  {t.ctaContact} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {t.indicators.security}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {t.indicators.support}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {t.indicators.clients}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4 ">
              {[
                t.cards.database,
                t.cards.cloud,
                t.cards.infra,
                t.cards.security,
              ].map((card, idx) => (
                <Card
                  key={idx}
                  className="bg-card/50 backdrop-blur border-border/50"
                >
                  <CardContent className="p-6 space-y-3">
                    {idx === 0 && <Database className="h-8 w-8 text-primary" />}
                    {idx === 1 && <Cloud className="h-8 w-8 text-primary" />}
                    {idx === 2 && <Cpu className="h-8 w-8 text-primary" />}
                    {idx === 3 && <Shield className="h-8 w-8 text-primary" />}
                    <h3 className="font-semibold text-card-foreground">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{card.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
