
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Timer, ShieldX, HandCoins } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

function StatCard({ icon, title, value, description }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <div className="p-2 rounded-lg bg-commerce-muted text-commerce-primary">
            {icon}
          </div>
          <div className="text-2xl font-bold text-commerce-primary">{value}</div>
        </div>
        <CardTitle className="text-lg mt-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export function LaborConditions() {
  const [selectedArea, setSelectedArea] = useState("safety");

  return (
    <section className="section bg-gradient-to-b from-white to-commerce-muted/20">
      <div className="container-custom">
        <SectionHeader
          title="Labor Conditions"
          subtitle="The human cost of the 10-minute delivery promise"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard 
            icon={<Users className="h-5 w-5" />}
            title="Gig Workers"
            value="85%"
            description="Percentage of quick commerce delivery personnel employed as gig workers without benefits"
          />
          <StatCard 
            icon={<Timer className="h-5 w-5" />}
            title="Time Pressure"
            value="92%"
            description="Percentage of delivery workers reporting high or very high time pressure"
          />
          <StatCard 
            icon={<ShieldX className="h-5 w-5" />}
            title="Safety Issues"
            value="3.8x"
            description="Higher accident rate for 10-minute delivery workers vs. standard delivery"
          />
          <StatCard 
            icon={<HandCoins className="h-5 w-5" />}
            title="Wage Volatility"
            value="47%"
            description="Week-to-week income fluctuation reported by quick commerce workers"
          />
        </div>
        
        <Card>
          <CardContent className="p-6">
            <Tabs value={selectedArea} onValueChange={setSelectedArea} className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto">
                <TabsTrigger value="safety">Safety Concerns</TabsTrigger>
                <TabsTrigger value="compensation">Compensation</TabsTrigger>
                <TabsTrigger value="workload">Workload & Hours</TabsTrigger>
                <TabsTrigger value="job-security">Job Security</TabsTrigger>
              </TabsList>
              
              <TabsContent value="safety" className="mt-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Safety Risks</h4>
                    <p className="text-muted-foreground mb-4">
                      The need to meet strict 10-minute delivery windows creates significant safety hazards for delivery personnel:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-red-100 p-1 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        </div>
                        <span className="text-muted-foreground">Traffic violations including speeding and ignoring signals to meet deadlines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-red-100 p-1 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        </div>
                        <span className="text-muted-foreground">Pressure to drive in hazardous weather conditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-red-100 p-1 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        </div>
                        <span className="text-muted-foreground">Inadequate rest between deliveries leading to fatigue</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-red-100 p-1 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        </div>
                        <span className="text-muted-foreground">Limited or no safety training provided</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-commerce-muted/30 p-6 rounded-lg">
                    <h5 className="font-medium mb-3">Worker Testimonial</h5>
                    <blockquote className="border-l-4 border-commerce-primary pl-4 italic text-muted-foreground">
                      "I've had three near-accidents in a single day trying to meet delivery windows. The app is constantly telling me I'm falling behind schedule. It doesn't account for traffic lights, congestion, or even rain. The stress is unbearable sometimes."
                      <footer className="text-sm mt-2 not-italic">— Anonymous delivery worker, Mumbai</footer>
                    </blockquote>
                    
                    <div className="mt-6">
                      <h5 className="font-medium mb-2">Research Finding</h5>
                      <p className="text-sm text-muted-foreground">
                        According to a 2023 study by the Urban Mobility Research Institute, quick commerce delivery workers are 3.8x more likely to be involved in traffic incidents compared to standard e-commerce delivery personnel, with 72% of surveyed workers reporting having run red lights to meet delivery deadlines.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="compensation" className="mt-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Compensation Issues</h4>
                    <p className="text-muted-foreground mb-4">
                      While quick commerce promises rapid delivery, the economic model often creates problematic compensation structures:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-orange-100 p-1 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                        </div>
                        <span className="text-muted-foreground">Incentive structures that only reward speed, not safety</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-orange-100 p-1 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                        </div>
                        <span className="text-muted-foreground">No compensation for waiting time between orders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-orange-100 p-1 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                        </div>
                        <span className="text-muted-foreground">Workers bearing costs of vehicle maintenance and fuel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-orange-100 p-1 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                        </div>
                        <span className="text-muted-foreground">Algorithmic penalties for missed time windows regardless of circumstances</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-commerce-muted/30 p-6 rounded-lg">
                    <h5 className="font-medium mb-3">Compensation Data</h5>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Base Pay</span>
                          <span className="font-medium">20-30% of earnings</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-commerce-primary h-2 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Speed Incentives</span>
                          <span className="font-medium">40-50% of earnings</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-commerce-primary h-2 rounded-full" style={{ width: "45%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Tips</span>
                          <span className="font-medium">15-25% of earnings</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-commerce-primary h-2 rounded-full" style={{ width: "20%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Special Bonuses</span>
                          <span className="font-medium">5-10% of earnings</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-commerce-primary h-2 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      Source: Gig Economy Workers Association Survey, 2023
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="workload" className="mt-6 animate-fade-in">
                {/* Workload & Hours content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Workload Challenges</h4>
                    <p className="text-muted-foreground mb-4">
                      The quick commerce model creates intense pressure on workers to maintain unrealistic delivery schedules:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-blue-100 p-1 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        </div>
                        <span className="text-muted-foreground">Workers routinely handling 20-25 deliveries during a 6-hour shift</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-blue-100 p-1 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        </div>
                        <span className="text-muted-foreground">No scheduled breaks, often working 8+ hours continuously</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-blue-100 p-1 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        </div>
                        <span className="text-muted-foreground">High physical demands - carrying heavy packages, climbing stairs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-blue-100 p-1 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        </div>
                        <span className="text-muted-foreground">Continuous monitoring via apps that track every moment</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-commerce-muted/30 p-6 rounded-lg">
                    <h5 className="font-medium mb-3">Average Daily Schedule</h5>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="text-xs font-medium w-16">6:00 AM</div>
                        <div className="flex-1 bg-commerce-primary/20 rounded p-2 text-xs">
                          Log in to app, begin shift
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-xs font-medium w-16">6:15 AM</div>
                        <div className="flex-1 bg-commerce-primary/20 rounded p-2 text-xs">
                          First delivery assigned
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-xs font-medium w-16">6:15-12:00</div>
                        <div className="flex-1 bg-commerce-primary/40 rounded p-2 text-xs">
                          Continuous deliveries (15-20), no scheduled breaks
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-xs font-medium w-16">12:00-12:15</div>
                        <div className="flex-1 bg-gray-200 rounded p-2 text-xs">
                          Self-initiated break (if possible)
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-xs font-medium w-16">12:15-2:00</div>
                        <div className="flex-1 bg-commerce-primary/40 rounded p-2 text-xs">
                          Additional deliveries (5-10)
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-xs font-medium w-16">2:00 PM</div>
                        <div className="flex-1 bg-commerce-primary/20 rounded p-2 text-xs">
                          End shift (if order volume allows)
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      Based on interviews with 50 quick commerce delivery workers in urban areas
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="job-security" className="mt-6 animate-fade-in">
                {/* Job Security content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Job Security Issues</h4>
                    <p className="text-muted-foreground mb-4">
                      The gig-based quick commerce model creates significant job insecurity for workers:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                        </div>
                        <span className="text-muted-foreground">No guaranteed hours or income stability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                        </div>
                        <span className="text-muted-foreground">Algorithm-based deactivation with little recourse or explanation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                        </div>
                        <span className="text-muted-foreground">No unemployment benefits or severance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                        </div>
                        <span className="text-muted-foreground">Lack of career progression or skill development</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-commerce-muted/30 p-6 rounded-lg">
                    <h5 className="font-medium mb-3">Worker Retention Data</h5>
                    <div className="mb-4">
                      <h6 className="text-sm font-medium mb-2">Average Tenure of Quick Commerce Workers</h6>
                      <div className="w-full h-10 bg-gray-100 rounded-lg relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-1/4 h-full bg-commerce-primary"></div>
                          <div className="w-1/4 h-full bg-commerce-secondary"></div>
                          <div className="w-1/3 h-full bg-commerce-accent"></div>
                          <div className="w-1/6 h-full bg-gray-300"></div>
                        </div>
                        <div className="absolute inset-0 flex justify-between px-2 items-center text-xs text-white font-medium">
                          <span className="w-1/4 text-center">3 months<br />27%</span>
                          <span className="w-1/4 text-center">6 months<br />24%</span>
                          <span className="w-1/3 text-center">12 months<br />33%</span>
                          <span className="w-1/6 text-center text-gray-700">18+ months<br />16%</span>
                        </div>
                      </div>
                    </div>
                    
                    <h6 className="text-sm font-medium mb-2">Top Reasons for Leaving:</h6>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      <li>1. Unrealistic delivery expectations (38%)</li>
                      <li>2. Income instability (27%)</li>
                      <li>3. Safety concerns (18%)</li>
                      <li>4. Algorithmic deactivation (12%)</li>
                      <li>5. Found better employment (5%)</li>
                    </ul>
                    <p className="text-xs text-muted-foreground mt-4">
                      Source: Labor Market Research Institute, 2023
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
