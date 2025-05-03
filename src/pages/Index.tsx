
import { HeroSection } from "@/components/home/hero-section";
import { KeyQuestions } from "@/components/home/key-questions";
import { QuickCommerceIntro } from "@/components/home/quick-commerce-intro";
import { StatsHighlight } from "@/components/home/stats-highlight";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <QuickCommerceIntro />
        <StatsHighlight />
        <KeyQuestions />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
