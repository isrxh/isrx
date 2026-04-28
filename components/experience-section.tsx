"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    year: "2024 — الآن",
    title: "مطور رئيسي",
    company: "حمزه حساب Studio",
    description: "قيادة تطوير تطبيقات الهاتف والويب للعملاء. تصميم حلول قابلة للتوسع تخدم آلاف المستخدمين.",
  },
  {
    year: "2022 — 2024",
    title: "مطور تطبيقات أول",
    company: "شركة الابتكار التقني",
    description: "قيادة فريق تطوير التطبيقات وتسليم أكثر من 10 تطبيقات للسوق. تحسين عمليات النشر بنسبة 60%.",
  },
  {
    year: "2020 — 2022",
    title: "مطور متكامل",
    company: "حلول رقمية",
    description: "بناء حلول متكاملة لمنصات التجارة الإلكترونية. تحسين أداء قواعد البيانات بنسبة 40%.",
  },
  {
    year: "2018 — 2020",
    title: "مطور مبتدئ",
    company: "ستارت أب لابز",
    description: "بداية رحلتي في بناء المنتجات الرقمية للشركات الناشئة. تعلم أهمية التطوير السريع والتغذية الراجعة.",
  },
]

function ExperienceItem({ 
  experience, 
  index 
}: { 
  experience: typeof experiences[0]
  index: number 
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1])
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 === 0 ? 50 : -50, 0, 0])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, x }}
      className={`flex gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {/* Content */}
      <div className={`flex-1 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6"
        >
          <span className="mb-2 inline-block text-sm font-medium text-primary">
            {experience.year}
          </span>
          <h3 className="mb-1 text-xl font-bold text-foreground">
            {experience.title}
          </h3>
          <p className="mb-4 text-muted-foreground">{experience.company}</p>
          <p className="text-sm text-muted-foreground">
            {experience.description}
          </p>
        </motion.div>
      </div>

      {/* Timeline dot - hidden on mobile */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-4 w-4 rounded-full bg-primary glow"
        >
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
        </motion.div>
      </div>

      {/* Spacer for alignment */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  )
}

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="experience" className="relative py-32 px-6" ref={containerRef}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            الخبرات
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            رحلتي في عالم التطوير الرقمي
          </p>
        </motion.div>

        {/* Timeline line */}
        <div className="absolute left-1/2 top-48 hidden md:block h-[calc(100%-16rem)] w-px -translate-x-1/2 bg-border">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-primary to-primary/0"
          />
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceItem key={experience.year} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
