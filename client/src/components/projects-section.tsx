/**
 * ====================================
 * SECTION PROJETS (Projects Section)
 * ====================================
 * Cette section affiche les projets réalisés avec:
 * - Une carte pour chaque projet
 * - Des badges pour les technologies utilisées
 * - Des boutons pour voir le code source (GitHub) et la démo live
 * - Un modal pour afficher la démo live dans un iframe
 * 
 * FONCTIONNALITÉ CLÉ:
 * Pour afficher une démo live de votre projet, vous devez:
 * 1. Déployer votre projet sur Replit ou un autre service
 * 2. Copier l'URL de déploiement
 * 3. Ajouter cette URL dans le champ "demoUrl" du projet
 * 
 * COMMENT DÉPLOYER UN PROJET SUR REPLIT:
 * 1. Créez un nouveau Repl avec votre code
 * 2. Cliquez sur "Deploy" en haut à droite
 * 3. Choisissez "Autoscale" ou "Static"
 * 4. Copiez l'URL générée (ex: https://mon-projet.replit.app)
 */

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { ExternalLink, Github, Play, X, Info, Smartphone, Globe, Server, Code2 } from "lucide-react";
import type { Project } from "@shared/schema";

/**
 * ====================================
 * DONNÉES DES PROJETS
 * ====================================
 * 
 * INSTRUCTIONS POUR AJOUTER VOS PROJETS:
 * 
 * Pour chaque projet, remplissez les champs suivants:
 * - id: Identifiant unique (ex: "storeillo")
 * - title: Nom du projet
 * - description: Description courte (1-2 phrases)
 * - longDescription: Description détaillée (optionnel)
 * - technologies: Liste des technologies utilisées
 * - githubUrl: Lien vers le repository GitHub
 * - demoUrl: URL de la démo déployée (voir instructions ci-dessous)
 * - hasLiveDemo: true si le projet a une démo en ligne
 * - category: "web", "mobile", "api" ou "fullstack"
 * 
 * POUR OBTENIR UNE DÉMO LIVE:
 * 1. Allez sur replit.com
 * 2. Importez votre projet depuis GitHub
 * 3. Cliquez sur "Deploy" > "Autoscale" ou "Static"
 * 4. Copiez l'URL et collez-la dans demoUrl
 */
const projects: Project[] = [
  {
    id: "storeillo",
    title: "Storeillo-Api-main",
    description: "Mini site e-commerce développé pendant mon stage chez Storeino. Automatisation des tests API avec IA et Keploy.",
    longDescription: "Projet développé dans le cadre de mon stage chez Storeino. Ce projet comprend l'automatisation des tests API utilisant l'IA et Keploy pour améliorer la qualité du code. J'ai également développé un mini site e-commerce pour améliorer l'expérience utilisateur et optimisé les processus internes de l'équipe.",
    technologies: ["Node.js", "JavaScript", "Keploy", "API REST", "Tests automatisés"],
    githubUrl: "https://github.com/khawlahamma/Storeillo-Api-main",
    // ⬇️ REMPLACEZ CETTE URL PAR L'URL DE VOTRE PROJET DÉPLOYÉ
    demoUrl: "",
    hasLiveDemo: false, // Passez à true quand vous avez une URL de démo
    category: "api",
  },
  {
    id: "handyconnect",
    title: "HandyConnect",
    description: "Application de gestion d'ouvriers permettant de connecter les professionnels avec les clients.",
    longDescription: "HandyConnect est une plateforme complète de gestion d'ouvriers. Elle permet aux utilisateurs de trouver des professionnels qualifiés pour leurs travaux et aux ouvriers de gérer leurs missions. L'application inclut un système d'inscription, de recherche, de messagerie et de gestion des demandes.",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS"],
    githubUrl: "https://github.com/khawlahamma/GestionOuvriers",
    // ⬇️ REMPLACEZ CETTE URL PAR L'URL DE VOTRE PROJET DÉPLOYÉ
    demoUrl: "",
    hasLiveDemo: false, // Passez à true quand vous avez une URL de démo
    category: "fullstack",
  },
  {
    id: "travel-planner",
    title: "Site de Planification de Voyages",
    description: "Application web complète pour planifier et organiser des voyages avec une interface moderne.",
    longDescription: "Application full-stack permettant aux utilisateurs de planifier leurs voyages. Fonctionnalités incluent: création d'itinéraires, gestion des réservations, partage de plans de voyage, et recommandations personnalisées basées sur les préférences de l'utilisateur.",
    technologies: ["Spring Boot", "React", "MySQL", "Java", "REST API"],
    githubUrl: "https://github.com/khawlahamma/voyage",
    // ⬇️ REMPLACEZ CETTE URL PAR L'URL DE VOTRE PROJET DÉPLOYÉ
    demoUrl: "",
    hasLiveDemo: false, // Passez à true quand vous avez une URL de démo
    category: "fullstack",
  },
  {
    id: "mobile-portfolio",
    title: "Application Mobile Portfolio",
    description: "Application mobile Android permettant de présenter son portfolio de manière interactive.",
    longDescription: "Application native Android développée en Java. Elle permet de créer et personnaliser son portfolio mobile avec une interface intuitive. Inclut des animations fluides, un mode hors-ligne, et la possibilité de partager son portfolio.",
    technologies: ["Java", "Android Studio", "SQLite", "Material Design"],
    githubUrl: "https://github.com/khawlahamma/PortfolioAppMobile",
    // Note: Les applications Android ne peuvent pas être affichées dans un iframe
    demoUrl: "",
    hasLiveDemo: false,
    category: "mobile",
  },
  {
    id: "conference-app",
    title: "Application de Conférences",
    description: "Système de gestion de conférences permettant d'organiser des événements et gérer les inscriptions.",
    longDescription: "Application de gestion de conférences développée avec .NET et C#. Elle permet de créer des événements, gérer les intervenants, les inscriptions des participants, et visualiser les statistiques. Interface d'administration complète avec tableau de bord.",
    technologies: [".NET", "C#", "MySQL", "Entity Framework", "WPF"],
    githubUrl: "https://github.com/khawlahamma/conference",
    // ⬇️ REMPLACEZ CETTE URL PAR L'URL DE VOTRE PROJET DÉPLOYÉ
    demoUrl: "",
    hasLiveDemo: false, // Passez à true quand vous avez une URL de démo
    category: "fullstack",
  },
];

