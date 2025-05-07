
import { SystemArchetypes } from "@/components/system-analysis/archetypes";
import { CausalLoopDiagram } from "@/components/system-analysis/causal-loop-diagram";
import { EventPatternStructure } from "@/components/system-analysis/event-pattern-structure";
import { StockFlowModel } from "@/components/system-analysis/stock-flow-model";
import { SystemLevels } from "@/components/system-analysis/system-levels";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";

const SystemAnalysis = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <CausalLoopDiagram />
        <StockFlowModel />
        <EventPatternStructure />
        <SystemLevels />
        <SystemArchetypes />
      </main>
      <Footer />
    </div>
  );
};

export default SystemAnalysis;
