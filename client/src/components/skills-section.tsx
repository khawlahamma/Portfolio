/**
 * ====================================
 * SECTION COMPÉTENCES (Skills Section)
 * ====================================
 * Cette section affiche les compétences techniques organisées par catégorie:
 * - Langages de programmation
 * - Frameworks et librairies
 * - Bases de données
 * - Outils de développement
 * 
 * DESIGN:
 * - Grille responsive (2 colonnes mobile, 4 colonnes desktop)
 * - Badges avec icônes pour chaque compétence
 * - Animation au survol
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Layers, 
  Wrench,
  FileCode,
  Terminal,
  Server,
  Smartphone,
  Globe
} from "lucide-react";

/**
 * Données des compétences organisées par catégorie
 * Chaque catégorie contient un titre, une icône et une liste de compétences
 */
const skillCategories = [
  {
    id: "languages",
    title: "Langages",
    icon: Code2,
    description: "Langages de programmation maîtrisés",
    skills: [
      { name: "Java", level: "Avancé" },
      { name: "Python", level: "Avancé" },
      { name: "JavaScript", level: "Intermédiaire" },
      { name: "PHP", level: "Intermédiaire" },
      { name: "C#", level: "Intermédiaire" },
      { name: "SQL", level: "Avancé" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    icon: Layers,
    description: "Frameworks et librairies utilisés",
    skills: [
      { name: "Spring Boot", level: "Avancé" },
      { name: "React", level: "Intermédiaire" },
      { name: "Node.js", level: "Intermédiaire" },
      { name: "Symfony", level: "Basique" },
      { name: ".NET", level: "Intermédiaire" },
      { name: "Android SDK", level: "Intermédiaire" },
    ],
  },
  {
    id: "databases",
    title: "Bases de données",
    icon: Database,
    description: "Systèmes de gestion de bases de données",
    skills: [
      { name: "MySQL", level: "Avancé" },
      { name: "MongoDB", level: "Intermédiaire" },
      { name: "Oracle", level: "Intermédiaire" },
      { name: "PostgreSQL", level: "Intermédiaire" },
    ],
  },
  {
    id: "tools",
    title: "Outils",
    icon: Wrench,
    description: "Outils et environnements de développement",
    skills: [
      { name: "Git", level: "Avancé" },
      { name: "Docker", level: "Intermédiaire" },
      { name: "IntelliJ IDEA", level: "Avancé" },
      { name: "VS Code", level: "Avancé" },
      { name: "Android Studio", level: "Intermédiaire" },
      { name: "Odoo", level: "Basique" },
      { name: "EspoCRM", level: "Basique" },
      { name: "Keploy", level: "Intermédiaire" },
    ],
  },
];

/**
 * Données des langues parlées
 */
const languages = [
  { name: "Arabe", level: "Natif" },
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Courant" },
];

/**
 * Fonction pour obtenir la couleur du badge selon le niveau
 */
function getLevelVariant(level: string): "default" | "secondary" | "outline" {
  switch (level) {
    case "Avancé":
    case "Natif":
    case "Courant":
      return "default";
    case "Intermédiaire":
    case "Professionnel":
      return "secondary";
    default:
      return "outline";
  }
}

export function SkillsSection() {
  return (
    <section 
      id="competences" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      data-testid="section-competences"
    >
      <div className="max-w-6xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Compétences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que j'utilise pour créer des applications 
            robustes et performantes.
          </p>
        </div>

        {/* Grille des catégories de compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {skillCategories.map((category) => (
            <Card 
              key={category.id}
              className="hover-elevate transition-all duration-300"
              data-testid={`card-skill-${category.id}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  {/* Icône de la catégorie */}
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Liste des compétences avec badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill.name}
                      variant={getLevelVariant(skill.level)}
                      className="px-3 py-1 text-sm"
                      data-testid={`badge-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section Langues */}
        <Card 
          className="hover-elevate transition-all duration-300"
          data-testid="card-languages"
        >
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-xl">Langues</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Langues parlées et niveaux de maîtrise
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {languages.map((lang) => (
                <div 
                  key={lang.name} 
                  className="flex items-center gap-2"
                  data-testid={`text-language-${lang.name.toLowerCase()}`}
                >
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <Badge variant={getLevelVariant(lang.level)} className="text-xs">
                    {lang.level}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