/**
 * Fonction pour obtenir l'icône selon la catégorie du projet
 */
function getCategoryIcon(category: Project["category"]) {
  switch (category) {
    case "mobile":
      return Smartphone;
    case "web":
      return Globe;
    case "api":
      return Server;
    case "fullstack":
      return Code2;
    default:
      return Code2;
  }
}

/**
 * Fonction pour obtenir le label de la catégorie
 */
function getCategoryLabel(category: Project["category"]) {
  switch (category) {
    case "mobile":
      return "Mobile";
    case "web":
      return "Web";
    case "api":
      return "API";
    case "fullstack":
      return "Full-Stack";
    default:
      return category;
  }
}

export function ProjectsSection() {
  // État pour gérer le projet sélectionné pour le modal de détails
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // État pour gérer le projet dont on affiche la démo
  const [demoProject, setDemoProject] = useState<Project | null>(null);

  return (
    <section 
      id="projets" 
      className="py-20 px-4 sm:px-6 lg:px-8"
      data-testid="section-projets"
    >
      <div className="max-w-6xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes réalisations en développement logiciel et data engineering.
            
          </p>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const CategoryIcon = getCategoryIcon(project.category);
            
            return (
              <Card 
                key={project.id}
                className="group flex flex-col hover-elevate transition-all duration-300"
                data-testid={`card-project-${project.id}`}
              >
                {/* En-tête avec catégorie */}
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="secondary" className="gap-1 text-xs">
                      <CategoryIcon className="h-3 w-3" />
                      {getCategoryLabel(project.category)}
                    </Badge>
                    {project.hasLiveDemo && (
                      <Badge variant="default" className="gap-1 text-xs bg-green-600">
                        <Play className="h-3 w-3" />
                        Démo disponible
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  {/* Technologies utilisées */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs px-2 py-0.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs px-2 py-0.5">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Boutons d'action */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {/* Bouton Démo Live - uniquement si disponible */}
                    {project.hasLiveDemo && project.demoUrl && (
                      <Button
                        size="sm"
                        onClick={() => setDemoProject(project)}
                        className="gap-1.5 flex-1"
                        data-testid={`button-demo-${project.id}`}
                      >
                        <Play className="h-4 w-4" />
                        Démo Live
                      </Button>
                    )}
                    
                    {/* Bouton Code Source */}
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="gap-1.5 flex-1"
                    >
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-github-${project.id}`}
                      >
                        <Github className="h-4 w-4" />
                        Code Source
                      </a>
                    </Button>

                    {/* Bouton Détails */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                      className="gap-1.5"
                      data-testid={`button-details-${project.id}`}
                    >
                      <Info className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        
      </div>

      {/* Modal de détails du projet */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            <DialogDescription>
              {selectedProject && (
                <Badge variant="secondary" className="mt-2 gap-1">
                  {getCategoryLabel(selectedProject.category)}
                </Badge>
              )}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {selectedProject?.longDescription || selectedProject?.description}
            </p>
            
            <div>
              <h4 className="font-semibold mb-2">Technologies utilisées:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button asChild className="gap-2">
                <a 
                  href={selectedProject?.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  Voir sur GitHub
                </a>
              </Button>
              {selectedProject?.hasLiveDemo && selectedProject?.demoUrl && (
                <Button 
                  variant="outline" 
                  className="gap-2"
                  onClick={() => {
                    setSelectedProject(null);
                    setDemoProject(selectedProject);
                  }}
                >
                  <Play className="h-4 w-4" />
                  Lancer la démo
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal de démo live avec iframe */}
      <Dialog open={!!demoProject} onOpenChange={() => setDemoProject(null)}>
        <DialogContent className="max-w-7xl h-[90vh] flex flex-col p-0">
          <DialogHeader className="p-4 border-b flex flex-row items-center justify-between gap-4">
            <div>
              <DialogTitle className="text-xl">{demoProject?.title} - Démo Live</DialogTitle>
              <DialogDescription>
                Testez l'application directement dans votre navigateur
              </DialogDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="gap-1.5"
              >
                <a 
                  href={demoProject?.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Ouvrir dans un nouvel onglet
                </a>
              </Button>
              <DialogClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </DialogClose>
            </div>
          </DialogHeader>
          
          {/* Iframe pour afficher la démo */}
          <div className="flex-1 bg-muted">
            {demoProject?.demoUrl ? (
              <iframe
                src={demoProject.demoUrl}
                className="w-full h-full border-0"
                title={`Démo de ${demoProject.title}`}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                loading="lazy"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <p>Aucune URL de démo disponible</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
