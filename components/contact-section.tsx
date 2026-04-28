"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle } from "lucide-react"

const InstagramIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

export function ContactSection() {
  const phoneNumber = "+9647838866764"
  const whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}`
  const callLink = `tel:${phoneNumber}`
  const instagramLink = "https://instagram.com/isrx"

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            تواصل معي
          </span>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
            هل لديك مشروع
            <br />
            <span className="text-primary">تريد تنفيذه؟</span>
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-lg text-muted-foreground">
            أنا مستعد لمساعدتك في تحويل أفكارك إلى واقع.
            تواصل معي الآن ودعنا نبدأ العمل على مشروعك.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href={callLink}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-primary px-10 py-5 text-lg font-semibold text-primary-foreground transition-all"
          >
            <Phone className="h-5 w-5" />
            <span>اتصل الآن</span>
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(234, 179, 8, 0.3)",
                  "0 0 40px rgba(234, 179, 8, 0.5)",
                  "0 0 20px rgba(234, 179, 8, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.a>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 rounded-full border border-border bg-card px-10 py-5 text-lg font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            <MessageCircle className="h-5 w-5" />
            <span>راسلني واتساب</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="glass flex h-16 w-16 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary"
          >
            <InstagramIcon />
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-4 text-sm text-muted-foreground"
        >
          @isrx
        </motion.p>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 border-t border-border pt-8"
        >
          <p className="text-sm text-muted-foreground">
            © 2024 حمزه حساب. جميع الحقوق محفوظة.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
