
import { SystemArchetypes } from "@/components/system-analysis/archetypes";
import { CausalLoopDiagram } from "@/components/system-analysis/causal-loop-diagram";
import { EventPatternStructure } from "@/components/system-analysis/event-pattern-structure";
import { LeveragePoints } from "@/components/system-analysis/leverage-points";
import { RulesIncentives } from "@/components/system-analysis/rules-incentives";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";

const SystemAnalysis = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <CausalLoopDiagram />
        <EventPatternStructure />
        <RulesIncentives />
        <LeveragePoints />
        <SystemArchetypes />
      </main>
      <Footer />
    </div>
  );
};

export default SystemAnalysis;
