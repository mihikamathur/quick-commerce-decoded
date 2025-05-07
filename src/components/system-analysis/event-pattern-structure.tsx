
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type AnalysisItem = {
  title: string;
  description: string;
};

export function EventPatternStructure() {
  const [activeTab, setActiveTab] = useState("events");

  const eventItems: AnalysisItem[] = [
    {
      title: "Surge in 10-minute delivery services in urban areas",
      description: "Rapid expansion of quick commerce platforms promising ultra-fast delivery in densely populated cities."
    },
    {
      title: "Frequent traffic congestion caused by delivery riders",
      description: "Increased number of two-wheelers and vans on roads leads to urban traffic delays."
    },
    {
      title: "Reports of rider injuries and exhaustion",
      description: "Accidents and fatigue become common due to high-speed targets and demanding shifts."
    },
    {
      title: "Increase in packaging waste",
      description: "Small orders require individual packaging, generating more waste than bulk deliveries."
    },
    {
      title: "Customer complaints when deliveries are late",
      description: "Consumer expectations rise; even minor delays trigger dissatisfaction and negative reviews."
    }
  ];

  const patternItems: AnalysisItem[] = [
    {
      title: "Growing consumer dependence on ultra-fast delivery",
      description: "People begin relying on these services for routine purchases, reducing traditional shopping."
    },
    {
      title: "High turnover among delivery workers",
      description: "Riders frequently leave due to burnout, low pay, or lack of job satisfaction."
    },
    {
      title: "Increasing competition between platforms to deliver faster",
      description: "Companies constantly lower delivery time to outpace rivals, worsening labor and operational pressures."
    },
    {
      title: "Continuous rise in environmental footprint from logistics",
      description: "Emissions, energy usage, and resource consumption grow due to speed-focused operations."
    },
    {
      title: "Shrinking delivery windows → rising rider stress",
      description: "Unrealistic delivery timelines place mental and physical strain on riders."
    }
  ];

  const structureItems: AnalysisItem[] = [
    {
      title: "Incentive structures that reward speed over safety",
      description: "Riders are paid or rated based on quick deliveries, pushing them to take risks."
    },
    {
      title: "Lack of labour protections for platform workers",
      description: "Delivery personnel are often classified as independent contractors, missing benefits or legal safeguards."
    },
    {
      title: "Profit-driven business models prioritizing customer acquisition",
      description: "Companies focus on growth and user retention at the expense of ethical or sustainable operations."
    },
    {
      title: "Absence of sustainable urban logistics policies",
      description: "Regulatory gaps mean no checks on emissions, traffic congestion, or safety in delivery operations."
    },
    {
      title: "Consumer culture promoting instant gratification",
      description: "Shoppers value convenience and speed over environmental and social responsibility."
    }
  ];

  return (
    <section className="section bg-commerce-muted/10">
      <div className="container-custom">
        <SectionHeader
          title="Event-Pattern-Structure Analysis"
          subtitle="Analyzing quick commerce at multiple levels of systemic depth"
          centered
        />
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <Tabs defaultValue="events" onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto mb-6">
                <TabsTrigger value="events" className="py-3">Events</TabsTrigger>
                <TabsTrigger value="patterns">Patterns</TabsTrigger>
                <TabsTrigger value="structures">Structures</TabsTrigger>
              </TabsList>
              
              <TabsContent value="events" className="animate-fade-in space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                    E
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Events</h3>
                    <p className="text-muted-foreground">The visible occurrences that we can readily observe</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {eventItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="p-4 rounded-lg border border-blue-100 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <h4 className="font-medium text-blue-700 mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-end mt-6">
                  <button 
                    onClick={() => setActiveTab("patterns")} 
                    className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline"
                  >
                    Next: Patterns <span className="ml-1">→</span>
                  </button>
                </div>
              </TabsContent>
              
              <TabsContent value="patterns" className="animate-fade-in space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xl">
                    P
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Patterns</h3>
                    <p className="text-muted-foreground">The trends and repeated behaviors that emerge over time</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {patternItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="p-4 rounded-lg border border-purple-100 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <h4 className="font-medium text-purple-700 mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between mt-6">
                  <button 
                    onClick={() => setActiveTab("events")} 
                    className="flex items-center gap-1 text-purple-600 text-sm font-medium hover:underline"
                  >
                    <span className="mr-1">←</span> Back to Events
                  </button>
                  <button 
                    onClick={() => setActiveTab("structures")} 
                    className="flex items-center gap-1 text-purple-600 text-sm font-medium hover:underline"
                  >
                    Next: Structures <span className="ml-1">→</span>
                  </button>
                </div>
              </TabsContent>
              
              <TabsContent value="structures" className="animate-fade-in space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl">
                    S
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Structures</h3>
                    <p className="text-muted-foreground">The underlying systems, policies, and frameworks that generate the patterns</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {structureItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="p-4 rounded-lg border border-green-100 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <h4 className="font-medium text-green-700 mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 mt-4 bg-amber-50 border border-amber-100 rounded-lg">
                  <h4 className="font-medium text-amber-700 mb-2">Key Insight</h4>
                  <p className="text-muted-foreground text-sm">
                    Most solutions target events or symptoms, but real change needs structural transformation—through
                    policy, incentives, and consumer mindset shifts.
                  </p>
                </div>
                
                <div className="flex justify-start mt-6">
                  <button 
                    onClick={() => setActiveTab("patterns")} 
                    className="flex items-center gap-1 text-green-600 text-sm font-medium hover:underline"
                  >
                    <span className="mr-1">←</span> Back to Patterns
                  </button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
