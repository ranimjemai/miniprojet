"use client"

import { Button } from "@/components/ui/button"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { GraduationCap } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  
  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Formations', href: '/formations' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <GraduationCap className="h-6 w-6" />
            <span className="font-bold">EduPortal</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === item.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/login">
                Connexion
              </Link>
            </Button>
            <Button asChild>
              <Link href="/register">
                Inscription
              </Link>
            </Button>
            
          </nav>
        </div>
      </div>
    </header>
  )
}