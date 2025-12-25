/**
 * ====================================
 * COMPOSANT FOOTER
 * ====================================
 * Pied de page du portfolio avec:
 * - Navigation rapide vers les sections
 * - Liens vers les réseaux sociaux
 * - Copyright et crédits
 */

import { Github, Linkedin, Mail, Heart } from "lucide-react";

/**
 * Liens de navigation rapide
 */
const quickLinks = [
  { href: "#apropos", label: "À propos" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#experience", label: "Expérience" },
  { href: "#formation", label: "Formation" },
  { href: "#contact", label: "Contact" },
];

/**
 * Liens vers les réseaux sociaux
 */
const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/khawlahamma",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/khawla-hamma-92a31b248",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:hammakhawla0202@gmail.com",
    label: "Email",
  },
];

export function Footer() {
  // Année courante pour le copyright
  const currentYear = new Date().getFullYear();

  /**
   * Fonction pour scroller vers une section
   */
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer 
      className="py-12 px-4 sm:px-6 lg:px-8 bg-card border-t border-card-border"
      data-testid="footer"
    >
      <div className="max-w-6xl mx-auto">
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Colonne 1 - Logo et description */}
          <div className="space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors inline-block"
              data-testid="link-footer-logo"
            >
              <span className="text-primary">K</span>H
            </a>
            <p className="text-muted-foreground text-sm">
              Étudiante ingénieure en Data & Software Engineering à l'INSEA, 
              passionnée par le développement full-stack et la data.
            </p>
          </div>

          {/* Colonne 2 - Navigation rapide */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid={`link-footer-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Colonne 3 - Réseaux sociaux */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Me suivre</h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors hover-elevate"
                  aria-label={link.label}
                  data-testid={`link-footer-social-${link.label.toLowerCase()}`}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} Khawla Hamma. Tous droits réservés.
            </p>

            {/* Crédits */}
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Fait avec <Heart className="h-4 w-4 text-red-500" /> en utilisant HTML, CSS & JavaScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
