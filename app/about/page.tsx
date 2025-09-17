"use client";

import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Target,
  Eye,
  Heart,
  Users,
  Globe,
  ArrowRight,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { ComponentType } from "react";
import { motion } from "framer-motion";
type Language = "en" | "ar";

type ContentType = {
  heroTitle: string;
  heroSubtitle: string;
  stats: { number: string; label: string }[];
  visionTitle: string;
  visionDesc: string;
  missionTitle: string;
  missionDesc: string;
  valuesTitle: string;
  valuesSubtitle: string;
  values: {
    icon: ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }[];
  teamTitle: string;
  teamSubtitle: string;
  team: {
    name: string;
    role: string;
    bio: string;
    image: string;
    linkedin: string;
    twitter: string;
    email: string;
  }[];
  ctaTitle: string;
  ctaSubtitle: string;
  getStarted: string;
  contact: string;
};

// content
const content: Record<Language, ContentType> = {
  en: {
    heroTitle: "Pioneering the Future of Technology Solutions",
    heroSubtitle:
      "Since our founding, we've been dedicated to transforming businesses through innovative technology solutions, serving clients across the globe with excellence and integrity.",
    stats: [
      { number: "500+", label: "Clients Served" },
      { number: "1000+", label: "Projects Completed" },
      { number: "50+", label: "Countries Reached" },
      { number: "99.9%", label: "Uptime Guarantee" },
    ],
    visionTitle: "Our Vision",
    visionDesc:
      "To be the leading global provider of innovative technology solutions that empower businesses to thrive in the digital age. We envision a world where technology seamlessly integrates with business operations to create unprecedented value and growth opportunities.",
    missionTitle: "Our Mission",
    missionDesc:
      "To deliver exceptional technology solutions that drive business success through innovation, expertise, and unwavering commitment to client satisfaction. We strive to build long-term partnerships that transform challenges into opportunities.",
    valuesTitle: "Our Core Values",
    valuesSubtitle:
      "The principles that guide everything we do and shape our company culture.",
    values: [
      {
        icon: Target,
        title: "Innovation",
        description:
          "We constantly push the boundaries of technology to deliver cutting-edge solutions.",
      },
      {
        icon: Heart,
        title: "Excellence",
        description:
          "We are committed to delivering the highest quality in everything we do.",
      },
      {
        icon: Users,
        title: "Collaboration",
        description:
          "We believe in working closely with our clients to achieve shared success.",
      },
      {
        icon: Globe,
        title: "Global Impact",
        description:
          "Our solutions are designed to make a positive impact on businesses worldwide.",
      },
    ],
    teamTitle: "Meet Our Leadership Team",
    teamSubtitle:
      "Experienced professionals dedicated to delivering exceptional technology solutions.",
    team: [
      {
        name: "Ahmed Al-Rashid",
        role: "Chief Executive Officer",
        bio: "15+ years of experience in enterprise technology solutions and business strategy.",
        image: "/team-ahmed.png",
        linkedin: "#",
        twitter: "#",
        email: "ahmed@reqonic.com",
      },
      {
        name: "Sarah Johnson",
        role: "Chief Technology Officer",
        bio: "Expert in cloud architecture and database systems with a PhD in Computer Science.",
        image: "/team-sarah.png",
        linkedin: "#",
        twitter: "#",
        email: "sarah@reqonic.com",
      },
      {
        name: "Mohammed Hassan",
        role: "Head of Engineering",
        bio: "Specialized in embedded systems and IoT solutions with 12+ years of experience.",
        image: "/team-mohammed.png",
        linkedin: "#",
        twitter: "#",
        email: "mohammed@reqonic.com",
      },
      {
        name: "Emily Chen",
        role: "Head of Client Success",
        bio: "Dedicated to ensuring client satisfaction and successful project delivery.",
        image: "/team-emily.png",
        linkedin: "#",
        twitter: "#",
        email: "emily@reqonic.com",
      },
    ],
    ctaTitle: "Ready to Work with Us?",
    ctaSubtitle:
      "Join hundreds of satisfied clients who trust Reqonic for their technology needs.",
    getStarted: "Get Started Today",
    contact: "Contact Our Team",
  },
  ar: {
    heroTitle: "زيادة مستقبل الحلول التقنية",
    heroSubtitle:
      "منذ تأسيسنا، كرسنا جهودنا لتحويل الأعمال من خلال حلول تقنية مبتكرة، نخدم العملاء حول العالم بالتميز والنزاهة.",
    stats: [
      { number: "500+", label: "عملاء مخدومون" },
      { number: "1000+", label: "مشروع مكتمل" },
      { number: "50+", label: "دول وصلنا إليها" },
      { number: "99.9%", label: "ضمان وقت التشغيل" },
    ],
    visionTitle: "رؤيتنا",
    visionDesc:
      "أن نكون المزود العالمي الرائد للحلول التقنية المبتكرة التي تمكّن الشركات من الازدهار في العصر الرقمي. نتصور عالماً تندمج فيه التكنولوجيا بسلاسة مع العمليات التجارية لخلق قيمة وفرص نمو غير مسبوقة.",
    missionTitle: "مهمتنا",
    missionDesc:
      "تقديم حلول تقنية استثنائية تدفع نجاح الأعمال من خلال الابتكار والخبرة والالتزام التام برضا العملاء. نسعى لبناء شراكات طويلة الأمد تحول التحديات إلى فرص.",
    valuesTitle: "قيمنا الأساسية",
    valuesSubtitle: "المبادئ التي توجه كل ما نقوم به وتشكل ثقافة شركتنا.",
    values: [
      {
        icon: Target,
        title: "الابتكار",
        description: "نواصل دفع حدود التكنولوجيا لتقديم حلول متطورة.",
      },
      {
        icon: Heart,
        title: "التميز",
        description: "ملتزمون بتقديم أعلى جودة في كل ما نقوم به.",
      },
      {
        icon: Users,
        title: "التعاون",
        description: "نؤمن بالعمل عن كثب مع عملائنا لتحقيق نجاح مشترك.",
      },
      {
        icon: Globe,
        title: "الأثر العالمي",
        description:
          "تم تصميم حلولنا لإحداث تأثير إيجابي على الأعمال في جميع أنحاء العالم.",
      },
    ],
    teamTitle: "تعرف على فريق القيادة لدينا",
    teamSubtitle: "محترفون ذوو خبرة ملتزمون بتقديم حلول تقنية استثنائية.",
    team: [
      {
        name: "أحمد الراشد",
        role: "الرئيس التنفيذي",
        bio: "أكثر من 15 عامًا من الخبرة في حلول التكنولوجيا المؤسسية واستراتيجيات الأعمال.",
        image: "/team-ahmed.png",
        linkedin: "#",
        twitter: "#",
        email: "ahmed@reqonic.com",
      },
      {
        name: "سارة جونسون",
        role: "الرئيسة التقنية",
        bio: "خبيرة في هندسة السحابة وأنظمة قواعد البيانات وحاصلة على دكتوراه في علوم الحاسوب.",
        image: "/team-sarah.png",
        linkedin: "#",
        twitter: "#",
        email: "sarah@reqonic.com",
      },
      {
        name: "محمد حسن",
        role: "رئيس قسم الهندسة",
        bio: "متخصص في الأنظمة المدمجة وحلول إنترنت الأشياء مع خبرة تزيد عن 12 عامًا.",
        image: "/team-mohammed.png",
        linkedin: "#",
        twitter: "#",
        email: "mohammed@reqonic.com",
      },
      {
        name: "إميلي تشين",
        role: "رئيسة نجاح العملاء",
        bio: "مكرسة لضمان رضا العملاء وتسليم المشاريع بنجاح.",
        image: "/team-emily.png",
        linkedin: "#",
        twitter: "#",
        email: "emily@reqonic.com",
      },
    ],
    ctaTitle: "هل أنت مستعد للعمل معنا؟",
    ctaSubtitle:
      "انضم إلى مئات العملاء الراضين الذين يثقون بـ Reqonic لتلبية احتياجاتهم التقنية.",
    getStarted: "ابدأ اليوم",
    contact: "تواصل مع فريقنا",
  },
};

// Component

export default function AboutPage() {
  const { language } = useLanguage();
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <main className="min-h-screen" dir={language === "ar" ? "rtl" : "ltr"}>
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20 bg-fixed text-center min-h-[400px]"
        style={{ backgroundImage: "url('/project-banking.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-6 max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight text-balance">
              {content[language].heroTitle}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed text-pretty">
              {content[language].heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center space-x-2">
                  <Eye className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">
                    {content[language].visionTitle}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {content[language].visionDesc}
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">
                    {content[language].missionTitle}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {content[language].missionDesc}
                </p>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <img
                src="/modern-tech-office.png"
                alt="Reqonic team working"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              {content[language].valuesTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {content[language].valuesSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content[language].values.map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeScale}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-[#1C2443] to-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            {content[language].ctaTitle}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-gray-200">
            {content[language].ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 text-white font-semibold bg-gradient-to-r from-[#1C2443] to-secondary hover:opacity-90 cursor-pointer"
            >
              <Link href="/contact">{content[language].contact}</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
