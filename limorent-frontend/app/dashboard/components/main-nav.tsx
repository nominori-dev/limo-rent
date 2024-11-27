import Link from "next/link"

import { cn } from "@/app/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Główna
      </Link>
      <Link
        href="/dashboard/customers"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Klienci
      </Link>
      <Link
        href="/dashboard/fleet"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Flota
      </Link>
      <Link
        href="/dashboard/manage"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Zarządzanie stroną
      </Link>
    </nav>
  )
}
