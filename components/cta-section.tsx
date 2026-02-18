'use client'

import { Download } from 'lucide-react'
import { NeonButton } from '@/components/ui/neon-button'
import { motion } from 'framer-motion'

export function CtaSection() {
  return (
    <section className="bg-background py-24">
      <motion.div
        className="mx-auto max-w-2xl px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Ready to hire the future?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Download our placement brochure for detailed program information, student profiles, and partnership opportunities.
        </p>
        <div className="mt-8">
          <NeonButton variant="solid" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium inline-flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download Placement Brochure
          </NeonButton>
        </div>
      </motion.div>
    </section>
  )
}
