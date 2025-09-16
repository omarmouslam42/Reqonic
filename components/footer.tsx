"use client"

import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

export const Footer = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      description:
        "Professional technology and IT solutions for individuals and businesses worldwide.",
      company: "Company",
      companyLinks: [  
        {title:"About Us",link:"about"}
        ,{title:"Services",link:"services"}
        ,{title:"Contact US",link:"contact"}
        
        
        
            ],
                  services: "Services",
      serviceLinks: ["Web Development", "App Development", "Cloud Solutions"],
      support: "Support",
      supportLinks: ["Help Center", "FAQs", "Contact Support"],
      contact: "Contact",
      contactInfo: {
        email: "info@reqonic.com",
        phone: "0523299663",
        address: "Dubai, UAE",
      },
      bottom: {
        rights: "All rights reserved.",
        terms: "Terms & Conditions",
        privacy: "Privacy Policy",
      },
    },
    ar: {
      description:
        "حلول تقنية ومعلوماتية احترافية للأفراد والشركات حول العالم.",
      company: "الشركة",
      companyLinks:[
        {title:"معلومات عنا" ,link :"about"},
        {title:"الخدمات", link :"services"},
        {title:"تواصل معنا",link:"contact"}
      ],
      services: "الخدمات",
      serviceLinks: ["تطوير الويب", "تطوير التطبيقات", "الحلول السحابية"],
      support: "الدعم",
      supportLinks: ["مركز المساعدة", "الأسئلة الشائعة", "دعم العملاء"],
      contact: "تواصل",
      contactInfo: {
        email: "info@reqonic.com",
        phone: "523299663",
        address: "دبي، الإمارات",
      },
      bottom: {
        rights: "جميع الحقوق محفوظة.",
        terms: "الشروط والأحكام",
        privacy: "سياسة الخصوصية",
      },
    },
  } as const

  return (
    <footer
      className="bg-muted/20 border-t border-muted mt-20"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid gap-12 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2 space-y-4 text-center lg:text-left">
          <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">R</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Reqonic</span>
          </Link>
         <p className="text-muted-foreground max-w-md mx-auto lg:mx-0 text-left rtl:text-right">
  {content[language].description}
</p>
          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4 mt-4">
            <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition">
              <Facebook className="w-5 h-5 text-primary" />
            </a>
            <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition">
              <Twitter className="w-5 h-5 text-primary" />
            </a>
            <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition">
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a href="mailto:info@reqonic.com" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition">
              <Mail className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:col-span-3">
          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground">{content[language].company}</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {content[language].companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.link} className="text-muted-foreground hover:text-primary transition">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground">{content[language].services}</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {content[language].serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground">{content[language].support}</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {content[language].supportLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground">{content[language].contact}</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="text-muted-foreground">{content[language].contactInfo.email}</li>
              <li className="text-muted-foreground">{content[language].contactInfo.phone}</li>
              <li className="text-muted-foreground">{content[language].contactInfo.address}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-muted py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground gap-4">
          <p>&copy; 2025 Reqonic. {content[language].bottom.rights}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition">
              {content[language].bottom.terms}
            </a>
            <span>&middot;</span>
            <a href="#" className="hover:text-primary transition">
              {content[language].bottom.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
