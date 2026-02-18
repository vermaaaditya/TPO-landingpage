'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const facilities = [
  {
    title: 'IoT Lab',
    caption: 'Smart sensors, microcontrollers, and embedded systems.',
    image: '/images/iot-lab.jpg',
  },
  {
    title: 'Seminar Hall',
    caption: 'Industry talks and tech workshops.',
    image: '/images/seminar-hall.jpg',
  },
  {
    title: 'Project Workshop',
    caption: 'Collaborative maker space for prototyping.',
    image: '/images/project-workshop.jpg',
  },
  {
    title: 'Campus Library',
    caption: 'Digital and print resources for research.',
    image: '/images/campus-library.jpg',
  },
]

export function InfrastructureSection() {
  return (
    <section id="infrastructure" className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Campus Facilities
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            A Hub for Innovation.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-foreground">{facility.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{facility.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
