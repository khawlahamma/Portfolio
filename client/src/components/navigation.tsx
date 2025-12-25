/**
 * ====================================
 * COMPOSANT DE NAVIGATION
 * ====================================
 * Ce composant gère la barre de navigation fixe en haut de la page.
 * 
 * FONCTIONNALITÉS:
 * - Navigation fluide vers les sections (smooth scroll)
 * - Menu hamburger pour mobile
 * - Effet de transparence/blur au scroll
 * - Bouton de basculement de thème
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

/**
 * Liste des liens de navigation
 * Chaque lien pointe vers une section de la page via son ID
 */
const navLinks = [
  { href: "#apropos", label: "À propos" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#experience", label: "Expérience" },
  { href: "#formation", label: "Formation" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  // État pour contrôler l'ouverture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // État pour savoir si l'utilisateur a scrollé (pour l'effet de background)
  const [isScrolled, setIsScrolled] = useState(false);

  // Effet pour détecter le scroll et modifier l'apparence de la navigation
  useEffect(() => {
    const handleScroll = () => {
      // Si on a scrollé plus de 50px, activer l'effet
      setIsScrolled(window.scrollY > 50);
    };

    // Ajouter l'écouteur d'événement au scroll
    window.addEventListener("scroll", handleScroll);
    
    // Nettoyer l'écouteur quand le composant est démonté
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Fonction pour naviguer vers une section avec smooth scroll
   * @param href - L'ID de la section cible (ex: "#projets")
   */
  const scrollToSection = (href: string) => {
    // Fermer le menu mobile si ouvert
    setIsMenuOpen(false);
    
    // Trouver l'élément cible
    const element = document.querySelector(href);
    if (element) {
      // Scroll fluide vers l'élément
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent"
        }
      `}
      data-testid="header-navigation"
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo / Nom - Cliquable pour revenir en haut */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors"
            data-testid="link-logo"
          >
            {/* Initiales stylisées */}
            <span className="text-primary">K</span>H
          </a>

          {/* Navigation Desktop - Cachée sur mobile */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover-elevate"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            
            {/* Séparateur vertical */}
            <div className="w-px h-6 bg-border mx-2" />
            
            {/* Bouton de thème */}
            <ThemeToggle />
          </div>

          {/* Boutons Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            
            {/* Bouton hamburger pour ouvrir/fermer le menu */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Menu Mobile - Affiché quand isMenuOpen est true */}
        {isMenuOpen && (
          <div 
            className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md"
            data-testid="menu-mobile"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 text-left text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
