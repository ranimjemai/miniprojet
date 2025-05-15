import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container py-10">
      <section className="py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Bienvenue sur EduPortal
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Votre plateforme de gestion des formations et des étudiants. Découvrez nos programmes et commencez votre parcours académique.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/formations">
                  Voir les formations
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/register">
                  S'inscrire
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Nos services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <BookOpen className="w-8 h-8 mb-2" />
                <CardTitle>Formations variées</CardTitle>
                <CardDescription>
                  Accédez à un large choix de formations dans différents domaines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Découvrez nos programmes adaptés à vos besoins et objectifs professionnels.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 mb-2" />
                <CardTitle>Suivi personnalisé</CardTitle>
                <CardDescription>
                  Bénéficiez d'un accompagnement sur mesure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Nos experts vous accompagnent tout au long de votre parcours de formation.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <GraduationCap className="w-8 h-8 mb-2" />
                <CardTitle>Certification</CardTitle>
                <CardDescription>
                  Obtenez des certifications reconnues
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Validez vos acquis avec des certifications professionnelles reconnues.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}