import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { SkillsMarquee } from '@/components/skills-marquee'
import { WhyRecruitSection } from '@/components/why-recruit-section'
import { InfrastructureSection } from '@/components/infrastructure-section'
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SkillsMarquee />
      <WhyRecruitSection />
      <InfrastructureSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
