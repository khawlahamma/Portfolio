/**
 * ====================================
 * FOURNISSEUR DE THÈME (Theme Provider)
 * ====================================
 * Ce composant gère le thème de l'application (clair/sombre).
 * Il utilise le localStorage pour persister la préférence de l'utilisateur.
 * 
 * UTILISATION:
 * - Envelopper l'application avec <ThemeProvider>
 * - Utiliser le hook useTheme() pour accéder au thème et le modifier
 */

import { createContext, useContext, useEffect, useState } from "react";

// Types possibles pour le thème
type Theme = "dark" | "light" | "system";

// Interface pour le contexte du thème
interface ThemeProviderState {
  // Thème actuel
  theme: Theme;
  // Fonction pour changer le thème
  setTheme: (theme: Theme) => void;
}

// Valeurs par défaut du contexte
const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

// Création du contexte React
const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

// Props du composant ThemeProvider
interface ThemeProviderProps {
  children: React.ReactNode;
  // Thème par défaut si aucun n'est stocké
  defaultTheme?: Theme;
  // Clé utilisée pour le localStorage
  storageKey?: string;
}

/**
 * Composant ThemeProvider
 * 
 * Ce composant:
 * 1. Récupère le thème sauvegardé dans localStorage
 * 2. Applique la classe "dark" sur <html> si nécessaire
 * 3. Fournit le thème et la fonction de modification via Context
 */
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "portfolio-theme",
}: ThemeProviderProps) {
  // État local pour stocker le thème actuel
  // On initialise avec la valeur du localStorage ou le thème par défaut
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  // Effet pour appliquer le thème sur le document HTML
  useEffect(() => {
    // Récupérer l'élément <html> (racine du document)
    const root = window.document.documentElement;

    // Retirer les classes de thème existantes
    root.classList.remove("light", "dark");

    // Si le thème est "system", détecter la préférence du système
    if (theme === "system") {
      // Utiliser matchMedia pour détecter le mode sombre du système
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      // Appliquer la classe correspondante
      root.classList.add(systemTheme);
      return;
    }

    // Sinon, appliquer directement le thème choisi
    root.classList.add(theme);
  }, [theme]); // Se ré-exécute quand le thème change

  // Valeur du contexte à fournir aux composants enfants
  const value = {
    theme,
    // Fonction pour mettre à jour le thème
    setTheme: (newTheme: Theme) => {
      // Sauvegarder dans localStorage pour persister
      localStorage.setItem(storageKey, newTheme);
      // Mettre à jour l'état
      setTheme(newTheme);
    },
  };

  // Retourner le Provider avec la valeur du contexte
  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

/**
 * Hook useTheme
 * 
 * Ce hook permet d'accéder au thème actuel et de le modifier
 * depuis n'importe quel composant enfant du ThemeProvider.
 * 
 * EXEMPLE:
 * const { theme, setTheme } = useTheme();
 * setTheme("dark"); // Passer en mode sombre
 */
export const useTheme = () => {
  // Récupérer le contexte
  const context = useContext(ThemeProviderContext);

  // Vérifier que le hook est utilisé dans un ThemeProvider
  if (context === undefined) {
    throw new Error(
      "useTheme doit être utilisé à l'intérieur d'un ThemeProvider"
    );
  }

  return context;
};
