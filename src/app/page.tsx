import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { StudioSection } from "@/components/Studio";
import { ServicesSection } from "@/components/Services";
import { CaseStudiesSection } from "@/components/CaseStudies";
import { TestimonialsSection } from "@/components/Testimonials";
import { CallToAction } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <StudioSection />
        <ServicesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
