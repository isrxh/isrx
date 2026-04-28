"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect } from "react"
import { ArrowDown, Phone, MessageCircle } from "lucide-react"

function InteractiveBackground() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const rotateX = useTransform(y, [0, 1], [2, -2])
  const rotateY = useTransform(x, [0, 1], [-2, 2])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      mouseX.set(clientX / window.innerWidth)
      mouseY.set(clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      style={{ rotateX, rotateY }}
      className="absolute inset-0 grid-pattern opacity-50"
    />
  )
}

export function HeroSection() {
  const phoneNumber = "+9647838866764"
  const whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}`
  const callLink = `tel:${phoneNumber}`

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <InteractiveBackground />
      
      {/* Subtle ambient glow - Gold */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block tracking-[0.3em] text-xs font-light uppercase text-muted-foreground">
            مطور تطبيقات ومواقع
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-10 font-serif text-5xl font-normal leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl"
        >
          نصنع تجارب
          <br />
          <span className="text-primary">
            رقمية مميزة
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-16 max-w-xl text-base font-light leading-relaxed text-muted-foreground md:text-lg"
        >
          تطوير تطبيقات الهاتف والويب بأحدث التقنيات.
          نحول أفكارك إلى حلول رقمية احترافية ومبتكرة.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <motion.a
            href={callLink}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-foreground px-10 py-4 text-sm font-light tracking-wide text-background transition-all"
          >
            <Phone className="h-4 w-4" />
            <span>اتصل الآن</span>
          </motion.a>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.02)" }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 rounded-full border border-foreground/20 px-10 py-4 text-sm font-light tracking-wide text-foreground transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            <span>راسلني واتساب</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
