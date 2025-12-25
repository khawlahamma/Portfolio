/**
 * ====================================
 * MODULE DE STOCKAGE (Storage Module)
 * ====================================
 * 
 * Ce fichier définit l'interface de stockage et son implémentation.
 * Il utilise le stockage en mémoire (MemStorage) pour la persistance des données.
 * 
 * FONCTIONNALITÉS:
 * - Gestion des utilisateurs (pour authentification future)
 * - Gestion des messages de contact
 */

import { 
  type User, 
  type InsertUser, 
  type ContactMessage, 
  type InsertContactMessage 
} from "@shared/schema";
import { randomUUID } from "crypto";

// ====================================
// INTERFACE DE STOCKAGE
// ====================================
/**
 * Interface définissant toutes les opérations CRUD disponibles.
 * Toute implémentation de stockage doit respecter cette interface.
 */
export interface IStorage {
  // === Opérations sur les utilisateurs ===
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // === Opérations sur les messages de contact ===
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  getContactMessage(id: string): Promise<ContactMessage | undefined>;
  markMessageAsRead(id: string): Promise<ContactMessage | undefined>;
}

// ====================================
// IMPLÉMENTATION EN MÉMOIRE
// ====================================
/**
 * Implémentation du stockage en mémoire.
 * Les données sont stockées dans des Maps et sont perdues au redémarrage.
 * 
 * Note: Pour une application en production, remplacez par une base de données.
 */
export class MemStorage implements IStorage {
  // Map pour stocker les utilisateurs (clé: id)
  private users: Map<string, User>;
  
  // Map pour stocker les messages de contact (clé: id)
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
  }

  // ========== UTILISATEURS ==========

  /**
   * Récupère un utilisateur par son ID
   * @param id - L'identifiant unique de l'utilisateur
   * @returns L'utilisateur trouvé ou undefined
   */
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  /**
   * Récupère un utilisateur par son nom d'utilisateur
   * @param username - Le nom d'utilisateur à rechercher
   * @returns L'utilisateur trouvé ou undefined
   */
  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  /**
   * Crée un nouvel utilisateur
   * @param insertUser - Les données de l'utilisateur à créer
   * @returns L'utilisateur créé avec son ID généré
   */
  async createUser(insertUser: InsertUser): Promise<User> {
    // Générer un ID unique
    const id = randomUUID();
    // Créer l'objet utilisateur complet
    const user: User = { ...insertUser, id };
    // Stocker dans la Map
    this.users.set(id, user);
    return user;
  }

  // ========== MESSAGES DE CONTACT ==========

  /**
   * Crée un nouveau message de contact
   * @param insertMessage - Les données du message (nom, email, sujet, message)
   * @returns Le message créé avec son ID et timestamp
   */
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    // Générer un ID unique
    const id = randomUUID();
    // Créer l'objet message complet avec timestamp
    const message: ContactMessage = {
      ...insertMessage,
      id,
      subject: insertMessage.subject || null,
      createdAt: new Date(),
      isRead: false,
    };
    // Stocker dans la Map
    this.contactMessages.set(id, message);
    return message;
  }

  /**
   * Récupère tous les messages de contact
   * @returns La liste de tous les messages, triés par date (plus récent en premier)
   */
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  /**
   * Récupère un message de contact par son ID
   * @param id - L'identifiant unique du message
   * @returns Le message trouvé ou undefined
   */
  async getContactMessage(id: string): Promise<ContactMessage | undefined> {
    return this.contactMessages.get(id);
  }

  /**
   * Marque un message comme lu
   * @param id - L'identifiant du message à marquer
   * @returns Le message mis à jour ou undefined si non trouvé
   */
  async markMessageAsRead(id: string): Promise<ContactMessage | undefined> {
    const message = this.contactMessages.get(id);
    if (message) {
      // Mettre à jour le statut de lecture
      message.isRead = true;
      this.contactMessages.set(id, message);
    }
    return message;
  }
}

// Exporter une instance unique du stockage
export const storage = new MemStorage();
