"use client";
import { Navigation } from "@/components/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Gamepad2,
  Cloud,
  Database,
  Headphones,
  Building2,
  Server,
  Cpu,
  Code,
  CheckCircle,
  ArrowRight,
  Users,
  Shield,
  Zap,
  Award,
  Globe,
  Settings,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("individual");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const content = {
    en: {
      title: "Our Services",
      subtitle: "Comprehensive IT solutions for individuals and businesses",
      description:
        "From personal tech support to enterprise infrastructure, we deliver cutting-edge solutions tailored to your unique needs. Experience the power of technology with Reqonic's expert services.",
      individualTab: "Individual Clients",
      corporateTab: "Corporate Clients",
      individualTitle: "Personal IT Solutions",
      individualSubtitle:
        "Tailored technology services for your personal and professional needs",
      corporateTitle: "Enterprise Solutions",
      corporateSubtitle:
        "Scalable IT infrastructure and services for your business growth",
      getStarted: "Get Started",
      learnMore: "Learn More",
      contactUs: "Contact Us",
      popular: "Popular",
      benefits: "Why Choose Our Services?",
      contactTitle: "Ready to Get Started?",
      contactSubtitle:
        "Contact us today to discuss your IT needs and get a customized solution.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
    },
    ar: {
      title: "خدماتنا",
      subtitle: "حلول تقنية شاملة للأفراد والشركات",
      description:
        "من الدعم التقني الشخصي إلى البنية التحتية للمؤسسات، نقدم حلولاً متطورة مصممة خصيصاً لاحتياجاتك الفريدة. اختبر قوة التكنولوجيا مع خدمات ريكونيك المتخصصة.",
      individualTab: "العملاء الأفراد",
      corporateTab: "العملاء المؤسسيين",
      individualTitle: "حلول تقنية شخصية",
      individualSubtitle: "خدمات تقنية مخصصة لاحتياجاتك الشخصية والمهنية",
      corporateTitle: "حلول المؤسسات",
      corporateSubtitle: "بنية تحتية تقنية قابلة للتوسع وخدمات لنمو أعمالك",
      getStarted: "ابدأ الآن",
      learnMore: "اعرف المزيد",
      contactUs: "اتصل بنا",
      popular: "الأكثر شعبية",
      benefits: "لماذا تختار خدماتنا؟",
      contactTitle: "مستعد للبدء؟",
      contactSubtitle:
        "اتصل بنا اليوم لمناقشة احتياجاتك التقنية والحصول على حل مخصص.",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      send: "إرسال الرسالة",
    },
  };

  const individualServices = [
    {
      icon: Gamepad2,
      background: "/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg",
      title: language === "en" ? "Gaming Publisher" : "ناشر الألعاب",
      description:
        language === "en"
          ? `Professional game publishing and distribution services for indie developers.
We provide end-to-end support including marketing, localization, and platform optimization.
Our mission is to help your game reach a global audience and maximize its success.`
          : `خدمات نشر وتوزيع احترافية للألعاب مخصصة للمطورين المستقلين.
نقدم دعمًا متكاملًا يشمل التسويق، والتعريب، وتحسين الأداء على المنصات المختلفة.
مهمتنا هي مساعدتك في وصول لعبتك إلى جمهور عالمي وتحقيق أقصى نجاح ممكن.`,
      features:
        language === "en"
          ? [
              "Steam Integration",
              "Marketing Support",
              "Revenue Optimization",
              "Community Management",
            ]
          : ["تكامل Steam", "دعم التسويق", "تحسين الإيرادات", "إدارة المجتمع"],
    },
    {
      icon: Cloud,
      background: "/pexels-thisisengineering-3912477.jpg",
      title:
        language === "en" ? "Personal Cloud Storage" : "التخزين السحابي الشخصي",
      description:
        language === "en"
          ? "Experience secure and scalable cloud storage designed to keep your personal files and sensitive data safe, accessible anytime, and backed by reliable infrastructure you can trust."
          : "استمتع بخدمة تخزين سحابي آمنة ومرنة مصممة لحماية ملفاتك وبياناتك الشخصية، مع سهولة الوصول إليها في أي وقت، وضمان موثوقية عالية تحافظ على خصوصيتك وأمانك دائمًا.",
      features:
        language === "en"
          ? [
              "End-to-End Encryption",
              "Auto Sync",
              "File Sharing",
              "Mobile Access",
            ]
          : ["تشفير شامل", "مزامنة تلقائية", "مشاركة الملفات", "وصول محمول"],
    },
    {
      icon: Database,
      background: "/project-healthcare.png",
      title:
        language === "en"
          ? "Online Database Tools"
          : "أدوات قواعد البيانات الإلكترونية",
      description:
        language === "en"
          ? "Easy-to-use and intuitive database management tools designed specifically for personal use and small businesses, helping you organize, store, and access your data efficiently without the need for advanced technical skills."
          : "دوات إدارة قواعد بيانات سهلة الاستخدام وبسيطة، مصممة خصيصًا للاستخدام الشخصي ولأصحاب الأعمال الصغيرة، تساعدك على تنظيم بياناتك وتخزينها والوصول إليها بكفاءة وسرعة، دون الحاجة إلى خبرة تقنية متقدمة.",
      features:
        language === "en"
          ? [
              "Visual Query Builder",
              "Data Import/Export",
              "Backup & Recovery",
              "API Access",
            ]
          : [
              "منشئ الاستعلامات المرئي",
              "استيراد/تصدير البيانات",
              "النسخ الاحتياطي والاستعادة",
              "وصول API",
            ],
    },
    {
      icon: Headphones,
      background: "/pexels-olly-840996.jpg",
      title: language === "en" ? "Personal IT Support" : "الدعم التقني الشخصي",
      description:
        language === "en"
          ? "24/7 reliable technical support for all your personal devices and software, ensuring you get instant assistance, troubleshooting, and expert guidance whenever you need it, day or night."
          : "دعم فني موثوق يعمل على مدار الساعة طوال أيام الأسبوع لجميع أجهزتك الشخصية وبرامجك، ليضمن لك الحصول على المساعدة الفورية وحل المشكلات والإرشاد من خبراء في أي وقت تحتاج فيه، سواء بالليل أو النهار.",
      features:
        language === "en"
          ? [
              "Remote Assistance",
              "Device Setup",
              "Software Installation",
              "Troubleshooting",
            ]
          : [
              "المساعدة عن بُعد",
              "إعداد الأجهزة",
              "تثبيت البرامج",
              "حل المشاكل",
            ],
    },
  ];

  const corporateServices = [
    {
      icon: Database,
      background: "/taylor-vick-M5tzZtFCOfs-unsplash.jpg",
      title:
        language === "en"
          ? "Database Systems Design"
          : "تصميم أنظمة قواعد البيانات",
      description:
        language === "en"
          ? "Custom database architecture and optimization for enterprise applications"
          : "هندسة قواعد البيانات المخصصة والتحسين لتطبيقات المؤسسات",
      features:
        language === "en"
          ? [
              "Performance Optimization",
              "Scalability Planning",
              "Security Implementation",
              "Migration Services",
            ]
          : [
              "تحسين الأداء",
              "تخطيط قابلية التوسع",
              "تنفيذ الأمان",
              "خدمات الترحيل",
            ],
    },
    {
      icon: Building2,
      background: "/project-smart-city.png",
      title:
        language === "en"
          ? "IT Infrastructure"
          : "البنية التحتية لتقنية المعلومات",
      description:
        language === "en"
          ? "Complete IT infrastructure setup and management for modern businesses"
          : "إعداد وإدارة البنية التحتية الكاملة لتقنية المعلومات للشركات الحديثة",
      features:
        language === "en"
          ? [
              "Network Design",
              "Server Management",
              "Security Systems",
              "Monitoring & Maintenance",
            ]
          : [
              "تصميم الشبكة",
              "إدارة الخوادم",
              "أنظمة الأمان",
              "المراقبة والصيانة",
            ],
    },
    {
      icon: Server,
      background: "/project-banking.png",
      title:
        language === "en"
          ? "Cloud Services & Datacenter"
          : "الخدمات السحابية ومراكز البيانات",
      description:
        language === "en"
          ? "Enterprise cloud solutions and datacenter management services"
          : "حلول سحابية للمؤسسات وخدمات إدارة مراكز البيانات",
      features:
        language === "en"
          ? [
              "Cloud Migration",
              "Hybrid Solutions",
              "Disaster Recovery",
              "Cost Optimization",
            ]
          : [
              "الترحيل السحابي",
              "الحلول المختلطة",
              "استعادة الكوارث",
              "تحسين التكلفة",
            ],
    },
    {
      icon: Cpu,
      background: "/umberto-jXd2FSvcRr8-unsplash.jpg",
      title:
        language === "en"
          ? "Electronic Chips Programming"
          : "برمجة الرقائق الإلكترونية",
      description:
        language === "en"
          ? "Custom firmware development and embedded systems programming"
          : "تطوير البرامج الثابتة المخصصة وبرمجة الأنظمة المدمجة",
      features:
        language === "en"
          ? [
              "Firmware Development",
              "IoT Solutions",
              "Hardware Integration",
              "Testing & Validation",
            ]
          : [
              "تطوير البرامج الثابتة",
              "حلول إنترنت الأشياء",
              "تكامل الأجهزة",
              "الاختبار والتحقق",
            ],
    },
    {
      icon: Code,
      background: "/pexels-goumbik-574069.jpg",
      title:
        language === "en"
          ? "Computer Systems Software Design"
          : "تصميم برامج أنظمة الحاسوب",
      description:
        language === "en"
          ? "Enterprise software development and system integration solutions"
          : "تطوير برامج المؤسسات وحلول تكامل الأنظمة",
      features:
        language === "en"
          ? [
              "Custom Development",
              "System Integration",
              "API Development",
              "Legacy Modernization",
            ]
          : [
              "التطوير المخصص",
              "تكامل الأنظمة",
              "تطوير API",
              "تحديث الأنظمة القديمة",
            ],
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: language === "en" ? "Expert Team" : "فريق خبراء",
      description:
        language === "en"
          ? "Certified professionals with years of industry experience"
          : "محترفون معتمدون بسنوات من الخبرة في الصناعة",
    },
    {
      icon: Shield,
      title: language === "en" ? "Security First" : "الأمان أولاً",
      description:
        language === "en"
          ? "Enterprise-grade security measures to protect your data"
          : "تدابير أمنية على مستوى المؤسسات لحماية بياناتك",
    },
    {
      icon: Zap,
      title: language === "en" ? "Fast Implementation" : "تنفيذ سريع",
      description:
        language === "en"
          ? "Quick deployment and setup to get you running fast"
          : "نشر وإعداد سريع لتشغيلك بسرعة",
    },
    {
      icon: Award,
      title: language === "en" ? "Quality Assurance" : "ضمان الجودة",
      description:
        language === "en"
          ? "Rigorous testing and quality control processes"
          : "اختبار صارم وعمليات مراقبة الجودة",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const servicesList =
    activeTab === "individual" ? individualServices : corporateServices;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? servicesList.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === servicesList.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <div className="min-h-screen" dir={language === "ar" ? "rtl" : "ltr"}>
      <Navigation />

      {/* Hero Section */}
      <motion.section
        className="relative py-16 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Background Images */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/pexels-pavel-danilyuk-5496461.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/80 to-transparent" />

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center max-w-5xl mx-auto relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h1 className="text-5xl  md:text-7xl font-bold font-sans bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              {content[language].title}
            </h1>
            <p className="text-2xl md:text-3xl  mb-6 font-medium text-balance text-white">
              {content[language].subtitle}
            </p>
            <p className="text-lg text-white font-semibold mb-12 max-w-4xl mx-auto  leading-relaxed">
              {content[language].description}
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            className="flex justify-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="bg-background/60 backdrop-blur-sm p-2 space-x-2 rounded-xl border border-primary/10 shadow-lg">
              <Button
                variant={activeTab === "individual" ? "default" : "ghost"}
                onClick={() => setActiveTab("individual")}
                className="px-8 py-3 text-base font-medium transition-all duration-300 cursor-pointer"
                size="lg"
              >
                <Users className="mr-2 h-5 w-5" />{" "}
                {content[language].individualTab}
              </Button>
              <Button
                variant={activeTab === "corporate" ? "default" : "ghost"}
                onClick={() => setActiveTab("corporate")}
                className="px-8 py-3 text-base font-medium transition-all duration-300 cursor-pointer"
                size="lg"
              >
                <Building2 className="mr-2 h-5 w-5" />{" "}
                {content[language].corporateTab}
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {[
              {
                number: "50+",
                label: language === "en" ? "Projects Completed" : "مشروع مكتمل",
              },
              {
                number: "24/7",
                label: language === "en" ? "Support Available" : "دعم متاح",
              },
              {
                number: "99.9%",
                label:
                  language === "en" ? "Uptime Guarantee" : "ضمان وقت التشغيل",
              },
              {
                number: "5+",
                label: language === "en" ? "Years Experience" : "سنة خبرة",
              },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {activeTab === "individual"
                ? content[language].individualTitle
                : content[language].corporateTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {activeTab === "individual"
                ? content[language].individualSubtitle
                : content[language].corporateSubtitle}
            </p>
          </motion.div>

          {/* Carousel */}
          <Carousel
            dir="ltr"
            opts={{ align: "start", loop: true }}
            className="w-full max-w-6xl mx-auto relative"
          >
            <CarouselContent>
              {servicesList.map((service, index) => (
                <CarouselItem key={index} className="basis-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: index * 0.1 },
                    }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className={`grid grid-cols-1 md:grid-cols-2 ${
                        language === "en"
                          ? "md:[direction:rtl]"
                          : "md:[direction:ltr]"
                      } dark:bg-[#1C2443] gap-6 items-center p-0 overflow-hidden shadow-lg border`}
                    >
                      <div className="h-[500px] w-full overflow-hidden">
                        <Image
                          src={service.background}
                          alt={service.title}
                          width={500}
                          height={500}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        className={`flex flex-col justify-start gap-8 h-full p-8 ${
                          language === "ar" ? "text-right" : "text-left"
                        }`}
                      >
                        <CardHeader>
                          <CardTitle className="text-3xl font-bold">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-base text-muted-foreground">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className={`flex flex-col items-end`}>
                          <ul className="space-y-3 mt-5">
                            {service.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className={`flex items-center flex-row-reverse gap-2 text-sm text-foreground`}
                              >
                                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div
              dir="ltr"
              className="flex justify-center items-center gap-6 mt-6"
            >
              <div onClick={prevSlide}>
                <CarouselPrevious className="relative translate-y-0 cursor-pointer bg-primary text-white hover:bg-primary/90 dark:bg-[#1C2443] dark:text-primary dark:hover:bg-[#1C2443] w-10 h-10 rounded-full shadow-lg transition" />
              </div>
              <span className="text-lg font-semibold text-foreground">
                {currentIndex + 1} / {servicesList.length}
              </span>

              <div onClick={nextSlide}>
                <CarouselNext className="relative translate-y-0 cursor-pointer bg-primary text-white hover:bg-primary/90 dark:bg-[#1C2443] dark:text-primary dark:hover:bg-[#1C2443] w-10 h-10 rounded-full shadow-lg transition" />
              </div>
            </div>
          </Carousel>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-20 bg-muted/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {content[language].benefits}
            </h2>
          </motion.div>

          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {benefits.map((benefit, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: index * 0.1 },
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center h-full">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
