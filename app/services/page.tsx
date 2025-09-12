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

export default function ServicesPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("individual");

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
      title: language === "en" ? "Gaming Publisher" : "ناشر الألعاب",
      description:
        language === "en"
          ? "Professional game publishing and distribution services for indie developers"
          : "خدمات نشر وتوزيع الألعاب المهنية للمطورين المستقلين",
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
      title:
        language === "en" ? "Personal Cloud Storage" : "التخزين السحابي الشخصي",
      description:
        language === "en"
          ? "Secure and scalable cloud storage solutions for your personal files and data"
          : "حلول تخزين سحابي آمنة وقابلة للتوسع لملفاتك وبياناتك الشخصية",
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
      title:
        language === "en"
          ? "Online Database Tools"
          : "أدوات قواعد البيانات الإلكترونية",
      description:
        language === "en"
          ? "Easy-to-use database management tools for personal and small business use"
          : "أدوات إدارة قواعد البيانات سهلة الاستخدام للاستخدام الشخصي والتجاري الصغير",
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
      title: language === "en" ? "Personal IT Support" : "الدعم التقني الشخصي",
      description:
        language === "en"
          ? "24/7 technical support for all your personal devices and software"
          : "دعم تقني على مدار الساعة لجميع أجهزتك وبرامجك الشخصية",
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

  return (
    <div
      className="min-h-screen bg-background"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Enhanced Header Section */}
      <Navigation />
      <section className="relative py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

        {/* Language Toggle */}
        <div className="container mx-auto px-4 relative">
          {/* Hero Content */}
          <div className="text-center max-w-5xl mx-auto relative">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {content[language].title}
              </h1>
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <Globe className="h-6 w-6 text-secondary" />
              </div>
            </div>

            <p className="text-2xl md:text-3xl text-muted-foreground mb-6 font-medium text-balance">
              {content[language].subtitle}
            </p>

            <p className="text-lg text-muted-foreground/80 mb-12 max-w-4xl mx-auto text-pretty leading-relaxed">
              {content[language].description}
            </p>

            <div className="flex justify-center mb-8">
              <div className="bg-background/60 backdrop-blur-sm p-2 space-x-2 rounded-xl border border-primary/10 shadow-lg">
                <Button
                  variant={activeTab === "individual" ? "default" : "ghost"}
                  onClick={() => setActiveTab("individual")}
                  className="px-8 py-3 text-base font-medium transition-all duration-300 cursor-pointer"
                  size="lg"
                >
                  <Users className="mr-2 h-5 w-5" />
                  {content[language].individualTab}
                </Button>
                <Button
                  variant={activeTab === "corporate" ? "default" : "ghost"}
                  onClick={() => setActiveTab("corporate")}
                  className="px-8 py-3 text-base font-medium transition-all duration-300 cursor-pointer"
                  size="lg"
                >
                  <Building2 className="mr-2 h-5 w-5" />
                  {content[language].corporateTab}
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">
                  {language === "en" ? "Projects Completed" : "مشروع مكتمل"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">
                  {language === "en" ? "Support Available" : "دعم متاح"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  99.9%
                </div>
                <div className="text-sm text-muted-foreground">
                  {language === "en" ? "Uptime Guarantee" : "ضمان وقت التشغيل"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">
                  {language === "en" ? "Years Experience" : "سنة خبرة"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {activeTab === "individual" ? (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {content[language].individualTitle}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {content[language].individualSubtitle}
                </p>
              </div>

              <div className="mb-16">
                {/* <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full max-w-6xl mx-auto"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {individualServices.map((service, index) => (
                      <CarouselItem
                        key={index}
                        className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                      >
                        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                          <CardHeader>
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                              <service.icon className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-xl">
                              {service.title}
                            </CardTitle>
                            <CardDescription>
                              {service.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center text-sm text-muted-foreground"
                                >
                                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <Button
                              className="w-full mt-6 bg-transparent"
                              variant="outline"
                            >
                              {content[language].learnMore}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex" />
                  <CarouselNext className="hidden md:flex" />
                </Carousel> */}
                <Carousel
  opts={{
    align: "center",
    loop: true,
  }}
  className="w-full max-w-6xl mx-auto "
>
  <CarouselContent
   className="-ml-2 md:-ml-4 ">
    {individualServices.map((service, index) => (
      <CarouselItem
        key={index}
        // نخلي الكارت ياخد عرض أكبر (زي عرض كارتين)
        className="pl-2 md:pl-6 basis-full sm:basis-full lg:basis-full "
      >
        <Card className="group hover:shadow-xl  transition-all duration-500 hover:-translate-y-2 h-full">
          <CardHeader>
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <service.icon className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">{service.title}</CardTitle>
            <CardDescription className="text-base">
              {service.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-sm text-muted-foreground"
                >
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 animate-pulse" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              className="w-full mt-6 bg-transparent hover:bg-primary hover:text-white transition-all duration-300"
              variant="outline"
            >
              {content[language].learnMore}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious className="hidden md:flex" />
  <CarouselNext className="hidden md:flex" />
</Carousel>

              </div>
            </div>
          ) : (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {content[language].corporateTitle}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {content[language].corporateSubtitle}
                </p>
              </div>

              <div className="mb-16">
                <Carousel
                  opts={{
                    
                    align: "start",
                    loop: true,
                  }}
                  className="w-full max-w-6xl mx-auto"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {corporateServices.map((service, index) => (
                      <CarouselItem
                        key={index}
                        className="pl-2 md:pl-4 md:basis-full lg:basis-full"
                      >
                        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                          <CardHeader>
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                              <service.icon className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-xl">
                              {service.title}
                            </CardTitle>
                            <CardDescription>
                              {service.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center text-sm text-muted-foreground"
                                >
                                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <Button
                              className="w-full mt-6 bg-transparent"
                              variant="outline"
                            >
                              {content[language].learnMore}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex" />
                  <CarouselNext className="hidden md:flex" />
                </Carousel>
              </div>
            </div>
          )}

          {/* Benefits Section */}
          <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {content[language].benefits}
                </h2>
              </div>

              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-5xl mx-auto"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {benefits.map((benefit, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4"
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
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          </section>

          {/* Contact Section */}
          {/* <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto"> */}
                {/* Section Header */}
                {/* <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {content[language].contactTitle}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {content[language].contactSubtitle}
                  </p>
                </div> */}

                {/* Contact Card */}
                {/* <Card className="max-w-2xl mx-auto shadow-lg border rounded-2xl">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            {content[language].name}
                          </label>
                          <Input
                            placeholder={content[language].name}
                            className="h-12 text-base"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            {content[language].email}
                          </label>
                          <Input
                            type="email"
                            placeholder={content[language].email}
                            className="h-12 text-base"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {content[language].message}
                        </label>
                        <Textarea
                          placeholder={content[language].message}
                          rows={5}
                          className="text-base"
                        />
                      </div>

                      <Button
                        className="w-full h-12 text-base font-medium flex items-center justify-center"
                        size="lg"
                      >
                        {content[language].send}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card> */}
              {/* </div>
            </div>
          </section> */}
        </div>

        <Footer/>
      </section>
    </div>
  );
}
