import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const joinSchema = z.object({
  fullName: z.string().trim().min(2, "Le nom complet doit contenir au moins 2 caractères").max(100),
  codeMassar: z.string().trim().min(1, "Le code massar est requis").max(50),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères").max(72),
  phone: z.string().trim().min(10, "Numéro de téléphone invalide").max(20),
});

const Join = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    codeMassar: "",
    password: "",
    phone: "",
  });

  const benefits = [
    "Accès à tous les ateliers et équipements du club",
    "Participation aux compétitions nationales et internationales",
    "Mentorat par des membres expérimentés",
    "Networking avec d'autres passionnés",
    "Certificats de participation et de réussite",
    "Accès prioritaire aux événements spéciaux",
  ];


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      joinSchema.parse(formData);
      
      toast({
        title: "Inscription envoyée !",
        description: "Nous vous contacterons bientôt pour finaliser votre inscription.",
      });

      setFormData({
        fullName: "",
        codeMassar: "",
        password: "",
        phone: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erreur de validation",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Rejoignez-nous</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Devenez membre du Club Scientifique et Technologique et commencez votre aventure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Pourquoi Nous Rejoindre ?</h2>
            <Card className="shadow-medium mb-8">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-hero shadow-medium">
              <CardContent className="pt-6 text-center">
                <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                  Cotisation Annuelle
                </h3>
                <div className="text-4xl font-bold text-primary-foreground mb-2">
                  XXX DH/an
                </div>
                <p className="text-primary-foreground/90 text-sm">
                  Accès illimité à toutes les activités
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div>
            <Card className="shadow-strong">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Formulaire d'Inscription</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="fullName">Nom Complet *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Nom Complet"
                      required
                      maxLength={100}
                    />
                  </div>

                  <div>
                    <Label htmlFor="codeMassar">Code Massar *</Label>
                    <Input
                      id="codeMassar"
                      value={formData.codeMassar}
                      onChange={(e) => setFormData({ ...formData, codeMassar: e.target.value })}
                      placeholder="Code Massar"
                      required
                      maxLength={50}
                    />
                  </div>

                  <div>
                    <Label htmlFor="password">Mot de passe *</Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="••••••••"
                      required
                      minLength={6}
                      maxLength={72}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Minimum 6 caractères
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+212 XXX-XXXXXX"
                      required
                      maxLength={20}
                    />
                  </div>

                  <Button type="submit" variant="hero" className="w-full" size="lg">
                    Envoyer ma Candidature
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
