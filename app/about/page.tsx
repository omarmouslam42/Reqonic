import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Users, Award, Globe, ArrowRight, Linkedin, Twitter, Mail } from "lucide-react"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions.",
    },
    {
      icon: Heart,
      title: "Excellence",
      description: "We are committed to delivering the highest quality in everything we do.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in working closely with our clients to achieve shared success.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our solutions are designed to make a positive impact on businesses worldwide.",
    },
  ]

  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "1000+", label: "Projects Completed" },
    { number: "50+", label: "Countries Reached" },
    { number: "99.9%", label: "Uptime Guarantee" },
  ]

  const team = [
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
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            {/* <Badge className="bg-primary/10 text-primary border-primary/20">About Reqonic</Badge> */}
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Pioneering the Future of <span className="text-primary">Technology Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Since our founding, we've been dedicated to transforming businesses through innovative technology
              solutions, serving clients across the globe with excellence and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Eye className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading global provider of innovative technology solutions that empower businesses to thrive
                  in the digital age. We envision a world where technology seamlessly integrates with business
                  operations to create unprecedented value and growth opportunities.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To deliver exceptional technology solutions that drive business success through innovation, expertise,
                  and unwavering commitment to client satisfaction. We strive to build long-term partnerships that
                  transform challenges into opportunities.
                </p>
              </div>
            </div>

            <div className="relative">
              <img src="/modern-tech-office.png" alt="Reqonic team working" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl">
                <Award className="h-8 w-8 mb-2" />
                <div className="font-bold">ISO 27001</div>
                <div className="text-sm opacity-90">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
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
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Meet Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <img
                    src={member.image || "/placeholder.svg?height=200&width=200&query=professional headshot"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="ghost" className="p-2">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
            Join hundreds of satisfied clients who trust Reqonic for their technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

       <Footer/>
    </main>
  )
}
