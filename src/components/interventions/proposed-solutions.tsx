
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeader } from "@/components/ui/section-header";

export function ProposedSolutions() {
  return (
    <section className="section bg-gradient-to-b from-white to-commerce-muted/20">
      <div className="container-custom">
        <SectionHeader
          title="Proposed Interventions"
          subtitle="Balancing convenience with sustainability and equity"
          centered
        />
        
        <Tabs defaultValue="tech" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto">
            <TabsTrigger value="tech" className="py-3">Technological</TabsTrigger>
            <TabsTrigger value="policy">Policy</TabsTrigger>
            <TabsTrigger value="business">Business Models</TabsTrigger>
            <TabsTrigger value="consumer">Consumer Change</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tech" className="mt-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Technological Solutions</CardTitle>
                <CardDescription>
                  Leveraging innovation to make quick commerce more sustainable
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-2">Smart Batching Algorithms</h4>
                      <p className="text-muted-foreground">
                        Advanced algorithmic approaches can group nearby deliveries without significantly compromising delivery times:
                      </p>
                      <ul className="mt-2 space-y-2">
                        <li className="flex gap-2">
                          <div className="rounded-full bg-blue-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-blue-600 text-xs font-medium">1</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Machine learning models that predict order patterns to optimize batch creation
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <div className="rounded-full bg-blue-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-blue-600 text-xs font-medium">2</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Dynamic routing that adjusts to real-time traffic and order volume
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <div className="rounded-full bg-blue-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-blue-600 text-xs font-medium">3</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Partial route optimization - dedicating some capacity to batching while maintaining rapid service
                          </p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">Electric Mobility Network</h4>
                      <p className="text-muted-foreground">
                        Transition delivery fleets to electric vehicles to reduce emissions:
                      </p>
                      <ul className="mt-2 space-y-2">
                        <li className="flex gap-2">
                          <div className="rounded-full bg-blue-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-blue-600 text-xs font-medium">1</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Electric cargo bikes for short-distance urban deliveries
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <div className="rounded-full bg-blue-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-blue-600 text-xs font-medium">2</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Battery-swapping infrastructure at dark stores to reduce charging time
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <div className="rounded-full bg-blue-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-blue-600 text-xs font-medium">3</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Electric scooters and small EVs for medium-distance deliveries
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-2">Sustainable Packaging Tech</h4>
                      <p className="text-muted-foreground">
                        Innovations in packaging to reduce environmental impact:
                      </p>
                      <ul className="mt-2 space-y-2">
                        <li className="flex gap-2">
                          <div className="rounded-full bg-blue-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-blue-600 text-xs font-medium">1</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Biodegradable packaging materials derived from agricultural waste
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <div className="rounded-full bg-blue-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-blue-600 text-xs font-medium">2</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Reusable container systems with QR-code tracking for return
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <div className="rounded-full bg-blue-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-blue-600 text-xs font-medium">3</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            AI-optimized packaging that adjusts size and material based on item requirements
                          </p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">Worker Support Technologies</h4>
                      <p className="text-muted-foreground">
                        Tech solutions to improve labor conditions:
                      </p>
                      <ul className="mt-2 space-y-2">
                        <li className="flex gap-2">
                          <div className="rounded-full bg-blue-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-blue-600 text-xs font-medium">1</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            AI-powered scheduling optimizers that account for worker preferences and fatigue
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <div className="rounded-full bg-blue-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-blue-600 text-xs font-medium">2</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Safety-focused navigation systems that prioritize low-risk routes
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <div className="rounded-full bg-blue-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-blue-600 text-xs font-medium">3</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Wearable tech for monitoring rest periods and environmental conditions
                          </p>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-4">
                      <h5 className="font-medium text-sm mb-2">Implementation Example</h5>
                      <p className="text-xs text-muted-foreground">
                        Zapp in London has implemented electric mopeds and cargo bikes for 100% of their delivery fleet, reducing per-delivery emissions by 67% compared to ICE vehicles while maintaining their 20-minute delivery promise.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="policy" className="mt-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Policy Interventions</CardTitle>
                <CardDescription>
                  Regulatory approaches to ensure quick commerce benefits society while minimizing harms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-2">Labor Protection Framework</h4>
                      <p className="text-muted-foreground mb-3">
                        Policies to protect delivery workers from exploitation:
                      </p>
                      <div className="bg-commerce-muted/20 p-4 rounded-lg">
                        <ul className="space-y-2">
                          <li className="flex gap-2">
                            <div className="rounded-full bg-purple-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-purple-600 text-xs font-medium">1</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Minimum Earnings Standards</p>
                              <p className="text-xs text-muted-foreground">
                                Guaranteed minimum hourly compensation regardless of order volume
                              </p>
                            </div>
                          </li>
                          <li className="flex gap-2">
                            <div className="rounded-full bg-purple-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-purple-600 text-xs font-medium">2</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Rest Period Requirements</p>
                              <p className="text-xs text-muted-foreground">
                                Mandatory breaks after specific working hours or numbers of deliveries
                              </p>
                            </div>
                          </li>
                          <li className="flex gap-2">
                            <div className="rounded-full bg-purple-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-purple-600 text-xs font-medium">3</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Algorithm Transparency</p>
                              <p className="text-xs text-muted-foreground">
                                Requiring companies to disclose how their algorithms assign work and calculate pay
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">Environmental Performance Standards</h4>
                      <p className="text-muted-foreground mb-3">
                        Regulating the environmental impact of quick commerce:
                      </p>
                      <div className="bg-commerce-muted/20 p-4 rounded-lg">
                        <ul className="space-y-2">
                          <li className="flex gap-2">
                            <div className="rounded-full bg-purple-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-purple-600 text-xs font-medium">1</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Emissions Caps</p>
                              <p className="text-xs text-muted-foreground">
                                Setting maximum CO₂ emissions per delivery, incentivizing efficient routing
                              </p>
                            </div>
                          </li>
                          <li className="flex gap-2">
                            <div className="rounded-full bg-purple-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-purple-600 text-xs font-medium">2</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Packaging Waste Reduction Targets</p>
                              <p className="text-xs text-muted-foreground">
                                Requiring incremental reductions in packaging materials per delivery
                              </p>
                            </div>
                          </li>
                          <li className="flex gap-2">
                            <div className="rounded-full bg-purple-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-purple-600 text-xs font-medium">3</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Zero-Emission Zone Requirements</p>
                              <p className="text-xs text-muted-foreground">
                                Mandating electric or human-powered transportation in dense urban areas
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-2">Urban Planning & Management</h4>
                      <p className="text-muted-foreground mb-3">
                        Integrating quick commerce into sustainable city planning:
                      </p>
                      <div className="bg-commerce-muted/20 p-4 rounded-lg">
                        <ul className="space-y-2">
                          <li className="flex gap-2">
                            <div className="rounded-full bg-purple-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-purple-600 text-xs font-medium">1</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Dark Store Zoning Regulations</p>
                              <p className="text-xs text-muted-foreground">
                                Creating specific zoning designations for mini-fulfillment centers
                              </p>
                            </div>
                          </li>
                          <li className="flex gap-2">
                            <div className="rounded-full bg-purple-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-purple-600 text-xs font-medium">2</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Delivery Hub Infrastructure</p>
                              <p className="text-xs text-muted-foreground">
                                Designating specific loading/unloading zones for delivery vehicles
                              </p>
                            </div>
                          </li>
                          <li className="flex gap-2">
                            <div className="rounded-full bg-purple-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-purple-600 text-xs font-medium">3</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Delivery Timing Restrictions</p>
                              <p className="text-xs text-muted-foreground">
                                Limiting high-volume deliveries during peak traffic hours
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">Transparency Requirements</h4>
                      <p className="text-muted-foreground mb-3">
                        Mandating disclosure of key impact metrics:
                      </p>
                      <div className="bg-commerce-muted/20 p-4 rounded-lg">
                        <ul className="space-y-2">
                          <li className="flex gap-2">
                            <div className="rounded-full bg-purple-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-purple-600 text-xs font-medium">1</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Environmental Impact Labeling</p>
                              <p className="text-xs text-muted-foreground">
                                Requiring CO₂ emissions information at checkout for delivery options
                              </p>
                            </div>
                          </li>
                          <li className="flex gap-2">
                            <div className="rounded-full bg-purple-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-purple-600 text-xs font-medium">2</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Labor Condition Reporting</p>
                              <p className="text-xs text-muted-foreground">
                                Annual public disclosure of worker compensation, safety incidents, and turnover
                              </p>
                            </div>
                          </li>
                          <li className="flex gap-2">
                            <div className="rounded-full bg-purple-100 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-purple-600 text-xs font-medium">3</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium">True Cost Calculation</p>
                              <p className="text-xs text-muted-foreground">
                                Standardized methodology for calculating externalized costs of quick delivery
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                      <h5 className="font-medium text-sm mb-2">Policy Case Study</h5>
                      <p className="text-xs text-muted-foreground">
                        New York City's 2023 "Delivery Worker Protection Act" established minimum wage requirements ($17.96/hour) for app-based delivery workers and mandated transparency in how algorithms determine delivery assignments and compensation. Since implementation, average worker earnings have increased by 33%, with only a 12% increase in delivery costs to consumers.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="business" className="mt-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Alternative Business Models</CardTitle>
                <CardDescription>
                  Rethinking quick commerce fundamentals for sustainability and fairness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="bg-commerce-muted/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Tiered Delivery Options</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Offering multiple delivery speed options with transparent trade-offs:
                      </p>
                      <ul className="space-y-3">
                        <li className="border-l-4 border-green-500 pl-3 py-1">
                          <p className="font-medium">Eco-Delivery (60+ min)</p>
                          <p className="text-sm text-muted-foreground">
                            Lowest cost, lowest emissions through batched deliveries
                          </p>
                        </li>
                        <li className="border-l-4 border-yellow-500 pl-3 py-1">
                          <p className="font-medium">Balance (30 min)</p>
                          <p className="text-sm text-muted-foreground">
                            Mid-range option balancing speed and sustainability
                          </p>
                        </li>
                        <li className="border-l-4 border-red-500 pl-3 py-1">
                          <p className="font-medium">Express (10-15 min)</p>
                          <p className="text-sm text-muted-foreground">
                            Premium-priced with environmental offset included
                          </p>
                        </li>
                      </ul>
                      <div className="mt-4 text-xs text-muted-foreground">
                        <strong>Business Impact:</strong> Companies like Getir have found that 65% of customers choose lower-cost, slower options when price differences are significant.
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-commerce-muted/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Worker Cooperative Model</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Restructuring ownership to include workers as stakeholders:
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full h-6 w-6 bg-commerce-muted flex items-center justify-center text-xs font-medium">
                            1
                          </div>
                          <p className="text-sm">Worker-owned delivery collectives</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="rounded-full h-6 w-6 bg-commerce-muted flex items-center justify-center text-xs font-medium">
                            2
                          </div>
                          <p className="text-sm">Profit-sharing arrangements with delivery personnel</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="rounded-full h-6 w-6 bg-commerce-muted flex items-center justify-center text-xs font-medium">
                            3
                          </div>
                          <p className="text-sm">Democratic decision-making on working conditions</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="rounded-full h-6 w-6 bg-commerce-muted flex items-center justify-center text-xs font-medium">
                            4
                          </div>
                          <p className="text-sm">Collective negotiation with retail partners</p>
                        </div>
                      </div>
                      <div className="mt-4 text-xs text-muted-foreground">
                        <strong>Example:</strong> CoopCycle in Europe is a federation of worker-owned delivery cooperatives operating in over 50 cities with improved worker satisfaction and retention.
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-commerce-muted/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Hyper-Local Hub Model</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Reimagining dark stores as community micro-centers:
                      </p>
                      <div className="space-y-3">
                        <div className="flex gap-3 items-start">
                          <div className="rounded-full bg-blue-100 p-1 flex-shrink-0 mt-1">
                            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                          </div>
                          <p className="text-sm">
                            <span className="font-medium">Neighborhood Integration</span> - Dark stores with partial public access, serving as package pickup points
                          </p>
                        </div>
                        <div className="flex gap-3 items-start">
                          <div className="rounded-full bg-blue-100 p-1 flex-shrink-0 mt-1">
                            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                          </div>
                          <p className="text-sm">
                            <span className="font-medium">Walking Distance Focus</span> - Ultra-dense network of micro-hubs serving 1-2 km radius areas
                          </p>
                        </div>
                        <div className="flex gap-3 items-start">
                          <div className="rounded-full bg-blue-100 p-1 flex-shrink-0 mt-1">
                            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                          </div>
                          <p className="text-sm">
                            <span className="font-medium">Multi-Purpose Facilities</span> - Combining delivery operations with community amenities
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 text-xs text-muted-foreground">
                        <strong>Innovation:</strong> GoPuff's "Neighborhood Essentials" concept stores blend dark store functionality with limited public shopping access, reducing delivery distances by 40%.
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-medium mb-4">Hybrid Approaches: Quick Commerce + Sustainability</h3>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-medium mb-3 text-lg">Fair Speed Commerce</h4>
                        <p className="text-muted-foreground mb-4">
                          A framework for balancing competitive speed with environmental and social responsibility:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <span className="font-medium text-green-600">01.</span>
                            <p className="text-sm">
                              <span className="font-medium">Speed-Neutral Incentives</span> - Compensating workers based on safety and customer satisfaction, not just delivery time
                            </p>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="font-medium text-green-600">02.</span>
                            <p className="text-sm">
                              <span className="font-medium">True Cost Transparency</span> - Clear disclosure of environmental and social impacts in pricing models
                            </p>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="font-medium text-green-600">03.</span>
                            <p className="text-sm">
                              <span className="font-medium">Distributed Delivery Networks</span> - Multiple micro-fulfillment centers with human-scale transportation options
                            </p>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="font-medium text-green-600">04.</span>
                            <p className="text-sm">
                              <span className="font-medium">Dynamic Promises</span> - Delivery time estimates that adjust based on environmental conditions and labor capacity
                            </p>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="border-l border-green-200 pl-8">
                        <h5 className="font-medium text-commerce-primary mb-3">Case Study: FairQuick</h5>
                        <p className="text-sm text-muted-foreground mb-4">
                          A Berlin-based startup implementing a 30-minute maximum delivery window with a focus on sustainability:
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="rounded-full bg-green-100 p-1 h-5 w-5 flex items-center justify-center flex-shrink-0">
                              <span className="text-green-600 text-xs">✓</span>
                            </div>
                            100% electric cargo bike fleet
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="rounded-full bg-green-100 p-1 h-5 w-5 flex items-center justify-center flex-shrink-0">
                              <span className="text-green-600 text-xs">✓</span>
                            </div>
                            Employee model with benefits and living wage
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="rounded-full bg-green-100 p-1 h-5 w-5 flex items-center justify-center flex-shrink-0">
                              <span className="text-green-600 text-xs">✓</span>
                            </div>
                            Reusable packaging with deposit system
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="rounded-full bg-green-100 p-1 h-5 w-5 flex items-center justify-center flex-shrink-0">
                              <span className="text-green-600 text-xs">✓</span>
                            </div>
                            Transparent delivery fee structure
                          </li>
                        </ul>
                        <div className="mt-4">
                          <h6 className="font-medium text-sm">Results:</h6>
                          <p className="text-xs text-muted-foreground">
                            93% customer satisfaction despite longer delivery times than competitors, with 75% lower emissions and 85% worker retention rate (vs. industry average of 36%).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="consumer" className="mt-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Consumer Awareness & Behavior Change</CardTitle>
                <CardDescription>
                  Shifting demand patterns through education and incentives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-medium mb-4">Information & Transparency</h4>
                    
                    <div className="space-y-6">
                      <div className="bg-commerce-muted/20 rounded-lg p-5">
                        <h5 className="font-medium mb-3">Impact Labeling</h5>
                        <div className="flex gap-4 mb-4">
                          <div className="flex-1 p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium">10-min Delivery</span>
                              <span className="text-xs py-0.5 px-2 bg-red-100 text-red-600 rounded-full">High Impact</span>
                            </div>
                            <div className="space-y-1 text-xs">
                              <div className="flex justify-between">
                                <span>CO₂</span>
                                <span>752g</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Worker Pressure</span>
                                <span>Very High</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Packaging</span>
                                <span>Single-use</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex-1 p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium">60-min Delivery</span>
                              <span className="text-xs py-0.5 px-2 bg-green-100 text-green-600 rounded-full">Low Impact</span>
                            </div>
                            <div className="space-y-1 text-xs">
                              <div className="flex justify-between">
                                <span>CO₂</span>
                                <span>215g</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Worker Pressure</span>
                                <span>Low</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Packaging</span>
                                <span>Optimized</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Studies show 28% of consumers will choose more sustainable delivery options when environmental impact information is clearly displayed.
                        </p>
                      </div>
                      
                      <div className="bg-commerce-muted/20 rounded-lg p-5">
                        <h5 className="font-medium mb-3">True Cost Education</h5>
                        <p className="text-sm text-muted-foreground mb-4">
                          Helping consumers understand externalized costs of ultrafast delivery:
                        </p>
                        <div className="space-y-2">
                          <div className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-commerce-primary text-white flex items-center justify-center text-xs">
                              1
                            </div>
                            <p className="text-sm flex-1">
                              <span className="font-medium">Interactive Calculators</span> - Tools showing environmental and social costs of different delivery choices
                            </p>
                          </div>
                          <div className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-commerce-primary text-white flex items-center justify-center text-xs">
                              2
                            </div>
                            <p className="text-sm flex-1">
                              <span className="font-medium">In-App Storytelling</span> - Brief narratives about delivery workers and environmental impact
                            </p>
                          </div>
                          <div className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-commerce-primary text-white flex items-center justify-center text-xs">
                              3
                            </div>
                            <p className="text-sm flex-1">
                              <span className="font-medium">Comparative Metrics</span> - "This delivery produces the same emissions as driving X miles"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-4">Incentives & Rewards</h4>
                    
                    <div className="space-y-6">
                      <div className="bg-commerce-muted/20 rounded-lg p-5">
                        <h5 className="font-medium mb-3">Eco-Choice Rewards</h5>
                        <p className="text-sm text-muted-foreground mb-4">
                          Incentive systems to reward sustainable consumer choices:
                        </p>
                        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                                <path d="M12 22v-5.3m0 0c7.5-1.2 9.5-7.7 9.5-11.7 0-1-3-1-3 0 0 3-1.5 5.5-5.5 5.5-4 0-7-2.5-8-6 0-1-3-1-3 0 0 4 3 10 10 12.2z"/>
                              </svg>
                            </div>
                            <div>
                              <h6 className="font-medium text-sm">GreenPoints Program</h6>
                              <p className="text-xs text-muted-foreground">Earn rewards for choosing eco-friendly options</p>
                            </div>
                          </div>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span>Standard Delivery (60+ min)</span>
                              <span className="font-medium text-green-600">+15 points</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Packaging-Free Option</span>
                              <span className="font-medium text-green-600">+10 points</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Same-Day Batch Delivery</span>
                              <span className="font-medium text-green-600">+5 points</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Ultra-Fast Delivery (10-min)</span>
                              <span className="font-medium text-red-500">+0 points</span>
                            </div>
                            <div className="h-px bg-gray-200 my-2"></div>
                            <div className="flex justify-between">
                              <span>100 points =</span>
                              <span className="font-medium">$5 discount</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-commerce-muted/20 rounded-lg p-5">
                        <h5 className="font-medium mb-3">Community Impact Campaigns</h5>
                        <p className="text-sm text-muted-foreground mb-4">
                          Connecting consumer choices to local community benefits:
                        </p>
                        <div className="space-y-3">
                          <div className="flex gap-3">
                            <div className="rounded-full h-8 w-8 bg-blue-100 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"></path>
                                <path d="M12 7v5l2.5 2.5"></path>
                              </svg>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">Batch Order Weekends</p>
                              <p className="text-xs text-muted-foreground">
                                For every 1000 orders that choose standard delivery on weekends, plant 50 trees in local parks
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="rounded-full h-8 w-8 bg-blue-100 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path>
                                <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"></path>
                                <path d="M5 18v2"></path>
                                <path d="M19 18v2"></path>
                              </svg>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">Reusable Container Program</p>
                              <p className="text-xs text-muted-foreground">
                                For every 100 reusable containers returned, donate meals to local food banks
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="rounded-full h-8 w-8 bg-blue-100 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                <path d="M22 9a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V8c0-2.5 1.1-3.1 3-3.8C5.6 3 8.5 2 12 2s6.4 1 9 2.2c1.9.7 3 1.3 3 3.8Z"></path>
                                <path d="M15 22H9"></path>
                                <path d="M12 22v-9"></path>
                                <path d="M4 13v3c0 1.1.9 2 2 2h3"></path>
                                <path d="M20 13v3c0 1.1-.9 2-2 2h-3"></path>
                              </svg>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">Neighborhood Impact Dashboard</p>
                              <p className="text-xs text-muted-foreground">
                                Public tracking of community emissions reductions and donations from sustainable delivery choices
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Success Metrics</h5>
                      <p className="text-xs text-muted-foreground">
                        Grocery delivery app Misfits Market implemented a "Flexible Delivery" option that offered 15% discounts for choosing 24-hour delivery windows. Within 6 months, 47% of customers chose the flexible option, reducing CO₂ emissions by 31% while increasing order profitability.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
