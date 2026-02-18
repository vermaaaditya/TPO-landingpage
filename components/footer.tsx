import Link from 'next/link'
import { Mail, Phone, Linkedin, Twitter } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Academics', href: '#academics' },
  { label: 'Infrastructure', href: '#infrastructure' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground">
                <span className="text-sm font-bold text-primary">S</span>
              </div>
              <span className="text-lg font-bold tracking-tight">SIET TPO</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Training & Placement Office, SIET Panchkula. Building industry-ready engineers for tomorrow.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Contact TPO
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:tpo@sfriet.ac.in"
                  className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  <Mail className="h-4 w-4" />
                  tpo@sietpanchkula.ac.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+911234567890"
                  className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4" />
                  +91 123 456 7890
                </a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="text-primary-foreground/50 transition-colors hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/50 transition-colors hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6">
          <p className="text-center text-xs text-primary-foreground/40">
            {'2026 SIET Panchkula. Training & Placement Office. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
