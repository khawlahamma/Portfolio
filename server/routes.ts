/**
 * ====================================
 * ROUTES API DU PORTFOLIO
 * ====================================
 * 
 * Ce fichier définit toutes les routes API de l'application.
 * Les routes sont préfixées par /api.
 * 
 * ROUTES DISPONIBLES:
 * - POST /api/contact : Envoyer un message de contact
 * - GET /api/contact : Récupérer tous les messages (admin)
 * - PATCH /api/contact/:id/read : Marquer un message comme lu
 */

import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

/**
 * Enregistre toutes les routes de l'API
 * @param httpServer - Le serveur HTTP
 * @param app - L'application Express
 * @returns Le serveur HTTP configuré
 */
export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // ====================================
  // ROUTE: POST /api/contact
  // ====================================
  /**
   * Envoie un nouveau message de contact.
   * 
   * BODY (JSON):
   * - name: string (requis, min 2 caractères)
   * - email: string (requis, format email valide)
   * - subject: string (optionnel)
   * - message: string (requis, min 10 caractères)
   * 
   * RÉPONSE:
   * - 201: Message créé avec succès
   * - 400: Données invalides (erreur de validation)
   * - 500: Erreur serveur
   */
  app.post("/api/contact", async (req, res) => {
    try {
      // Valider les données avec le schéma Zod
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Créer le message dans le stockage
      const message = await storage.createContactMessage(validatedData);
      
      // Retourner le message créé avec le statut 201 (Created)
      res.status(201).json({
        success: true,
        message: "Votre message a été envoyé avec succès !",
        data: message,
      });
    } catch (error) {
      // Gérer les erreurs de validation Zod
      if (error instanceof ZodError) {
        // Convertir l'erreur Zod en message lisible
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "Données invalides",
          errors: validationError.details,
        });
        return;
      }
      
      // Gérer les autres erreurs
      console.error("Erreur lors de l'envoi du message:", error);
      res.status(500).json({
        success: false,
        message: "Une erreur est survenue lors de l'envoi du message.",
      });
    }
  });

  // ====================================
  // ROUTE: GET /api/contact
  // ====================================
  /**
   * Récupère tous les messages de contact.
   * Note: Cette route devrait être protégée par authentification en production.
   * 
   * RÉPONSE:
   * - 200: Liste des messages
   * - 500: Erreur serveur
   */
  app.get("/api/contact", async (req, res) => {
    try {
      // Récupérer tous les messages
      const messages = await storage.getContactMessages();
      
      res.json({
        success: true,
        data: messages,
        count: messages.length,
      });
    } catch (error) {
      console.error("Erreur lors de la récupération des messages:", error);
      res.status(500).json({
        success: false,
        message: "Une erreur est survenue lors de la récupération des messages.",
      });
    }
  });

  // ====================================
  // ROUTE: PATCH /api/contact/:id/read
  // ====================================
  /**
   * Marque un message comme lu.
   * 
   * PARAMÈTRES:
   * - id: L'identifiant du message
   * 
   * RÉPONSE:
   * - 200: Message mis à jour
   * - 404: Message non trouvé
   * - 500: Erreur serveur
   */
  app.patch("/api/contact/:id/read", async (req, res) => {
    try {
      const { id } = req.params;
      
      // Marquer le message comme lu
      const message = await storage.markMessageAsRead(id);
      
      if (!message) {
        res.status(404).json({
          success: false,
          message: "Message non trouvé.",
        });
        return;
      }
      
      res.json({
        success: true,
        message: "Message marqué comme lu.",
        data: message,
      });
    } catch (error) {
      console.error("Erreur lors de la mise à jour du message:", error);
      res.status(500).json({
        success: false,
        message: "Une erreur est survenue lors de la mise à jour du message.",
      });
    }
  });

  return httpServer;
}
