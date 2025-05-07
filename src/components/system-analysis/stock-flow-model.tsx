
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowRight, Box, ChevronUp, ChevronDown, Users, Package, Timer, TrendingUp, TrendingDown } from "lucide-react";

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
                    <div className="flex flex-col items-center mt-3 space-y-1">
                      <div className="flex items-center gap-1 text-sm">
                        <TrendingUp className="h-4 w-4 text-red-500" />
                        <span className="text-muted-foreground">Delivery Pressure</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <TrendingDown className="h-4 w-4 text-green-500" />
                        <span className="text-muted-foreground">Rest Periods</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Flow arrows */}
                  <div className="flex flex-col md:flex-row items-center">
                    <ArrowRight className="h-8 w-8 text-blue-500 hidden md:block" />
                    <ChevronDown className="h-8 w-8 text-blue-500 md:hidden" />
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
                    <div className="flex flex-col items-center mt-3 space-y-1">
                      <div className="flex items-center gap-1 text-sm">
                        <TrendingUp className="h-4 w-4 text-red-500" />
                        <span className="text-muted-foreground">Customer Demand</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <TrendingDown className="h-4 w-4 text-green-500" />
                        <span className="text-muted-foreground">Order Fulfillment</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Flow arrows */}
                  <div className="flex flex-col md:flex-row items-center">
                    <ArrowRight className="h-8 w-8 text-green-500 hidden md:block" />
                    <ChevronDown className="h-8 w-8 text-green-500 md:hidden" />
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
                    <div className="flex flex-col items-center mt-3 space-y-1">
                      <div className="flex items-center gap-1 text-sm">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-muted-foreground">Positive Experiences</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <TrendingDown className="h-4 w-4 text-red-500" />
                        <span className="text-muted-foreground">Service Failures</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Feedback loop arrows */}
                <div className="mt-8 flex justify-center">
                  <div className="w-3/4 h-12 border-2 border-dashed border-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-sm text-gray-600">System Feedback Loop</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-sm text-muted-foreground p-4 bg-muted/30 rounded-lg w-full">
                <h4 className="font-medium mb-2 text-foreground">Key Elements in the Model:</h4>
                <ul className="list-disc list-inside space-y-1.5">
                  <li><span className="font-medium">Worker Fatigue Level (Stock):</span> Accumulates based on delivery pressure and is reduced by rest periods</li>
                  <li><span className="font-medium">Orders (Stock):</span> Accumulates through customer demand and depletes through fulfillment</li>
                  <li><span className="font-medium">Customer Satisfaction (Stock):</span> Builds through positive experiences and diminishes with service failures</li>
                  <li><span className="font-medium">Flow Variables:</span> Include delivery pressure, shift rotation, order cancellation, and service quality metrics</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
