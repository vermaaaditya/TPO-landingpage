'use client'

import { ArrowRight, FileText } from 'lucide-react'
import { NeonButton } from '@/components/ui/neon-button'
import { DotScreenShader } from '@/components/ui/dot-shader-background'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0">
        <DotScreenShader dotColor="#c8d6e5" bgColor="#ffffff" dotOpacity={0.15} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:items-center lg:gap-16 lg:py-32">
        <motion.div
          className="flex flex-1 flex-col items-start gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-muted-foreground">Now Accepting Industry Partners for 2026</span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Bridging Academic Excellence with Industry Innovation.
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Connecting forward-thinking organizations with the next generation of engineering talent from SIET Panchkula.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <NeonButton variant="solid" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium inline-flex items-center gap-2">
              Partner with Us
              <ArrowRight className="h-4 w-4" />
            </NeonButton>
            <NeonButton variant="ghost" size="lg" neon={false} className="text-muted-foreground hover:text-foreground font-medium inline-flex items-center gap-2 border border-border">
              <FileText className="h-4 w-4" />
              Academic Curriculum
            </NeonButton>
          </div>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary/50 shadow-lg">
            <Image
              src="/images/campus-hero.jpg"
              alt="SIET Panchkula campus with students collaborating on engineering projects"
              width={640}
              height={440}
              className="h-auto w-full object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent p-6">
              <p className="text-sm font-medium text-primary-foreground/90">SIET Panchkula - Shaping Next-Gen Engineers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
