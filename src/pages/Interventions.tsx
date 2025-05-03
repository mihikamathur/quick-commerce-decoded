
import { BehaviorOverTime } from "@/components/interventions/behavior-over-time";
import { Conclusion } from "@/components/interventions/conclusion";
import { ProposedSolutions } from "@/components/interventions/proposed-solutions";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";

const Interventions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ProposedSolutions />
        <BehaviorOverTime />
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
};

export default Interventions;
