"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Send } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Office 201-14, Al Nisf building, Airport road, Dubai, UAE",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "0523299663",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "info@reqonic.com",
    },
  ]

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Build formatted email body + subject
  const buildMailTo = () => {
    let body = `New Contact Form Submission:\n\n`

    if (form.firstName || form.lastName) {
      body += `Name: ${form.firstName} ${form.lastName}\n`
    }
    if (form.email) {
      body += `Email: ${form.email}\n`
    }
    if (form.phone) {
      body += `Phone: ${form.phone}\n`
    }
    if (form.subject) {
      body += `Subject: ${form.subject}\n`
    }
    if (form.message) {
      body += `\nMessage:\n${form.message}\n`
    }

    // subject line that includes user subject if exists
    const subject = form.subject
      ? `New Contact Form Submission - ${form.subject}`
      : "New Contact Form Submission"

    return `mailto:dev.mohamed.moorsy@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-primary/5 py-24 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-foreground">
            Let’s Work <span className="text-primary">Together</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you have a question or want to start a project, our team is here for you.
          </p>
        </div>
      </section>

      {/* Split Layout */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-muted/40 rounded-xl p-10 flex flex-col justify-center space-y-8">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground">
              Reach us through any of the following channels or use the form to send a direct message.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="firstName"
                  placeholder="First Name *"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="lastName"
                  placeholder="Last Name *"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <Input
                name="email"
                type="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
              <Input
                name="subject"
                placeholder="Subject *"
                value={form.subject}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Your message..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
              <Button asChild className="w-full h-12 text-lg font-medium">
                <a href={buildMailTo()}>
                  Send Message <Send className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Our Location</h2>
          <p className="text-muted-foreground">
            Find our headquarters in Dubai’s Innovation District
          </p>
          <div className="rounded-xl overflow-hidden shadow-md h-[450px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.7606763730333!2d55.34809631501061!3d25.252513583871314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d7e6dbb67e7%3A0xb2b81a3fdb58d890!2sDubai%20Airport!5e0!3m2!1sen!2sae!4v1693322389355!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
