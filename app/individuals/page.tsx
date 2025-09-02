import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Gamepad2, Cloud, Database, Headphones, ArrowRight, Star } from "lucide-react"

export default function IndividualsPage() {
  const services = [
    {
      icon: Gamepad2,
      title: "Gaming Publisher",
      description: "Professional game publishing services, distribution, and marketing support for indie developers.",
      features: ["Steam & Console Publishing", "Marketing Strategy", "Revenue Optimization", "Community Management"],
      price: "Starting at $299/month",
      popular: false,
    },
    {
      icon: Cloud,
      title: "Personal Cloud Storage",
      description: "Secure, scalable cloud storage solutions with advanced encryption and global accessibility.",
      features: ["Up to 10TB Storage", "End-to-End Encryption", "Multi-Device Sync", "24/7 Access"],
      price: "Starting at $19/month",
      popular: true,
    },
    {
      icon: Database,
      title: "Online Database Tools",
      description: "User-friendly database management tools for personal projects and small applications.",
      features: ["Visual Database Designer", "API Generation", "Real-time Collaboration", "Automated Backups"],
      price: "Starting at $49/month",
      popular: false,
    },
    {
      icon: Headphones,
      title: "Personal IT Support",
      description: "Dedicated technical support for all your personal technology needs and troubleshooting.",
      features: ["24/7 Remote Support", "Device Setup & Maintenance", "Software Installation", "Security Audits"],
      price: "Starting at $79/month",
      popular: false,
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for individuals getting started with technology solutions",
      features: [
        "Basic cloud storage (100GB)",
        "Email support",
        "Standard security features",
        "Mobile app access",
        "Basic database tools",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      description: "Ideal for power users and content creators",
      features: [
        "Premium cloud storage (1TB)",
        "Priority support",
        "Advanced security & encryption",
        "All database tools",
        "Gaming publisher consultation",
        "Custom integrations",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      description: "Complete solution for demanding individual users",
      features: [
        "Unlimited cloud storage",
        "24/7 dedicated support",
        "Enterprise-grade security",
        "Full gaming publisher services",
        "Custom development",
        "Personal IT consultant",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Technology Solutions for <span className="text-primary">Individuals</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Empower your personal projects and digital lifestyle with our comprehensive suite of individual-focused
              technology services.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="text-lg px-8">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Individual Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored technology solutions designed specifically for individual users and personal projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative ${service.popular ? "ring-2 ring-primary" : ""}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">Most Popular</Badge>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-primary font-semibold">{service.price}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={service.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your needs. All plans include our core features with no hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? "ring-2 ring-primary scale-105" : ""}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">
                      {plan.price}
                      <span className="text-lg text-muted-foreground font-normal">/month</span>
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Ready to Transform Your Digital Experience?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
              Join hundreds of satisfied individual clients who trust Reqonic for their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
