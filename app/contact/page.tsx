import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Headphones, Users, ArrowRight } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["123 Technology Boulevard", "Innovation District", "Dubai, UAE 12345"],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+971 4 123 4567 (Main)", "+971 4 123 4568 (Support)", "+1 555 123 4569 (US)"],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@reqonic.com", "support@reqonic.com", "sales@reqonic.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
    },
  ]

  const supportOptions = [
    {
      icon: MessageSquare,
      title: "General Inquiries",
      description: "Questions about our services or company information",
      contact: "info@reqonic.com",
      responseTime: "Within 24 hours",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Get help with technical issues or troubleshooting",
      contact: "support@reqonic.com",
      responseTime: "Within 4 hours",
    },
    {
      icon: Users,
      title: "Sales & Partnerships",
      description: "Discuss new projects or partnership opportunities",
      contact: "sales@reqonic.com",
      responseTime: "Within 12 hours",
    },
  ]

  const offices = [
    {
      city: "Dubai",
      country: "UAE",
      address: "123 Technology Boulevard, Innovation District",
      phone: "+971 4 123 4567",
      email: "dubai@reqonic.com",
      isHeadquarters: true,
    },
    {
      city: "London",
      country: "UK",
      address: "456 Tech Street, Canary Wharf",
      phone: "+44 20 1234 5678",
      email: "london@reqonic.com",
      isHeadquarters: false,
    },
    {
      city: "New York",
      country: "USA",
      address: "789 Innovation Ave, Manhattan",
      phone: "+1 555 123 4567",
      email: "newyork@reqonic.com",
      isHeadquarters: false,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge className="bg-primary/10 text-primary border-primary/20">Get In Touch</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Let's Build Something <span className="text-primary">Amazing Together</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Ready to transform your business with cutting-edge technology? Our team of experts is here to help you
              achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>
                    Tell us about your project and we'll provide you with a detailed consultation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                        First Name *
                      </label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                        Last Name *
                      </label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company Name
                    </label>
                    <Input id="company" placeholder="Your Company" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject *
                    </label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, requirements, timeline, and any specific questions you have..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of the following channels. We're here to help!
                </p>

                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <info.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                            <div className="space-y-1">
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-sm text-muted-foreground">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">How Can We Help?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the best way to reach us based on your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit">
                    <option.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium text-foreground">{option.contact}</p>
                    <p className="text-sm text-muted-foreground">Response time: {option.responseTime}</p>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Contact Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Global Offices</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We have offices around the world to serve you better.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className={`relative ${office.isHeadquarters ? "ring-2 ring-primary" : ""}`}>
                {office.isHeadquarters && (
                  <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">Headquarters</Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">
                    {office.city}, {office.country}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{office.address}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{office.phone}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{office.email}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Find Us</h2>
            <p className="text-lg text-muted-foreground">Visit our headquarters in Dubai's Innovation District</p>
          </div>

          <Card className="overflow-hidden">
            <div className="h-96 bg-muted flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 text-primary mx-auto" />
                <p className="text-muted-foreground">Interactive map would be embedded here</p>
                <p className="text-sm text-muted-foreground">
                  123 Technology Boulevard, Innovation District, Dubai, UAE
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
