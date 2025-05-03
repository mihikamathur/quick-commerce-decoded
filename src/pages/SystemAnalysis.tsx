
import { SystemArchetypes } from "@/components/system-analysis/archetypes";
import { CausalLoopDiagram } from "@/components/system-analysis/causal-loop-diagram";
import { SystemLevels } from "@/components/system-analysis/system-levels";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";

const SystemAnalysis = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <CausalLoopDiagram />
        <SystemLevels />
        <SystemArchetypes />
      </main>
      <Footer />
    </div>
  );
};

export default SystemAnalysis;
