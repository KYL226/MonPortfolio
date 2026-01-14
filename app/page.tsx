"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Monitor,
  Zap,
  Star,
  Globe,
  Database,
  Smartphone as Mobile,
  Palette as Design,
  Cog,
  Download,
} from "lucide-react";
import TechSlider from "@/components/TechSlider";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
     {
      title: "AgriPro",
      description:
        "AgriPro est une plateforme web communautaire et intelligente dédiée au monde agricole. Elle a été conçue pour répondre aux principaux défis rencontrés par les agriculteurs : l’isolement, la difficulté à vendre leurs produits, le manque d’accès à l’information et l’absence d’un espace centralisé pour échanger.",
      tech: [
        "next.js",
        "Node.js",
        "Mysql",
        "WatherAPI",
        "Tailwind CSS",
        "Cloudinary",
        "TypeScript",
      ],
      image: "/agripro.png",
      link: "https://agripro-five.vercel.app/",
    },
    {
      title: "NetFlix Clone",
      description:
        "Reproduction la Plateforme VOD NetFlix dans l'objectif d'avoir le code source d'un site VOD qui pourra être adapter pour mes projets futurs",
      tech: [
        "next.js",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "TypeScript",
        "Moyen de paiement",
      ],
      image: "/clone_netflix.png",
      link: "https://clone-netflix-navy.vercel.app/",
    },
    {
      title: "ATTESSIA",
      description:
        "Application de gestion des attestions des activités scientfiques a l'Université Norbert Zongo.",
      tech: ["php", "mysql", "bootstrap", "html", "css"],
      image: "/attessia.png",
      link: "https://dupoclic.com/attestationmvc/",
    },
    {
      title: "CHATROOM",
      description:
        "Plateforme de chat en temps réel avec utilisateur tu choisis ta salle de chat et tu peux discuter avec les autres utilisateurs.",
      tech: [
        "next.js",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "Tailwind CSS",
        "Shadcn UI",
        "TypeScript",
      ],
      image: "/chatroom.png",
      link: "https://github.com/KYL226/chatroom",
    },
    {
      title: "VoiceHub",
      description: "Plateforme de publication en audio",
      tech: ["php", "mysql", "bootstrap", "html", "css", "phpmailer"],
      image: "/voicehub.png",
      link: "https://dupoclic.com/socio-vocal/",
    },
    {
      title: "Jeu de couleur",
      description:
        "Site web pour permettre aux enfants de jouer a un Jeu de Reconnaissance des Couleurs quand une voie leur dit leur la couleur",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/jeu_couleur.png",
      link: "https://kyl226.github.io/jeux_enfant/",
    },
    /*
{
  title: "E-Commerce Platform",
  description: "Plateforme e-commerce moderne avec paiements intégrés et gestion d'inventaire en temps réel.",
  tech: ["React", "Node.js", "MongoDB", "Stripe"],
  image: "/modern-ecommerce-dashboard-dark-theme.png",
  link: "https://github.com/iveslaurent/ecommerce-platform",
},
{
  title: "AI Dashboard",
  description: "Interface d'administration pour système d'IA avec visualisations de données avancées.",
  tech: ["Next.js", "TypeScript", "D3.js", "Python"],
  image: "/ai-analytics-dashboard-futuristic.png",
  link: "https://github.com/iveslaurent/ai-dashboard",
},
{
  title: "Mobile Banking App",
  description: "Application bancaire mobile sécurisée avec authentification biométrique.",
  tech: ["React Native", "Firebase", "Biometrics", "Redux"],
  image: "/mobile-banking-app-interface-dark.png",
  link: "https://github.com/iveslaurent/mobile-banking-app",
},
*/
  ];

  // Pagination logic
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to projects section
    const projectsSection = document.getElementById("projets");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      title: "Développement Web Frontend",
      description:
        "Création d'interfaces utilisateur modernes et interactives avec React, Next.js et TypeScript.",
      icon: <Globe className="w-8 h-8 text-accent" />,
      features: [
        "Interfaces responsives",
        "Animations fluides",
        "Performance optimisée",
        "SEO friendly",
      ],
    },
    {
      title: "Développement Mobile",
      description:
        "Applications mobiles cross-platform avec React Native pour iOS et Android.",
      icon: <Mobile className="w-8 h-8 text-secondary" />,
      features: [
        "Design natif",
        "Performance optimale",
        "Intégration API",
        "Tests automatisés",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Conception d'expériences utilisateur exceptionnelles avec des interfaces intuitives.",
      icon: <Design className="w-8 h-8 text-accent" />,
      features: [
        "Prototypage",
        "Design system",
        "Accessibilité",
        "Tests utilisateurs",
      ],
    },
    {
      title: "Développement Backend",
      description:
        "APIs robustes et sécurisées avec Node.js, Express et bases de données modernes.",
      icon: <Database className="w-8 h-8 text-secondary" />,
      features: [
        "APIs REST/GraphQL",
        "Authentification",
        "Base de données",
        "Sécurité",
      ],
    },
    {
      title: "Consultation Technique",
      description:
        "Accompagnement dans vos projets technologiques et architecture de solutions.",
      icon: <Cog className="w-8 h-8 text-accent" />,
      features: [
        "Audit technique",
        "Architecture",
        "Formation équipe",
        "Mentoring",
      ],
    },
    {
      title: "Maintenance & Support",
      description:
        "Maintenance préventive et corrective de vos applications existantes.",
      icon: <Monitor className="w-8 h-8 text-secondary" />,
      features: [
        "Monitoring",
        "Mises à jour",
        "Corrections bugs",
        "Support 24/7",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glassmorphism">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold glow-effect text-secondary">
              {"<Dev/>"}
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                {[
                  "Accueil",
                  "À propos",
                  "Projets",
                  "Services",
                  "Compétences",
                  "Contact",
                ].map((item, index) => (
                  <a
                    key={item}
                    href={`#${item
                      .toLowerCase()
                      .replace("à propos", "about")
                      .replace("é", "e")}`}
                    className="hover:text-accent transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="accueil"
        className="min-h-screen flex items-center justify-center relative"
      >
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
              Développeur full-stack junior passionné par la création
              d'expériences numériques innovantes et futuristes.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                className="neon-border hover:glow-effect transition-all duration-300"
              >
                Voir mes projets
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 bg-transparent"
                onClick={() => {
                  try {
                    const link = document.createElement("a");
                    link.href = "/images/cv.pdf";
                    link.download = "CV_Ives_Laurent_KABORE.pdf";
                    link.target = "_blank";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  } catch (error) {
                    console.error(
                      "Erreur lors du téléchargement du CV:",
                      error
                    );
                    // Fallback: ouvrir dans un nouvel onglet
                    window.open("/images/cv.pdf", "_blank");
                  }
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Télécharger mon CV
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
              <h2 className="text-4xl font-bold mb-6 text-secondary">
                À propos de moi
              </h2>
              <p className="text-lg mb-6 text-pretty">
                Développeur web créatif et Passionné par les nouvelles
                technologies et l'innovation, je transforme les idées en
                réalités numériques.
              </p>
              <p className="text-lg mb-8 text-pretty">
                Mon approche combine design moderne, performance optimale et
                expérience utilisateur exceptionnelle pour créer des solutions
                qui marquent les esprits.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/KYL226"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/ives-laurent-kabore-929486317/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>
            <div className="slide-in-right">
              <div className="flex flex-col items-center space-y-6">
                {/* Profile Photo */}
                <div className="relative">
                  <img
                    src="/images/ivespr.png"
                    alt="Ives Laurent KABORE"
                    className="w-48 h-48 rounded-full object-cover border-4 border-accent/30 shadow-2xl hover:border-accent transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Skills Card */}
                <Card className="glassmorphism p-8 neon-border w-full">
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
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
            Mes Projets
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {currentProjects.map((project, index) => (
              <Card
                key={startIndex + index}
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
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    {project.description}
                  </p>
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
                    onClick={() => {
                      if (project.link && project.link !== "#") {
                        window.open(
                          project.link,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      } else {
                        console.log("Lien du projet non disponible");
                      }
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir le projet
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-transparent hover:bg-accent hover:text-accent-foreground"
            >
              Précédent
            </Button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    className={
                      currentPage === page
                        ? "bg-accent text-accent-foreground"
                        : "bg-transparent hover:bg-accent hover:text-accent-foreground"
                    }
                  >
                    {page}
                  </Button>
                )
              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-transparent hover:bg-accent hover:text-accent-foreground"
            >
              Suivant
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
            Mes Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glassmorphism p-6 hover:neon-border transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-card/50 mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-pretty mb-4">
                    {service.description}
                  </p>
                </div>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-6 hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  En savoir plus
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competences" className="py-20">
        <div className="container mx-auto px-6">
          <TechSlider />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-secondary">
            Contactez-moi
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Prêt à donner vie à votre prochain projet ? Discutons de vos idées
            et créons quelque chose d'extraordinaire ensemble.
          </p>
          <Card className="glassmorphism max-w-md mx-auto p-8 neon-border">
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full hover:glow-effect transition-all duration-300"
              >
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
          <p className="text-muted-foreground">© 2025 Portfolio.</p>
        </div>
      </footer>
    </div>
  );
}
