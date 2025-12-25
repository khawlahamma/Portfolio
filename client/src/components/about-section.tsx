/**
 * ====================================
 * SECTION À PROPOS (About Section)
 * ====================================
 * Cette section présente un profil professionnel détaillé avec:
 * - Un résumé professionnel
 * - Des chiffres clés (années d'études, technologies, projets)
 * - Un bouton pour télécharger le CV
 * 
 * DESIGN:
 * - Centré avec max-w-3xl
 * - Grille de métriques
 * - Style épuré et professionnel
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown, GraduationCap, Code2, FolderGit2, Award } from "lucide-react";

/**
 * Métriques clés affichées dans la section
 */
const metrics = [
  {
    id: "years",
    icon: GraduationCap,
    value: "3+",
    label: "Années d'études en ingénierie",
  },
  {
    id: "technologies",
    icon: Code2,
    value: "15+",
    label: "Technologies maîtrisées",
  },
  {
    id: "projects",
    icon: FolderGit2,
    value: "5+",
    label: "Projets réalisés",
  },
  {
    id: "mention",
    icon: Award,
    value: "TB",
    label: "Mention au Baccalauréat",
  },
];

export function AboutSection() {
  return (
    <section 
      id="apropos" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      data-testid="section-apropos"
    >
      <div className="max-w-4xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="text-apropos-title"
          >
            À Propos
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-apropos-subtitle"
          >
            Découvrez mon parcours et mes objectifs professionnels.
          </p>
        </div>

        {/* Contenu principal */}
        <Card 
          className="mb-8 hover-elevate transition-all duration-300"
          data-testid="card-about-profile"
        >
          <CardContent className="p-6 md:p-8">
            {/* Résumé professionnel */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p 
                className="text-muted-foreground leading-relaxed text-base md:text-lg"
                data-testid="text-about-summary"
              >
                Étudiante ingénieure en <span className="text-foreground font-medium">Data & Software Engineering</span> à 
                l'<span className="text-primary font-medium">INSEA</span>, je suis passionnée par le développement 
                full-stack et la data. Ma formation me permet de maîtriser un large éventail de technologies, 
                de <span className="text-foreground font-medium">Java et Spring Boot</span> pour le backend à 
                <span className="text-foreground font-medium"> React et Node.js</span> pour le frontend, 
                en passant par <span className="text-foreground font-medium">Python</span> pour l'analyse de données.
              </p>
              <p 
                className="text-muted-foreground leading-relaxed text-base md:text-lg mt-4"
                data-testid="text-about-objective"
              >
                Je recherche un <span className="text-primary font-medium">stage PFE de février à juin 2026</span> pour 
                contribuer à des projets innovants en développement logiciel ou data engineering. Mon expérience chez 
                Storeino m'a permis de développer des compétences en automatisation des tests API et en développement 
                e-commerce, que je souhaite approfondir au sein d'une équipe dynamique.
              </p>
            </div>

            {/* Bouton télécharger CV */}
            <div className="mt-8 flex justify-center">
              <Button 
                size="lg" 
                className="gap-2"
                asChild
                data-testid="button-download-cv"
              >
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" download="Khawla_Hamma_CV.pdf">
                  <FileDown className="h-5 w-5" />
                  Télécharger mon CV
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Grille des métriques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <Card 
              key={metric.id}
              className="text-center hover-elevate transition-all duration-300"
              data-testid={`card-metric-${metric.id}`}
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col items-center">
                  {/* Icône */}
                  <div className="p-3 rounded-xl bg-primary/10 text-primary mb-3">
                    <metric.icon className="h-6 w-6" />
                  </div>
                  {/* Valeur */}
                  <span 
                    className="text-3xl md:text-4xl font-bold text-foreground"
                    data-testid={`text-metric-value-${metric.id}`}
                  >
                    {metric.value}
                  </span>
                  {/* Label */}
                  <span 
                    className="text-sm text-muted-foreground mt-1 text-center"
                    data-testid={`text-metric-label-${metric.id}`}
                  >
                    {metric.label}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
