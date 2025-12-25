/**
 * ====================================
 * BOUTON DE BASCULEMENT DE THÈME
 * ====================================
 * Ce composant affiche un bouton pour basculer entre
 * le mode clair et le mode sombre.
 * 
 * Il utilise des icônes de Lucide React pour représenter
 * visuellement chaque mode (soleil pour clair, lune pour sombre).
 */

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

/**
 * Composant ThemeToggle
 * 
 * Affiche un bouton avec une icône qui change selon le thème actuel:
 * - Mode clair: icône de lune (pour passer en mode sombre)
 * - Mode sombre: icône de soleil (pour passer en mode clair)
 */
export function ThemeToggle() {
  // Récupérer le thème actuel et la fonction pour le modifier
  const { theme, setTheme } = useTheme();

  // Fonction pour basculer entre les thèmes
  const toggleTheme = () => {
    // Si le thème actuel est "dark", passer à "light", sinon passer à "dark"
    // Note: si le thème est "system", on bascule vers "dark" par défaut
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      data-testid="button-theme-toggle"
      aria-label={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
    >
      {/* Icône Soleil - visible en mode sombre */}
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      {/* Icône Lune - visible en mode clair */}
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      {/* Texte accessible pour les lecteurs d'écran */}
      <span className="sr-only">Basculer le thème</span>
    </Button>
  );
}
