import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contactez-nous</h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Nous sommes là pour répondre à vos questions et vous accompagner dans votre parcours de formation.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Notre adresse</h3>
                <p className="text-sm text-muted-foreground">iset Tozeur 3200</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Téléphone</h3>
                <p className="text-sm text-muted-foreground">+216 22 000 000</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground">contact@eduportal.com</p>
              </div>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Envoyez-nous un message</CardTitle>
            <CardDescription>
              Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstname">Prénom</Label>
                <Input id="firstname" placeholder="Ranim" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname">Nom</Label>
                <Input id="lastname" placeholder="Jemai" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="ranimjemai662@gmail.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Sujet</Label>
              <Input id="subject" placeholder="Comment pouvons-nous vous aider ?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Écrivez votre message ici..."
                className="min-h-[150px]"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              Envoyer le message
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}