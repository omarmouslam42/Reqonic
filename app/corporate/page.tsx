import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Database,
  Server,
  Cloud,
  Cpu,
  Code,
  Shield,
  TrendingUp,
  DollarSign,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react"

export default function CorporatePage() {
  const services = [
    {
      icon: Database,
      title: "Database Systems Design",
      description:
        "Enterprise-grade database architecture, optimization, and management solutions for large-scale operations.",
      features: [
        "Custom Database Architecture",
        "Performance Optimization",
        "Data Migration Services",
        "24/7 Monitoring",
      ],
      benefits: ["99.9% Uptime", "Scalable to Millions of Records", "Advanced Security"],
    },
    {
      icon: Server,
      title: "IT Infrastructure",
      description: "Complete IT infrastructure setup, management, and modernization for businesses of all sizes.",
      features: ["Network Design & Setup", "Server Management", "Security Implementation", "Disaster Recovery"],
      benefits: ["Reduced Downtime", "Enhanced Security", "Cost Optimization"],
    },
    {
      icon: Cloud,
      title: "Cloud Services & Datacenter",
      description: "Comprehensive cloud migration, management, and datacenter solutions with global reach.",
      features: ["Cloud Migration", "Multi-Cloud Management", "Datacenter Services", "Global CDN"],
      benefits: ["Global Scalability", "Cost Reduction", "High Availability"],
    },
    {
      icon: Cpu,
      title: "Electronic Chips Programming",
      description:
        "Specialized embedded systems programming and electronic chip development for IoT and hardware solutions.",
      features: ["Firmware Development", "IoT Solutions", "Hardware Integration", "Custom Chip Programming"],
      benefits: ["Optimized Performance", "Custom Solutions", "Industry Expertise"],
    },
    {
      icon: Code,
      title: "Computer Systems Software Design",
      description: "Custom software development and system design for enterprise applications and workflows.",
      features: ["Custom Software Development", "System Integration", "API Development", "Legacy Modernization"],
      benefits: ["Tailored Solutions", "Seamless Integration", "Future-Proof Design"],
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Advanced cybersecurity services to protect your business from modern threats and vulnerabilities.",
      features: ["Security Audits", "Threat Detection", "Compliance Management", "Employee Training"],
      benefits: ["Enhanced Protection", "Regulatory Compliance", "Risk Mitigation"],
    },
  ]

  const businessBenefits = [
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Solutions that grow with your business, from startup to enterprise scale.",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade security measures to protect your valuable data and systems.",
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "Optimized solutions that reduce operational costs while improving performance.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated team of experts providing 24/7 support and consultation.",
    },
  ]

  const caseStudies = [
    {
      company: "TechCorp Industries",
      industry: "Manufacturing",
      challenge: "Legacy system modernization and cloud migration",
      solution: "Complete infrastructure overhaul with cloud-native architecture",
      results: ["40% cost reduction", "99.9% uptime improvement", "3x faster processing"],
      logo: "/techcorp-logo.png",
    },
    {
      company: "Global Finance Ltd",
      industry: "Financial Services",
      challenge: "Database performance optimization and security enhancement",
      solution: "Custom database design with advanced security protocols",
      results: ["60% query performance improvement", "Zero security incidents", "Regulatory compliance achieved"],
      logo: "/global-finance-logo.png",
    },
    {
      company: "Smart City Solutions",
      industry: "Government",
      challenge: "IoT infrastructure for smart city initiatives",
      solution: "End-to-end IoT platform with custom chip programming",
      results: ["500+ connected devices", "Real-time monitoring", "30% energy savings"],
      logo: "/smart-city-logo.png",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge className="bg-primary/10 text-primary border-primary/20">Enterprise Solutions</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Enterprise Technology Solutions for <span className="text-primary">Modern Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Transform your business with our comprehensive suite of enterprise-grade technology services. From
              database systems to cloud infrastructure, we deliver scalable solutions that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Why Choose Reqonic for Your Business</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver measurable business value through innovative technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessBenefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Enterprise Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions designed for enterprise-scale operations and requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Business Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <Badge key={benefitIndex} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses transform their operations and achieve remarkable results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <img
                      src={study.logo || "/placeholder.svg"}
                      alt={`${study.company} logo`}
                      className="h-12 object-contain"
                    />
                    <Badge variant="outline">{study.industry}</Badge>
                  </div>
                  <CardTitle className="text-xl">{study.company}</CardTitle>
                  <CardDescription className="text-base">
                    <strong>Challenge:</strong> {study.challenge}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Solution</h4>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2">
                          <Star className="h-3 w-3 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Ready to Transform Your Business?</h2>
              <p className="text-lg text-muted-foreground">
                Get in touch with our enterprise solutions team to discuss your specific requirements.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Business Inquiry Form</CardTitle>
                <CardDescription className="text-center">
                  Tell us about your project and we'll get back to you within 24 hours.
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
                    Business Email *
                  </label>
                  <Input id="email" type="email" placeholder="john@company.com" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company Name *
                  </label>
                  <Input id="company" placeholder="Your Company" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="services" className="text-sm font-medium text-foreground">
                    Services of Interest
                  </label>
                  <Input id="services" placeholder="Database Systems, Cloud Services, etc." />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                    rows={4}
                    required
                  />
                </div>
                <Button className="w-full" size="lg">
                  Submit Inquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
