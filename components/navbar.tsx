'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Academics', href: '#academics' },
  { label: 'Infrastructure', href: '#infrastructure' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      {/* Top banner matching the reference header */}
      <div className="border-b border-border/30 bg-muted/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          {/* SIET Logo */}
          <div className="flex shrink-0 items-center">
            <Image
              src="/images/siet-logo.png"
              alt="SIET Panchkula Logo"
              width={52}
              height={52}
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Center text */}
          <div className="hidden flex-1 text-center md:block">
            <p className="text-sm font-medium leading-tight text-muted-foreground">
              {'राज्य अभियांत्रिकी एवं प्रौद्योगिकी संस्थान, पंचकुला'}
            </p>
            <h1 className="font-serif text-lg font-bold leading-tight tracking-tight text-foreground lg:text-xl">
              State Institute of Engineering & Technology, Panchkula
            </h1>
            <p className="text-xs text-muted-foreground">
              Approved by AICTE, New Delhi and Affiliated to Kurukshetra University, Kurukshetra
            </p>
          </div>

          {/* Haryana emblem placeholder */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-muted">
            <span className="text-[10px] font-bold text-muted-foreground">HRY</span>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5">
        <Link href="#" className="flex items-center gap-2 md:hidden">
          <span className="text-sm font-bold tracking-tight text-foreground">SIET TPO</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <InteractiveHoverButton
            text="For Recruiters"
            className="w-40 border-primary bg-primary/5 text-sm"
          />
          <InteractiveHoverButton
            text="Student Login"
            className="w-40 border-border text-sm text-muted-foreground"
          />
        </div>

        <button
          className="flex items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4">
            {/* Mobile college name */}
            <div className="border-b border-border pb-3">
              <p className="text-sm font-semibold text-foreground">State Institute of Engineering & Technology</p>
              <p className="text-xs text-muted-foreground">Panchkula, Haryana</p>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <InteractiveHoverButton
                text="For Recruiters"
                className="w-full border-primary bg-primary/5 text-sm"
              />
              <InteractiveHoverButton
                text="Student Login"
                className="w-full border-border text-sm text-muted-foreground"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
