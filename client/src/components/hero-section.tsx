/**
 * ====================================
 * SECTION HÉROS (Hero Section)
 * ====================================
 * C'est la première section visible du portfolio.
 * Elle présente:
 * - Le nom et le titre professionnel
 * - Une brève description
 * - Des boutons d'action (voir projets, me contacter)
 * - Les liens vers les réseaux sociaux
 * 
 * DESIGN:
 * - Occupe 80-100vh de hauteur
 * - Layout en deux colonnes sur desktop
 * - Animation d'apparition au chargement
 */

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, FileText } from "lucide-react";

export function HeroSection() {
  /**
   * Fonction pour scroller vers une section
   * @param sectionId - L'ID de la section cible
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8"
      data-testid="section-hero"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          
          {/* Colonne gauche - Texte (3/5 de la largeur sur desktop) */}
          <div className="lg:col-span-3 space-y-6 text-center lg:text-left">
            
            {/* Badge de statut */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Recherche de stage PFE - Fév-Juin 2026
            </div>

            {/* Nom et titre */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
                Khawla{" "}
                <span className="text-primary">Hamma</span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
                Étudiante en Data & Software Engineering
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionnée par le développement full-stack et la data, 
              je maîtrise <span className="text-foreground font-medium">Java, Spring Boot, React et Python</span>. 
              Je recherche un stage PFE pour contribuer à des projets innovants 
              en développement logiciel ou data engineering.
            </p>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("#projets")}
                className="gap-2"
                data-testid="button-voir-projets"
              >
                Voir mes projets
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="gap-2"
                data-testid="button-me-contacter"
              >
                <Mail className="h-4 w-4" />
                Me contacter
              </Button>
            </div>

            {/* Liens sociaux */}
            <div className="flex items-center gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://github.com/khawlahamma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors hover-elevate"
                aria-label="Profil GitHub"
                data-testid="link-github"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/khawla-hamma-92a31b248"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors hover-elevate"
                aria-label="Profil LinkedIn"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:hammakhawla0202@gmail.com"
                className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors hover-elevate"
                aria-label="Envoyer un email"
                data-testid="link-email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                download="Khawla_Hamma_CV.pdf"
                className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors hover-elevate"
                aria-label="Télécharger le CV"
                data-testid="link-cv"
              >
                <FileText className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Colonne droite - Avatar/Illustration (2/5 de la largeur) */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Cercle décoratif en arrière-plan */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl scale-110" />
              
              {/* Avatar avec initiales */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-2xl">
                <span className="text-7xl sm:text-8xl md:text-9xl font-bold text-primary-foreground select-none">
                  KH
                </span>
              </div>

              {/* Éléments décoratifs flottants */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-card border border-card-border rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">Java</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-card border border-card-border rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">React</span>
              </div>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <div className="hidden md:flex justify-center mt-16">
          <button
            onClick={() => scrollToSection("#projets")}
            className="animate-bounce p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Défiler vers le bas"
            data-testid="button-scroll-down"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
