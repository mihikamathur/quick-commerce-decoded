
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowRight, Box, ChevronUp, ChevronDown, Users, Package, Timer, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

export function StockFlowModel() {
  return (
    <section className="section bg-commerce-muted/5">
      <div className="container-custom">
        <SectionHeader
          title="Stock and Flow Model"
          subtitle="A system dynamics model showing the key variables in quick commerce delivery systems"
          centered
        />
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <p className="text-muted-foreground mb-6 text-center max-w-3xl">
                This stock and flow model illustrates how worker fatigue, order volume, and customer satisfaction 
                interact in the quick commerce ecosystem. It shows the relationships between key variables like 
                delivery pressure, rest periods, and service quality.
              </p>
              
              <div className="relative w-full border border-muted rounded-lg p-6 mb-6 bg-white">
                {/* Main Flow Diagram */}
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                  {/* Worker Fatigue Stock */}
                  <div className="flex flex-col items-center">
                    <div className="text-center font-medium mb-2">Worker Fatigue</div>
                    <div className="h-32 w-32 border-2 rounded-md border-orange-500 flex items-center justify-center">
                      <Users className="h-12 w-12 text-orange-500" />
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="text-xs bg-orange-100 rounded-md p-1 px-2 text-orange-700">STOCK</div>
                    </div>
                  </div>
                  
                  {/* Variables affecting Worker Fatigue */}
                  <div className="flex flex-col items-center relative">
                    <div className="absolute -top-14 bg-red-100 px-2 py-1 rounded-md text-xs text-red-700">
                      Delivery Pressure
                    </div>
                    <ArrowUpRight className="h-6 w-6 text-red-500 absolute -top-6 -left-2" />
                    
                    <ArrowRight className="h-8 w-8 text-blue-500 hidden md:block" />
                    <ChevronDown className="h-8 w-8 text-blue-500 md:hidden" />
                    
                    <div className="absolute -bottom-14 bg-green-100 px-2 py-1 rounded-md text-xs text-green-700">
                      Rest Periods
                    </div>
                    <ArrowDownRight className="h-6 w-6 text-green-500 absolute -bottom-6 -left-2" />
                  </div>
                  
                  {/* Orders Stock */}
                  <div className="flex flex-col items-center">
                    <div className="text-center font-medium mb-2">Orders</div>
                    <div className="h-32 w-32 border-2 rounded-md border-blue-500 flex items-center justify-center">
                      <Package className="h-12 w-12 text-blue-500" />
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="text-xs bg-blue-100 rounded-md p-1 px-2 text-blue-700">STOCK</div>
                    </div>
                  </div>
                  
                  {/* Variables affecting Orders */}
                  <div className="flex flex-col items-center relative">
                    <div className="absolute -top-14 bg-red-100 px-2 py-1 rounded-md text-xs text-red-700">
                      Customer Demand
                    </div>
                    <ArrowUpRight className="h-6 w-6 text-red-500 absolute -top-6 -left-2" />
                    
                    <ArrowRight className="h-8 w-8 text-green-500 hidden md:block" />
                    <ChevronDown className="h-8 w-8 text-green-500 md:hidden" />
                    
                    <div className="absolute -bottom-14 bg-green-100 px-2 py-1 rounded-md text-xs text-green-700">
                      Order Fulfillment
                    </div>
                    <ArrowDownRight className="h-6 w-6 text-green-500 absolute -bottom-6 -left-2" />
                  </div>
                  
                  {/* Customer Satisfaction Stock */}
                  <div className="flex flex-col items-center">
                    <div className="text-center font-medium mb-2">Customer Satisfaction</div>
                    <div className="h-32 w-32 border-2 rounded-md border-green-500 flex items-center justify-center">
                      <Timer className="h-12 w-12 text-green-500" />
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="text-xs bg-green-100 rounded-md p-1 px-2 text-green-700">STOCK</div>
                    </div>
                  </div>
                  
                  {/* Variables affecting Customer Satisfaction */}
                  <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-20">
                    <div className="bg-green-100 px-2 py-1 rounded-md text-xs text-green-700">
                      Positive Experiences
                    </div>
                    <ArrowUpRight className="h-6 w-6 text-green-500 mt-1" />
                  </div>
                  
                  <div className="hidden lg:block absolute right-16 top-1/2 translate-y-12">
                    <div className="bg-red-100 px-2 py-1 rounded-md text-xs text-red-700">
                      Service Failures
                    </div>
                    <ArrowDownRight className="h-6 w-6 text-red-500 mt-1" />
                  </div>
                </div>
                
                {/* Additional Variables (Mobile view) */}
                <div className="flex flex-col items-center mt-6 space-y-4 lg:hidden">
                  <div className="flex items-center gap-2">
                    <Circle className="h-4 w-4 text-green-500 fill-green-100" />
                    <span className="text-sm">Positive Experiences →</span>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Circle className="h-4 w-4 text-red-500 fill-red-100" />
                    <span className="text-sm">Service Failures →</span>
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  </div>
                </div>
                
                {/* Feedback Loop */}
                <div className="mt-16 flex justify-center">
                  <div className="w-3/4 h-16 border-2 border-dashed border-purple-400 rounded-full flex items-center justify-center relative">
                    <div className="absolute -top-3 left-1/4 transform -translate-x-1/2">
                      <div className="bg-purple-100 px-3 py-1 rounded-md text-sm text-purple-700">
                        Worker Performance
                      </div>
                    </div>
                    
                    <div className="absolute -top-3 right-1/4 transform translate-x-1/2">
                      <div className="bg-purple-100 px-3 py-1 rounded-md text-sm text-purple-700">
                        Service Quality
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-purple-100 px-3 py-1 rounded-md text-sm text-purple-700">
                        Feedback Loop
                      </div>
                    </div>
                    
                    <ArrowRight className="h-6 w-6 text-purple-500 absolute top-1/2 transform -translate-y-1/2 right-8" />
                  </div>
                </div>
                
                {/* System Relationships */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                    <h4 className="font-medium text-orange-700 mb-1 text-sm">Worker Fatigue Variables</h4>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      <li className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 text-red-500" />
                        <span>Delivery Pressure</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <TrendingDown className="h-3 w-3 text-green-500" />
                        <span>Rest Periods</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <ArrowRight className="h-3 w-3 text-purple-500" />
                        <span>Worker Performance</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-blue-700 mb-1 text-sm">Order Variables</h4>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      <li className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 text-red-500" />
                        <span>Customer Demand</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <TrendingDown className="h-3 w-3 text-green-500" />
                        <span>Order Fulfillment</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <ArrowRight className="h-3 w-3 text-orange-500" />
                        <span>Delivery Time</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                    <h4 className="font-medium text-green-700 mb-1 text-sm">Customer Satisfaction Variables</h4>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      <li className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 text-green-500" />
                        <span>Positive Experiences</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <TrendingDown className="h-3 w-3 text-red-500" />
                        <span>Service Failures</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <ArrowRight className="h-3 w-3 text-blue-500" />
                        <span>Service Quality</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-sm text-muted-foreground p-4 bg-muted/30 rounded-lg w-full">
                <h4 className="font-medium mb-2 text-foreground">Key Elements in the Model:</h4>
                <ul className="list-disc list-inside space-y-1.5">
                  <li><span className="font-medium">Worker Fatigue Level (Stock):</span> Accumulates based on delivery pressure and is reduced by rest periods</li>
                  <li><span className="font-medium">Orders (Stock):</span> Accumulates through customer demand and depletes through fulfillment</li>
                  <li><span className="font-medium">Customer Satisfaction (Stock):</span> Builds through positive experiences and diminishes with service failures</li>
                  <li><span className="font-medium">Flow Variables:</span> Include delivery pressure, rest periods, order fulfillment, and service quality metrics</li>
                  <li><span className="font-medium">Feedback Loop:</span> Shows how worker performance affects service quality, which impacts customer satisfaction and demand</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
