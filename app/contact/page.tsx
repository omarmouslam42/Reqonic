"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/footer";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
export default function ContactPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      heroTitle: "Let’s Work Together",
      heroSubtitle:
        "Whether you have a question or want to start a project, our team is here for you.",
      contactTitle: "Get in Touch",
      contactSubtitle:
        "Reach us through any of the following channels or use the form to send a direct message.",
      contactInfo: [
        {
          icon: MapPin,
          label: "Visit Us",
          value: "Office 201-14, Al Nisf building, Airport road, Dubai, UAE",
          href: "https://maps.google.com/?q=Office 201-14, Al Nisf building, Airport road, Dubai, UAE",
        },
        {
          icon: Phone,
          label: "Call Us - WhatsApp",
          value: "0523299663",
          href: "https://wa.me/971523299663", // WhatsApp link with UAE code
        },
        {
          icon: Mail,
          label: "Email Us",
          value: "info@reqonic.com",
          href: "https://mail.google.com/mail/?view=cm&to=info@reqonic.com",
        },
      ],
      formTitle: "Send Us a Message",
      firstName: "First Name *",
      lastName: "Last Name *",
      email: "Email Address *",
      phone: "Phone Number",
      subject: "Subject *",
      message: "Your message...",
      send: "Send Message",
      mapTitle: "Our Location",
      mapSubtitle: "Find our headquarters in Dubai’s Innovation District",
    },
    ar: {
      heroTitle: "لنبدأ العمل معًا",
      heroSubtitle:
        "سواء كان لديك سؤال أو ترغب في بدء مشروع، فإن فريقنا هنا من أجلك.",
      contactTitle: "تواصل معنا",
      contactSubtitle:
        "تواصل معنا عبر أي من القنوات التالية أو استخدم النموذج لإرسال رسالة مباشرة.",
      contactInfo: [
        {
          icon: MapPin,
          label: "زورنا",
          value:
            "مكتب 201-14، مبنى النصف، طريق المطار، دبي، الإمارات العربية المتحدة",
          href: "https://maps.google.com/?q=Office 201-14, Al Nisf building, Airport road, Dubai, UAE",
        },
        {
          icon: Phone,
          label: "اتصل بنا",
          value: "0523299663",
          href: "https://wa.me/971523299663", // نفس رابط واتساب
        },
        {
          icon: Mail,
          label: "راسلنا",
          value: "info@reqonic.com",
          href: "https://mail.google.com/mail/?view=cm&to=info@reqonic.com",
        },
      ],
      formTitle: "أرسل لنا رسالة",
      firstName: "الاسم الأول *",
      lastName: "اسم العائلة *",
      email: "البريد الإلكتروني *",
      phone: "رقم الهاتف",
      subject: "الموضوع *",
      message: "رسالتك...",
      send: "إرسال الرسالة",
      mapTitle: "موقعنا",
      mapSubtitle: "اعثر على مقرنا في منطقة الابتكار بدبي",
    },
  } as const;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Build formatted email body + subject
  const buildMailTo = () => {
    let body = `${content[language].formTitle}:\n\n`;

    if (form.firstName || form.lastName) {
      body += `Name: ${form.firstName} ${form.lastName}\n`;
    }
    if (form.email) {
      body += `Email: ${form.email}\n`;
    }
    if (form.phone) {
      body += `Phone: ${form.phone}\n`;
    }
    if (form.subject) {
      body += `Subject: ${form.subject}\n`;
    }
    if (form.message) {
      body += `\nMessage:\n${form.message}\n`;
    }

    const subject = form.subject
      ? `${content[language].formTitle} - ${form.subject}`
      : content[language].formTitle;

    return `mailto:dev.mohamed.moorsy@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <main
      className="min-h-screen flex flex-col bg-background"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat bg-fixed py-24 text-center min-h-[400px]"
        style={{ backgroundImage: "url('/pexels-fauxels-3183150.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          className="relative container mx-auto px-6 max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold font-serif leading-tight text-white">
            {content[language].heroTitle.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-primary">
              {content[language].heroTitle.split(" ").slice(-1).join(" ")}
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            {content[language].heroSubtitle}
          </p>
        </motion.div>
      </section>

      {/* Split Layout */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            className="bg-muted/40 rounded-xl p-10 flex flex-col justify-start gap-2 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold">
              {content[language].contactTitle}
            </h2>
            <p className="text-muted-foreground">
              {content[language].contactSubtitle}
            </p>

            <div className="space-y-6">
              {content[language].contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-muted-foreground group-hover:text-primary transition">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="shadow-lg border-0 dark:bg-[#1C2443]/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {content[language].formTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="firstName"
                    placeholder={content[language].firstName}
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="lastName"
                    placeholder={content[language].lastName}
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input
                  name="email"
                  type="email"
                  placeholder={content[language].email}
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="phone"
                  type="number"
                  placeholder={content[language].phone}
                  value={form.phone}
                  onChange={handleChange}
                />
                <Input
                  name="subject"
                  placeholder={content[language].subject}
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder={content[language].message}
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <Button
                  asChild
                  className="w-full h-12 text-lg font-medium bg-[#1C2443] text-white"
                >
                  <a href={buildMailTo()}>
                    {content[language].send} <Send className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <motion.section
        className="py-20 bg-muted/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            {content[language].mapTitle}
          </h2>
          <p className="text-muted-foreground">
            {content[language].mapSubtitle}
          </p>
          <div className="rounded-xl overflow-hidden shadow-md h-[450px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4612731399434!2d55.34247942510764!3d25.25506397935532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d1120a9000b%3A0xefddef45eb79a07!2sHI%20BLENDED%20IT%20Solutions!5e0!3m2!1sar!2seg!4v1758064992900!5m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
