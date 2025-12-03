import Navigation from "@/components/Navigation";
import ShaderHero from "@/components/ShaderHero";
import { AnimatedHero } from "@/components/ui/animated-hero";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import Metrics from "@/components/Metrics";
import ROICalculator from "@/components/ROICalculator";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import TeamSection from "@/components/TeamSection";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { SplashCursor } from "@/components/ui/splash-cursor";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SplashCursor />
      <ScrollProgressBar />
      <Navigation />
      <ShaderHero />
      <div className="relative -mt-48 bg-gradient-to-b from-transparent via-background/50 to-background pt-48">
        <AnimatedHero />
      </div>
      <Services />
      <SuccessStories />
      <Metrics />
      <ROICalculator />
      <TestimonialsAnimated />
      <TeamSection />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
