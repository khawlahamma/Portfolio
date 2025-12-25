/**
 * ====================================
 * SECTION EXPÉRIENCE PROFESSIONNELLE
 * ====================================
 * Cette section affiche l'expérience professionnelle sous forme de timeline.
 * 
 * DESIGN:
 * - Layout en timeline vertical
 * - Cartes avec effet de survol
 * - Liens vers les projets GitHub si applicable
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";
import type { Experience } from "@shared/schema";

/**
 * Données des expériences professionnelles
 * Basées sur le CV de Khawla Hamma
 */
const experiences: Experience[] = [
  {
    id: "storeino",
    company: "Storeino",
    role: "Stagiaire – Ingénierie Logicielle (Tests automatisés & Web)",
    location: "Agadir, Maroc",
    period: "2025",
    responsibilities: [
      "Automatisation des tests API avec IA et Keploy pour améliorer la qualité du code",
      "Développement d'un mini site e-commerce pour améliorer l'expérience utilisateur",
      "Optimisation des processus internes de l'équipe de développement",
      "Collaboration avec l'équipe pour l'intégration de nouvelles fonctionnalités",
    ],
    projectUrl: "https://github.com/khawlahamma/Storeillo-Api-main",
  },
];

export function ExperienceSection() {
  return (
    <section 
      id="experience" 
      className="py-20 px-4 sm:px-6 lg:px-8"
      data-testid="section-experience"
    >
      <div className="max-w-4xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Expérience Professionnelle
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mon parcours professionnel et mes réalisations en entreprise.
          </p>
        </div>

        {/* Timeline des expériences */}
        <div className="relative">
          {/* Ligne verticale de la timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          {/* Liste des expériences */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className="relative pl-0 md:pl-20"
                data-testid={`experience-${exp.id}`}
              >
                {/* Point sur la timeline */}
                <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                <Card className="hover-elevate transition-all duration-300">
                  <CardHeader className="pb-4">
                    {/* En-tête avec logo et infos */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        {/* Icône de l'entreprise */}
                        <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                          <Briefcase className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-1">{exp.role}</CardTitle>
                          <p className="text-lg font-semibold text-primary">{exp.company}</p>
                        </div>
                      </div>
                      
                      {/* Badges de localisation et période */}
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="gap-1.5">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </Badge>
                        <Badge variant="outline" className="gap-1.5">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    {/* Liste des responsabilités */}
                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((resp, idx) => (
                        <li 
                          key={idx}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="text-primary mt-1.5">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Lien vers le projet si disponible */}
                    {exp.projectUrl && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="gap-2"
                      >
                        <a 
                          href={exp.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid={`link-project-${exp.id}`}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Voir le projet
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
