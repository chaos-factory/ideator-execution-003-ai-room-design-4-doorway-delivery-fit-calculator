import { GlobalStrip } from '@/components/GlobalStrip';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { QuickTryCard } from '@/components/QuickTryCard';
import { HowItWorks } from '@/components/HowItWorks';
import { FeatureGrid } from '@/components/FeatureGrid';
import { RulesEngine } from '@/components/RulesEngine';
import { PdfPreview } from '@/components/PdfPreview';
import { Pricing } from '@/components/Pricing';
import { PrivacyLiability } from '@/components/PrivacyLiability';
import { MoversBuildingsCta } from '@/components/MoversBuildingsCta';
import { EduGuide } from '@/components/EduGuide';
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
        <PdfPreview />
        <Pricing />
        <PrivacyLiability />
        <MoversBuildingsCta />
        <EduGuide />
        <Faq />
        <BottomCta />
      </main>
      <Footer />
    </>
  );
}
