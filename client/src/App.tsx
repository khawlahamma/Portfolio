/**
 * ====================================
 * COMPOSANT PRINCIPAL DE L'APPLICATION
 * ====================================
 * 
 * Ce fichier est le point d'entrée de l'application React.
 * Il configure:
 * - Le routage avec wouter
 * - Les providers globaux (Query, Theme, Tooltip)
 * - Les notifications toast
 * 
 * STRUCTURE:
 * - QueryClientProvider: Gestion du cache et des requêtes API
 * - TooltipProvider: Infobulles globales
 * - ThemeProvider: Mode clair/sombre
 * - Router: Navigation entre les pages
 * - Toaster: Notifications
 */

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

/**
 * Composant Router
 * 
 * Gère la navigation entre les différentes pages de l'application.
 * Pour l'instant, seule la page d'accueil (Home) est définie.
 */
function Router() {
  return (
    <Switch>
      {/* Page d'accueil - Portfolio complet */}
      <Route path="/" component={Home} />
      
      {/* Page 404 - Route par défaut si aucune autre ne correspond */}
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * Composant App principal
 * 
 * Ce composant enveloppe toute l'application avec les providers nécessaires:
 * 1. QueryClientProvider: Pour les requêtes API et le cache
 * 2. TooltipProvider: Pour les infobulles
 * 3. ThemeProvider: Pour le mode clair/sombre
 */
function App() {
  return (
    // Provider pour les requêtes API (tanstack-query)
    <QueryClientProvider client={queryClient}>
      {/* Provider pour les infobulles */}
      <TooltipProvider>
        {/* 
          Provider pour le thème (clair/sombre)
          defaultTheme="system" utilise la préférence du système
        */}
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          {/* Router pour la navigation */}
          <Router />
          {/* Composant pour afficher les notifications toast */}
          <Toaster />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
