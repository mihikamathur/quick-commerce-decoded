
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

interface SystemLevelCardProps {
  level: string;
  title: string;
  description: string;
  examples: string[];
  delay: number;
}

function SystemLevelCard({ level, title, description, examples, delay }: SystemLevelCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Card className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-commerce-primary flex items-center justify-center text-white font-bold">
            {level}
          </div>
          <h4 className="font-semibold text-xl">{title}</h4>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div>
          <h5 className="text-sm font-medium mb-2">Examples in Quick Commerce:</h5>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {examples.map((example, i) => (
              <li key={i} className="text-muted-foreground">{example}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

export function SystemLevels() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionHeader
          title="System Analysis Framework"
          subtitle="Using Donella Meadows' Iceberg Model to analyze Quick Commerce at multiple levels"
          centered
        />
        
        <div className="space-y-6">
          <SystemLevelCard 
            level="1"
            title="Events"
            description="The visible occurrences that we can readily observe - the tip of the iceberg."
            examples={[
              "10-minute delivery promises advertised by companies",
              "Surge in quick commerce apps and dark stores",
              "Investors pouring billions into quick commerce startups"
            ]}
            delay={100}
          />
          
          <SystemLevelCard 
            level="2"
            title="Patterns"
            description="The trends and repeated behaviors that emerge over time when we connect events."
            examples={[
              "Steadily decreasing delivery time expectations (from days to hours to minutes)",
              "Rising consumer dependence on immediate gratification",
              "Increasing pressure on delivery workers and rising accident rates"
            ]}
            delay={300}
          />
          
          <SystemLevelCard 
            level="3"
            title="Systemic Structures"
            description="The underlying systems, policies, and frameworks that generate the patterns."
            examples={[
              "Incentive structures that prioritize speed over worker safety",
              "Urban infrastructure designed around cars and scooters rather than sustainable mobility",
              "Venture capital models that reward growth over sustainability"
            ]}
            delay={500}
          />
          
          <SystemLevelCard 
            level="4"
            title="Mental Models"
            description="The deepest level - the beliefs, assumptions and values that support and create the structures."
            examples={[
              "Belief that faster is always better and more convenient",
              "Assumption that environmental and social costs are externalities",
              "Value placed on immediate convenience over long-term sustainability"
            ]}
            delay={700}
          />
        </div>
      </div>
    </section>
  );
}
