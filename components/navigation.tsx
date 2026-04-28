"use client"

import { motion } from "framer-motion"
import { Home, Briefcase, User, Mail } from "lucide-react"

const navItems = [
  { icon: Home, label: "الرئيسية", href: "#home" },
  { icon: User, label: "نبذة", href: "#about" },
  { icon: Briefcase, label: "المشاريع", href: "#projects" },
  { icon: Mail, label: "تواصل", href: "#contact" },
]

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="glass flex items-center gap-2 rounded-full px-4 py-3">
        {navItems.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex h-12 w-12 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
          >
            <item.icon className="h-5 w-5" />
            <span className="pointer-events-none absolute -top-10 rounded-lg bg-card border border-border px-3 py-1.5 text-xs font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100">
              {item.label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.nav>
  )
}
