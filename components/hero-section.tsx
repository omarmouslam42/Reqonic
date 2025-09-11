import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Zap, Users, Database, Cloud, Cpu } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-grid-pattern opacity-5"></div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Advanced <span className="text-primary">Technology</span> Solutions for the Digital Age
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Empowering individuals and businesses with cutting-edge IT infrastructure, cloud services, and
                innovative technology solutions tailored to your needs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8"  asChild>
                <Link href="/services" >
                  Explore Services  
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">500+ Clients</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 ">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardContent className="p-6 space-y-3">
                  <Database className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold text-card-foreground">Database Systems</h3>
                  <p className="text-sm text-muted-foreground">Scalable database architecture and management</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 mt-8">
                <CardContent className="p-6 space-y-3">
                  <Cloud className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold text-card-foreground">Cloud Services</h3>
                  <p className="text-sm text-muted-foreground">Modern cloud infrastructure and migration</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 -mt-1">
                <CardContent className="p-6 space-y-3">
                  <Cpu className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold text-card-foreground">IT Infrastructure</h3>
                  <p className="text-sm text-muted-foreground">Complete IT setup and maintenance</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 mt-4">
                <CardContent className="p-6 space-y-3">
                  <Shield className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold text-card-foreground">Security Solutions</h3>
                  <p className="text-sm text-muted-foreground">Advanced cybersecurity and protection</p>
                </CardContent>
              </Card>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
