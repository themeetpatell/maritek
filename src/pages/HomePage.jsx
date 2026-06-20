import PageMeta from '../components/PageMeta'
import { pageMeta } from '../lib/siteMeta'
import AnimateIn from '../components/AnimateIn'
import Hero from '../components/Hero'
import AboutTeaser from '../components/AboutTeaser'
import Services from '../components/Services'
import SupplyHighlights from '../components/SupplyHighlights'
import WhyChooseUs from '../components/WhyChooseUs'
import Industries from '../components/Industries'
import FAQ from '../components/FAQ'
import BottomCTA from '../components/BottomCTA'

export default function HomePage() {
  return (
    <>
      <PageMeta {...pageMeta.home} path="/" />
      <Hero />
      <AnimateIn><AboutTeaser /></AnimateIn>
      <AnimateIn delay={40}><Services /></AnimateIn>
      <AnimateIn delay={40}><SupplyHighlights /></AnimateIn>
      <AnimateIn delay={40}><WhyChooseUs /></AnimateIn>
      <AnimateIn delay={40}><Industries /></AnimateIn>
      <AnimateIn delay={40}><FAQ /></AnimateIn>
      <BottomCTA />
    </>
  )
}
