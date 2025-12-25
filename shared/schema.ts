/**
 * ====================================
 * SCHÉMA DE DONNÉES DU PORTFOLIO
 * ====================================
 * Ce fichier définit tous les types et schémas de validation
 * utilisés dans l'application portfolio.
 * 
 * Chaque type est commenté en français pour faciliter la compréhension.
 */

import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// ====================================
// TABLE DES UTILISATEURS (pour authentification future)
// ====================================
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// ====================================
// TABLE DES MESSAGES DE CONTACT
// ====================================
/**
 * Cette table stocke les messages envoyés via le formulaire de contact.
 * Chaque message contient le nom, email, message et la date d'envoi.
 */
export const contactMessages = pgTable("contact_messages", {
  // Identifiant unique généré automatiquement
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  // Nom complet de la personne qui envoie le message
  name: text("name").notNull(),
  // Adresse email pour répondre
  email: text("email").notNull(),
  // Sujet du message (optionnel)
  subject: text("subject"),
  // Contenu du message
  message: text("message").notNull(),
  // Date et heure d'envoi
  createdAt: timestamp("created_at").defaultNow().notNull(),
  // Indique si le message a été lu
  isRead: boolean("is_read").default(false),
});

// Schéma de validation pour l'insertion d'un message
export const insertContactMessageSchema = createInsertSchema(contactMessages).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
}).extend({
  // Validation de l'email avec format correct
  email: z.string().email("Veuillez entrer une adresse email valide"),
  // Le nom doit avoir au moins 2 caractères
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  // Le message doit avoir au moins 10 caractères
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  // Le sujet est optionnel
  subject: z.string().optional(),
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

// ====================================
// TYPES POUR LES PROJETS (Frontend uniquement)
// ====================================
/**
 * Interface pour représenter un projet dans le portfolio.
 * Ces données sont statiques et définies dans le frontend.
 */
export interface Project {
  // Identifiant unique du projet
  id: string;
  // Titre du projet
  title: string;
  // Description courte du projet
  description: string;
  // Description détaillée (affichée dans le modal)
  longDescription?: string;
  // Technologies utilisées
  technologies: string[];
  // URL de l'image du projet (screenshot ou mockup)
  imageUrl?: string;
  // Lien vers le code source sur GitHub
  githubUrl: string;
  // URL de la démo live (si déployée)
  demoUrl?: string;
  // Indique si le projet a une démo live intégrée
  hasLiveDemo: boolean;
  // Catégorie du projet (web, mobile, api, etc.)
  category: "web" | "mobile" | "api" | "fullstack";
}

// ====================================
// TYPES POUR LES COMPÉTENCES
// ====================================
export interface Skill {
  // Nom de la compétence
  name: string;
  // Icône associée (nom de l'icône Lucide)
  icon?: string;
  // Catégorie de la compétence
  category: "language" | "framework" | "database" | "tool";
}

// ====================================
// TYPES POUR L'EXPÉRIENCE PROFESSIONNELLE
// ====================================
export interface Experience {
  // Identifiant unique
  id: string;
  // Nom de l'entreprise
  company: string;
  // Poste occupé
  role: string;
  // Localisation
  location: string;
  // Période (ex: "2025")
  period: string;
  // Liste des responsabilités et réalisations
  responsibilities: string[];
  // Lien vers le projet GitHub si applicable
  projectUrl?: string;
}

// ====================================
// TYPES POUR LA FORMATION
// ====================================
export interface Education {
  // Identifiant unique
  id: string;
  // Nom de l'établissement
  institution: string;
  // Diplôme ou programme
  degree: string;
  // Localisation
  location: string;
  // Période (ex: "2023-Présent")
  period: string;
  // Détails supplémentaires
  details?: string;
}
