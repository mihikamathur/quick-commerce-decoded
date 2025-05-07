
import { ArrowUp, Layers, Circle, Users, Info, Database, Settings, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

type LeveragePoint = {
  id: number;
  title: string;
  description: string;
  shift?: string;
  bullets?: string[];
  icon: JSX.Element;
  leverageLevel: "High" | "Very High" | "Medium" | "Low";
  color: string;
};

export function LeveragePoints() {
  const leveragePoints: LeveragePoint[] = [
    {
      id: 1,
      title: "Goals of the System",
      description: "Redefine success from fastest delivery to most sustainable and equitable service.",
      shift: "Encourage platforms to prioritize environmental responsibility and fair labor over just speed.",
      icon: <ArrowUp className="h-6 w-6 text-white" />,
      leverageLevel: "High",
      color: "bg-amber-500",
    },
    {
      id: 2,
      title: "Mindset or Paradigm",
      description: "Challenge beliefs like \"faster is always better\" or \"time is more valuable than people.\"",
      shift: "Promote awareness about the cost of convenience—both human and ecological.",
      icon: <Circle className="h-6 w-6 text-white" />,
      leverageLevel: "Very High",
      color: "bg-red-500",
    },
    {
      id: 3,
      title: "Rules and Incentives",
      description: "Modify platform algorithms and compensation models.",
      bullets: [
        "Introduce fair wage guarantees.",
        "Penalize unsustainable practices.",
        "Reward platforms that meet worker welfare/environmental benchmarks."
      ],
      icon: <Settings className="h-6 w-6 text-white" />,
      leverageLevel: "Medium",
      color: "bg-blue-500",
    },
    {
      id: 4,
      title: "Information Flows",
      description: "Increase transparency around:",
      bullets: [
        "Worker conditions",
        "Environmental footprint",
        "Actual delivery times and costs"
      ],
      shift: "Empower consumers to make more conscious choices.",
      icon: <Info className="h-6 w-6 text-white" />,
      leverageLevel: "Medium",
      color: "bg-green-500",
    },
    {
      id: 5,
      title: "Delays and Feedback Loops",
      description: "Adjust the feedback between delivery pressure and fatigue.",
      bullets: [
        "Add mandatory rest policies",
        "Cap order loads",
        "Increase break times"
      ],
      icon: <Handshake className="h-6 w-6 text-white" />,
      leverageLevel: "Medium",
      color: "bg-purple-500",
    },
    {
      id: 6,
      title: "Structure of Material Stocks and Flows",
      description: "Decentralize inventory (e.g., micro-warehousing closer to users) to reduce last-mile pressure.",
      icon: <Layers className="h-6 w-6 text-white" />,
      leverageLevel: "Medium",
      color: "bg-indigo-500",
    },
    {
      id: 7,
      title: "Buffer Sizes",
      description: "Build worker capacity buffers (extra staff or shift flexibility) to absorb demand spikes.",
      icon: <Database className="h-6 w-6 text-white" />,
      leverageLevel: "Low",
      color: "bg-teal-500",
    },
  ];

  return (
    <section className="section bg-commerce-muted/10">
      <div className="container-custom">
        <SectionHeader
          title="System Leverage Points"
          subtitle="Places in the 10-minute delivery system where small shifts can lead to big changes"
          centered
        />
        
        <div className="grid grid-cols-1 gap-6">
          {leveragePoints.map((point) => (
            <Card 
              key={point.id} 
              className="overflow-hidden transform transition-all hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${point.id * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full ${point.color} flex items-center justify-center`}>
                    {point.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold">{point.id}. {point.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        point.leverageLevel === "Very High" 
                          ? "bg-red-100 text-red-700"
                          : point.leverageLevel === "High" 
                            ? "bg-amber-100 text-amber-700"
                            : point.leverageLevel === "Medium"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-700"
                      }`}>
                        {point.leverageLevel} Leverage
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="ml-16">
                  <p className="font-medium mb-2"><span className="text-gray-600">Leverage Point:</span> {point.description}</p>
                  
                  {point.bullets && (
                    <ul className="list-disc pl-5 mb-2 space-y-1">
                      {point.bullets.map((bullet, i) => (
                        <li key={i} className="text-gray-700">{bullet}</li>
                      ))}
                    </ul>
                  )}
                  
                  {point.shift && (
                    <p><span className="font-medium text-gray-600">Shift:</span> {point.shift}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
