
import { Book, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

type RuleItem = {
  title: string;
  description: string;
};

type IncentiveItem = {
  title: string;
  description: string;
};

export function RulesIncentives() {
  const ruleItems: RuleItem[] = [
    {
      title: "Algorithms",
      description: "Prioritize speed over quality or sustainability."
    },
    {
      title: "Company Policies",
      description: "Penalize late deliveries, reward fast ones."
    },
    {
      title: "Lack of Labor Protections",
      description: "Gig workers often lack sick leave, insurance, or time-off allowances."
    },
    {
      title: "Urban Zoning & Infrastructure",
      description: "Cities are increasingly structured for high-speed last-mile delivery."
    }
  ];

  const incentiveItems: IncentiveItem[] = [
    {
      title: "Customer Incentives",
      description: "Discounts, cashback, free delivery for fast ordering."
    },
    {
      title: "Worker Incentives",
      description: "Bonuses for meeting delivery speed targets."
    },
    {
      title: "Platform Incentives",
      description: "Higher profit margins due to rapid turnover and increased order volume."
    },
    {
      title: "Investor Incentives",
      description: "Funding tied to aggressive growth and market capture, not sustainability."
    }
  ];

  return (
    <section className="section bg-commerce-muted/5">
      <div className="container-custom">
        <SectionHeader
          title="System Governance & Motivations"
          subtitle="Understanding the formal structures and incentives in quick commerce"
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Rules Section */}
          <Card className="overflow-hidden transform transition-all hover:shadow-lg animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Book className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Rules (Structures & Regulations)</h3>
                  <p className="text-muted-foreground">Formal and informal systems that govern how quick commerce operates</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {ruleItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-lg border border-blue-100 bg-blue-50 hover:bg-blue-100 transition-colors"
                  >
                    <h4 className="font-medium text-blue-700 mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Incentives Section */}
          <Card className="overflow-hidden transform transition-all hover:shadow-lg animate-fade-in animation-delay-150">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Incentives (Motivations & Rewards)</h3>
                  <p className="text-muted-foreground">What pushes individuals and organizations to keep the system going</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {incentiveItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-lg border border-green-100 bg-green-50 hover:bg-green-100 transition-colors"
                  >
                    <h4 className="font-medium text-green-700 mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
