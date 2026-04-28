"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    title: "تطبيق عقاري",
    description: "منصة شاملة لعرض العقارات مع خاصية الواقع المعزز والدردشة المباشرة وفلاتر بحث متقدمة.",
    color: "from-yellow-500/20 to-amber-500/20",
    size: "large",
  },
  {
    title: "متجر إلكتروني",
    description: "تطبيق تسوق متكامل مع نظام دفع آمن وتتبع الطلبات.",
    color: "from-orange-500/20 to-yellow-500/20",
    size: "medium",
  },
  {
    title: "منصة تعليمية",
    description: "منصة تفاعلية للتعلم عن بعد مع دروس مباشرة ومتابعة التقدم.",
    color: "from-amber-500/20 to-yellow-500/20",
    size: "medium",
  },
  {
    title: "تطبيق توصيل",
    description: "تطبيق توصيل مع تتبع مباشر للطلبات ونظام تقييم.",
    color: "from-yellow-400/20 to-orange-400/20",
    size: "small",
  },
  {
    title: "تطبيق صحي",
    description: "تطبيق متابعة الصحة مع ربط الأجهزة الذكية.",
    color: "from-amber-400/20 to-yellow-400/20",
    size: "small",
  },
]

function ProjectCard({ 
  project, 
  index 
}: { 
  project: typeof projects[0]
  index: number 
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    x.set(mouseX / width - 0.5)
    y.set(mouseY / height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative overflow-hidden rounded-3xl p-6 md:p-8 bg-amber-400 border border-amber-300 ${
        project.size === "large" ? "md:col-span-2 md:row-span-2" : 
        project.size === "medium" ? "md:col-span-1 md:row-span-2" : ""
      }`}
    >
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-amber-300 to-yellow-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
      
      {/* Glow border on hover */}
      <motion.div 
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: "0 8px 30px rgba(245, 158, 11, 0.4)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col">
        <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
          {project.title}
        </h3>

        <p className="flex-grow text-gray-800">
          {project.description}
        </p>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            أعمالي المميزة
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            مجموعة من المشاريع التي تعكس خبرتي في تطوير التطبيقات والمواقع
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 md:grid-rows-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
