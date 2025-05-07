
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertCircle, 
  Award, 
  Book, 
  Brain, 
  ChevronRight, 
  Clock, 
  Cog, 
  Handshake, 
  Lightbulb 
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type AnalysisItem = {
  title: string;
  description: string;
};

type MentalModelCategory = {
  name: string;
  description: string;
  icon: JSX.Element;
  items: AnalysisItem[];
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

  // Updated mental model categories with the new structure
  const mentalModelCategories: MentalModelCategory[] = [
    {
      name: "Rules (Structures & Regulations)",
      description: "Formal and informal systems that govern how quick commerce operates",
      icon: <Book className="h-6 w-6 text-blue-600" />,
      items: [
        {
          title: "Algorithms prioritize speed over quality",
          description: "Technology systems are designed to optimize for delivery speed rather than quality or sustainability."
        },
        {
          title: "Company policies penalize lateness",
          description: "Internal reward systems punish late deliveries and reward fast ones, regardless of circumstances."
        },
        {
          title: "Lack of labor protections",
          description: "Gig workers often lack sick leave, insurance, or time-off allowances."
        },
        {
          title: "Urban zoning & infrastructure",
          description: "Cities are increasingly structured for high-speed last-mile delivery."
        }
      ]
    },
    {
      name: "Incentives (Motivations & Rewards)",
      description: "What pushes individuals and organizations to keep the system going",
      icon: <Award className="h-6 w-6 text-green-600" />,
      items: [
        {
          title: "Customer incentives",
          description: "Discounts, cashback, and free delivery for fast ordering encourage rapid consumption patterns."
        },
        {
          title: "Worker incentives",
          description: "Bonuses for meeting delivery speed targets create pressure to prioritize speed over safety."
        },
        {
          title: "Platform incentives",
          description: "Higher profit margins due to rapid turnover and increased order volume drive business decisions."
        },
        {
          title: "Investor incentives",
          description: "Funding tied to aggressive growth and market capture, not sustainability."
        }
      ]
    },
    {
      name: "Beliefs (Mental Models)",
      description: "The underlying assumptions that justify or normalize the system",
      icon: <Lightbulb className="h-6 w-6 text-amber-600" />,
      items: [
        {
          title: "Faster is better",
          description: "The belief that speed is inherently desirable in all aspects of commerce and life."
        },
        {
          title: "Time is money",
          description: "The assumption that saving time is always worth the financial, social, or environmental cost."
        },
        {
          title: "Convenience is king",
          description: "The belief that anything that makes life easier is automatically a net positive for society."
        },
        {
          title: "Technology will solve everything",
          description: "Faith that innovation will eventually cancel out any negative effects of current practices."
        }
      ]
    }
  ];

  return (
    <section className="section bg-commerce-muted/10">
      <div className="container-custom">
        <SectionHeader
          title="Event-Pattern-Structure-Mental Models Analysis"
          subtitle="Analyzing quick commerce at multiple levels of systemic depth"
          centered
        />
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <Tabs defaultValue="events" onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto mb-6">
                <TabsTrigger value="events" className="py-3">Events</TabsTrigger>
                <TabsTrigger value="patterns">Patterns</TabsTrigger>
                <TabsTrigger value="structures">Structures</TabsTrigger>
                <TabsTrigger value="mental-models">Mental Models</TabsTrigger>
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
                      className="p-4 rounded-lg border border-blue-100 bg-blue-50 hover:bg-blue-100 transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <h4 className="font-medium text-blue-700 mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-end mt-6">
                  <button 
                    onClick={() => setActiveTab("patterns")} 
                    className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline group"
                  >
                    Next: Patterns <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                      className="p-4 rounded-lg border border-purple-100 bg-purple-50 hover:bg-purple-100 transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <h4 className="font-medium text-purple-700 mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between mt-6">
                  <button 
                    onClick={() => setActiveTab("events")} 
                    className="flex items-center gap-1 text-purple-600 text-sm font-medium hover:underline group"
                  >
                    <ChevronRight className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" /> Back to Events
                  </button>
                  <button 
                    onClick={() => setActiveTab("structures")} 
                    className="flex items-center gap-1 text-purple-600 text-sm font-medium hover:underline group"
                  >
                    Next: Structures <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                      className="p-4 rounded-lg border border-green-100 bg-green-50 hover:bg-green-100 transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <h4 className="font-medium text-green-700 mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between mt-6">
                  <button 
                    onClick={() => setActiveTab("patterns")} 
                    className="flex items-center gap-1 text-green-600 text-sm font-medium hover:underline group"
                  >
                    <ChevronRight className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" /> Back to Patterns
                  </button>
                  <button 
                    onClick={() => setActiveTab("mental-models")} 
                    className="flex items-center gap-1 text-green-600 text-sm font-medium hover:underline group"
                  >
                    Next: Mental Models <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </TabsContent>
              
              <TabsContent value="mental-models" className="animate-fade-in space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-xl animate-pulse">
                    M
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Mental Models</h3>
                    <p className="text-muted-foreground">The deep beliefs, assumptions, and values that create and sustain structures</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {mentalModelCategories.map((category, categoryIndex) => (
                    <div 
                      key={categoryIndex} 
                      className="border border-amber-200 rounded-lg overflow-hidden animate-fade-in"
                      style={{ animationDelay: `${categoryIndex * 150}ms` }}
                    >
                      <div className="bg-amber-50 p-4 flex items-center gap-3">
                        {category.icon}
                        <div>
                          <h3 className="font-medium text-amber-800">{category.name}</h3>
                          <p className="text-sm text-amber-700/70">{category.description}</p>
                        </div>
                      </div>
                      
                      <div className="divide-y divide-amber-100">
                        {category.items.map((item, itemIndex) => (
                          <div 
                            key={itemIndex} 
                            className="p-4 hover:bg-amber-50/50 transition-colors animate-fade-in"
                            style={{ animationDelay: `${(categoryIndex * 150) + (itemIndex * 100)}ms` }}
                          >
                            <h4 className="font-medium text-amber-700 mb-1">{item.title}</h4>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 mt-4 bg-blue-50 border border-blue-100 rounded-lg animate-fade-in animate-pulse">
                  <h4 className="font-medium text-blue-700 mb-2 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    System Leverage Point
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Transforming mental models offers the highest leverage for system change. By shifting our collective beliefs about speed, 
                    convenience, and what constitutes progress, we can reshape structures, alter patterns, and create new events.
                  </p>
                </div>
                
                <div className="flex justify-start mt-6">
                  <button 
                    onClick={() => setActiveTab("structures")} 
                    className="flex items-center gap-1 text-amber-600 text-sm font-medium hover:underline group"
                  >
                    <ChevronRight className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" /> Back to Structures
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
