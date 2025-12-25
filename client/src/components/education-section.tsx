/**
 * ====================================
 * SECTION FORMATION (Education Section)
 * ====================================
 * Cette section affiche le parcours académique sous forme de cartes.
 * 
 * DESIGN:
 * - Cartes modernes avec icônes
 * - Badges pour les détails
 * - Effet de survol
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import type { Education } from "@shared/schema";

/**
 * Données du parcours académique
 * Basées sur le CV de Khawla Hamma
 */
const education: Education[] = [
  {
    id: "insea",
    institution: "INSEA",
    degree: "Cycle d'ingénieur – Data & Software Engineering",
    location: "Rabat, Maroc",
    period: "2023 – Présent",
    details: "Formation en algorithmique, développement web, bases de données et statistiques.",
  },
  {
    id: "cpge",
    institution: "Lycée Reda Slaoui",
    degree: "CPGE – MPSI",
    location: "Agadir, Maroc",
    period: "2020 – 2022",
    details: "Classes préparatoires aux Grandes Écoles, filière Mathématiques, Physique et Sciences de l'Ingénieur.",
  },
  {
    id: "bac",
    institution: "Lycée Badr",
    degree: "Baccalauréat Scientifique",
    location: "Agadir, Maroc",
    period: "2020",
    details: "Mention Très Bien",
  },
];

export function EducationSection() {
  return (
    <section 
      id="formation" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      data-testid="section-formation"
    >
      <div className="max-w-4xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Formation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mon parcours académique et mes diplômes.
          </p>
        </div>

        {/* Liste des formations */}
        <div className="space-y-6">
          {education.map((edu) => (
            <Card 
              key={edu.id}
              className="hover-elevate transition-all duration-300"
              data-testid={`education-${edu.id}`}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    {/* Icône */}
                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                      <p className="text-lg font-medium text-primary">{edu.institution}</p>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="gap-1.5">
                      <MapPin className="h-3 w-3" />
                      {edu.location}
                    </Badge>
                    <Badge variant="outline" className="gap-1.5">
                      <Calendar className="h-3 w-3" />
                      {edu.period}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              {edu.details && (
                <CardContent>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <BookOpen className="h-4 w-4 mt-1 shrink-0 text-primary" />
                    <p>{edu.details}</p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
