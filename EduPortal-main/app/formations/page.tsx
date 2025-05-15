import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Users, GraduationCap } from "lucide-react";

const formations = [
  {
    title: "Développement Web Full Stack",
    description: "Maîtrisez le développement web front-end et back-end",
    duration: "6 mois",
    students: 45,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    level: "Intermédiaire"
  },
  {
    title: "Intelligence Artificielle",
    description: "Découvrez les fondements de l'IA et du Machine Learning",
    duration: "8 mois",
    students: 30,
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80",
    level: "Avancé"
  },
  {
    title: "Cybersécurité",
    description: "Protégez les systèmes et réseaux informatiques",
    duration: "4 mois",
    students: 25,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    level: "Intermédiaire"
  }
];

export default function FormationsPage() {
  return (
    <div className="container py-10">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos Formations</h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            Découvrez nos programmes de formation et développez vos compétences
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {formations.map((formation, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={formation.image}
                  alt={formation.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{formation.title}</CardTitle>
                <CardDescription>{formation.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{formation.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{formation.students} étudiants</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <GraduationCap className="w-4 h-4" />
                    <span>Niveau {formation.level}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <BookOpen className="w-4 h-4 mr-2" />
                  S&apos;inscrire
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}