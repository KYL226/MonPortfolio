"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, Monitor, Zap, Star } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    { name: "React", level: 95, icon: <Code className="w-5 h-5" /> },
    { name: "TypeScript", level: 90, icon: <Code className="w-5 h-5" /> },
    { name: "Next.js", level: 88, icon: <Code className="w-5 h-5" /> },
    { name: "UI/UX Design", level: 85, icon: <Palette className="w-5 h-5" /> },
    { name: "Mobile Dev", level: 80, icon: <Smartphone className="w-5 h-5" /> },
    { name: "Web Design", level: 92, icon: <Monitor className="w-5 h-5" /> },
    { name: "Dev", level: 60, icon: <Smartphone className="w-5 h-5" /> },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plateforme e-commerce moderne avec paiements intégrés et gestion d'inventaire en temps réel.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/modern-ecommerce-dashboard-dark-theme.png",
      link: "#",
    },
    {
      title: "AI Dashboard",
      description: "Interface d'administration pour système d'IA avec visualisations de données avancées.",
      tech: ["Next.js", "TypeScript", "D3.js", "Python"],
      image: "/ai-analytics-dashboard-futuristic.png",
      link: "#",
    },
    {
      title: "Mobile Banking App",
      description: "Application bancaire mobile sécurisée avec authentification biométrique.",
      tech: ["React Native", "Firebase", "Biometrics", "Redux"],
      image: "/mobile-banking-app-interface-dark.png",
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "Plateforme e-commerce moderne avec paiements intégrés et gestion d'inventaire en temps réel.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/modern-ecommerce-dashboard-dark-theme.png",
      link: "#",
    },
    {
      title: "AI Dashboard",
      description: "Interface d'administration pour système d'IA avec visualisations de données avancées.",
      tech: ["Next.js", "TypeScript", "D3.js", "Python"],
      image: "/ai-analytics-dashboard-futuristic.png",
      link: "#",
    },
    {
      title: "Mobile Banking App",
      description: "Application bancaire mobile sécurisée avec authentification biométrique.",
      tech: ["React Native", "Firebase", "Biometrics", "Redux"],
      image: "/mobile-banking-app-interface-dark.png",
      link: "#",
    },
    
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glassmorphism">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold glow-effect text-secondary">{"<Dev/>"}</div>
            <div className="hidden md:flex space-x-8">
              {["Accueil", "À propos", "Projets", "Compétences", "Contact"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace("à propos", "about").replace("é", "e")}`}
                  className="hover:text-accent transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex items-center justify-center relative">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, var(--secondary) 0%, transparent 50%), radial-gradient(circle at 75% 75%, var(--accent) 0%, transparent 50%)",
          }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="slide-in-left">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
              Ives Laurent
              <span className="block text-secondary glow-effect">KABORE</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
              Développeur full-stack junior passionné par la création d'expériences numériques innovantes et futuristes.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="neon-border hover:glow-effect transition-all duration-300">
                Voir mes projets
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 bg-transparent"
              >
                Me contacter
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 float-effect">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h2 className="text-4xl font-bold mb-6 text-secondary">À propos de moi</h2>
              <p className="text-lg mb-6 text-pretty">
                Développeur web créatif et Passionné par les nouvelles technologies et l'innovation, je transforme les idées en réalités
                numériques.
              </p>
              <p className="text-lg mb-8 text-pretty">
                Mon approche combine design moderne, performance optimale et expérience utilisateur exceptionnelle pour
                créer des solutions qui marquent les esprits.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
            <div className="slide-in-right">
              <Card className="glassmorphism p-8 neon-border">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-accent" />
                    <span className="text-lg">Innovation constante</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 text-secondary" />
                    <span className="text-lg">Qualité premium</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-6 h-6 text-accent" />
                    <span className="text-lg">Code propre</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Mes Projets</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="glassmorphism overflow-hidden group hover:neon-border transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir le projet
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competences" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Compétences</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="glassmorphism p-6 hover:neon-border transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-accent">{skill.icon}</div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-secondary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-secondary">Contactez-moi</h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Prêt à donner vie à votre prochain projet ? Discutons de vos idées et créons quelque chose d'extraordinaire
            ensemble.
          </p>
          <Card className="glassmorphism max-w-md mx-auto p-8 neon-border">
            <div className="space-y-4">
              <Button size="lg" className="w-full hover:glow-effect transition-all duration-300">
                <Mail className="w-5 h-5 mr-2" />
                kaboreyveslaurent00@gmail.com
              </Button>
              <div className="flex gap-4 justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                >
                  <Github className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Portfolio.
          </p>
        </div>
      </footer>
    </div>
  )
}
