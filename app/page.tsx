import { GlobalStrip } from '@/components/GlobalStrip';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { QuickTryCard } from '@/components/QuickTryCard';
import { HowItWorks } from '@/components/HowItWorks';
import { FeatureGrid } from '@/components/FeatureGrid';
import { RulesEngine } from '@/components/RulesEngine';
import { Pricing } from '@/components/Pricing';
import { Faq } from '@/components/Faq';
import { BottomCta } from '@/components/BottomCta';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <GlobalStrip />
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <QuickTryCard />
        <HowItWorks />
        <FeatureGrid />
        <RulesEngine />
        <Pricing />
        <Faq />
        <BottomCta />
      </main>
      <Footer />
    </>
  );
}
