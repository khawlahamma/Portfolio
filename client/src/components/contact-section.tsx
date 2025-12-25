/**
 * ====================================
 * SECTION CONTACT
 * ====================================
 * Cette section permet aux visiteurs de vous contacter.
 * 
 * FONCTIONNALITÉS:
 * - Formulaire de contact avec validation
 * - Affichage des informations de contact directes
 * - Liens vers les réseaux sociaux
 * 
 * Le formulaire envoie les données à l'API /api/contact
 * qui stocke les messages dans la base de données.
 */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  Loader2,
  CheckCircle
} from "lucide-react";

/**
 * Informations de contact directes
 */
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hammakhawla0202@gmail.com",
    href: "mailto:hammakhawla0202@gmail.com",
  },
  
  {
    icon: MapPin,
    label: "Localisation",
    value: "Rabat, Maroc",
    href: null,
  },
];

/**
 * Liens vers les réseaux sociaux
 */
const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/khawlahamma",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/khawla-hamma-92a31b248",
  },
];

export function ContactSection() {
  // État pour afficher le message de succès
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Hook pour les notifications toast
  const { toast } = useToast();

  // Configuration du formulaire avec validation Zod
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Mutation pour envoyer le message
  const sendMessage = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      // Envoyer les données à l'API
      const response = await apiRequest("POST", "/api/contact", data);
      return response;
    },
    onSuccess: () => {
      // Afficher le message de succès
      setIsSuccess(true);
      // Réinitialiser le formulaire
      form.reset();
      // Afficher une notification
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai rapidement.",
      });
      // Masquer le message de succès après 5 secondes
      setTimeout(() => setIsSuccess(false), 5000);
    },
    onError: (error: Error) => {
      // Afficher une notification d'erreur
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  // Fonction appelée à la soumission du formulaire
  const onSubmit = (data: InsertContactMessage) => {
    sendMessage.mutate(data);
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-4 sm:px-6 lg:px-8"
      data-testid="section-contact"
    >
      <div className="max-w-6xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter !
          </p>
        </div>

        {/* Grille à deux colonnes */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Colonne gauche - Formulaire */}
          <Card className="hover-elevate transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl">Envoyez-moi un message</CardTitle>
              <CardDescription>
                Remplissez le formulaire et je vous répondrai dans les plus brefs délais.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSuccess ? (
                // Message de succès
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="p-4 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                    <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-muted-foreground">
                    Merci pour votre message. Je vous répondrai rapidement.
                  </p>
                </div>
              ) : (
                // Formulaire de contact
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {/* Champ Nom */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom complet</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Votre nom" 
                              {...field}
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Champ Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="votre@email.com" 
                              {...field}
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Champ Sujet */}
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sujet (optionnel)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Objet de votre message" 
                              {...field}
                              data-testid="input-subject"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Champ Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Votre message..." 
                              className="min-h-32 resize-none"
                              {...field}
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Bouton d'envoi */}
                    <Button 
                      type="submit" 
                      className="w-full gap-2"
                      disabled={sendMessage.isPending}
                      data-testid="button-submit-contact"
                    >
                      {sendMessage.isPending ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>

          {/* Colonne droite - Informations de contact */}
          <div className="space-y-6">
            {/* Carte des informations de contact */}
            <Card className="hover-elevate transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Informations de contact</CardTitle>
                <CardDescription>
                  Vous pouvez également me contacter directement.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info) => (
                  <div 
                    key={info.label}
                    className="flex items-center gap-4"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                          data-testid={`link-contact-${info.label.toLowerCase()}`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Carte des réseaux sociaux */}
            <Card className="hover-elevate transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Réseaux sociaux</CardTitle>
                <CardDescription>
                  Retrouvez-moi sur les réseaux.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors hover-elevate"
                      data-testid={`link-social-${link.label.toLowerCase()}`}
                    >
                      <link.icon className="h-5 w-5" />
                      <span className="font-medium">{link.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Message d'appel à l'action */}
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">
                Recherche de stage PFE
              </h3>
              <p className="text-muted-foreground text-sm">
                Je suis actuellement à la recherche d'un stage de fin d'études 
                (février-juin 2026) en développement logiciel ou data engineering. 
                N'hésitez pas à me contacter pour toute opportunité !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
