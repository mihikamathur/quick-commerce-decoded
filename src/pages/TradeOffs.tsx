
import { EnvironmentalImpact } from "@/components/trade-offs/environmental-impact";
import { LaborConditions } from "@/components/trade-offs/labor-conditions";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";

const TradeOffs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <LaborConditions />
        <EnvironmentalImpact />
      </main>
      <Footer />
    </div>
  );
};

export default TradeOffs;
