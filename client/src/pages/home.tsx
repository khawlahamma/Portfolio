/**
 * ====================================
 * PAGE D'ACCUEIL DU PORTFOLIO
 * ====================================
 * Cette page assemble tous les composants du portfolio.
 * 
 * STRUCTURE DE LA PAGE:
 * 1. Navigation (fixe en haut)
 * 2. Hero Section (présentation)
 * 3. Projets (avec démos live)
 * 4. Compétences (langages, frameworks, outils)
 * 5. Expérience professionnelle
 * 6. Formation
 * 7. Contact (formulaire et infos)
 * 8. Footer
 * 
 * COMPORTEMENT:
 * - Navigation fluide entre sections (smooth scroll)
 * - Animations au scroll (fade in)
 * - Responsive sur tous les écrans
 */

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

/**
 * Composant principal de la page d'accueil
 * 
 * Ce composant organise toutes les sections du portfolio
 * dans l'ordre approprié et gère le layout global.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* 
        Navigation fixe en haut de la page
        Elle reste visible lors du scroll
      */}
      <Navigation />

      {/* 
        Contenu principal du portfolio
        Chaque section est identifiée par un ID pour la navigation
      */}
      <main>
        {/* Section héros - Présentation principale */}
        <HeroSection />

        {/* Section À Propos - Profil et métriques */}
        <AboutSection />

        {/* Section Projets - Avec modals pour démos live */}
        <ProjectsSection />

        {/* Section Compétences - Langages, frameworks, outils */}
        <SkillsSection />

        {/* Section Expérience professionnelle */}
        <ExperienceSection />

        {/* Section Formation académique */}
        <EducationSection />

        {/* Section Contact - Formulaire et informations */}
        <ContactSection />
      </main>

      {/* Pied de page avec liens et crédits */}
      <Footer />
    </div>
  );
}
