
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { LeafIcon, Package, Car } from "lucide-react";

export function EnvironmentalImpact() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionHeader
          title="Environmental Impact"
          subtitle="The ecological footprint of 10-minute delivery"
          centered
        />
        
        <Tabs defaultValue="emissions" className="w-full mb-10">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
            <TabsTrigger value="emissions" className="py-3">Carbon Emissions</TabsTrigger>
            <TabsTrigger value="packaging">Packaging Waste</TabsTrigger>
            <TabsTrigger value="urban">Urban Impact</TabsTrigger>
          </TabsList>
          
          <TabsContent value="emissions" className="mt-6 animate-fade-in">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-green-100">
                        <Car className="h-5 w-5 text-green-600" />
                      </div>
                      <h4 className="text-xl font-medium">Carbon Footprint Analysis</h4>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      Quick commerce's focus on speed over efficiency creates a significantly larger carbon footprint compared to traditional delivery models. The environmental impact is amplified by several factors:
                    </p>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="rounded-full bg-commerce-muted p-1 mt-1 flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-commerce-primary"></div>
                        </div>
                        <div>
                          <p className="font-medium">Small Batch Deliveries</p>
                          <p className="text-sm text-muted-foreground">
                            Instead of consolidating multiple orders into efficient routes, quick commerce often sends single items in dedicated trips, increasing emissions per item delivered.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="rounded-full bg-commerce-muted p-1 mt-1 flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-commerce-primary"></div>
                        </div>
                        <div>
                          <p className="font-medium">Suboptimal Routing</p>
                          <p className="text-sm text-muted-foreground">
                            Time pressure often leads to inefficient routes as drivers prioritize speed over fuel efficiency.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="rounded-full bg-commerce-muted p-1 mt-1 flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-commerce-primary"></div>
                        </div>
                        <div>
                          <p className="font-medium">Higher Energy Consumption</p>
                          <p className="text-sm text-muted-foreground">
                            Dark stores require constant refrigeration and lighting, often with inefficient energy use due to rapid scaling.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-commerce-muted/20 rounded-lg p-6">
                    <h5 className="font-medium mb-6">CO₂ Emissions Comparison</h5>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-600"></div>
                            <span className="text-sm">Traditional E-commerce</span>
                          </div>
                          <span className="font-medium">215g CO₂/item</span>
                        </div>
                        <div className="w-full h-6 bg-green-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-600 rounded-full" style={{width: "30%"}}></div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Consolidated deliveries, optimized routes</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <span className="text-sm">Same-Day Delivery</span>
                          </div>
                          <span className="font-medium">365g CO₂/item</span>
                        </div>
                        <div className="w-full h-6 bg-yellow-100 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500 rounded-full" style={{width: "50%"}}></div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Less consolidation, partial route optimization</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <span className="text-sm">10-Minute Delivery</span>
                          </div>
                          <span className="font-medium">752g CO₂/item</span>
                        </div>
                        <div className="w-full h-6 bg-red-100 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500 rounded-full" style={{width: "100%"}}></div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Single-item deliveries, speed prioritized over efficiency</p>
                      </div>
                    </div>
                    
                    <p className="text-xs text-muted-foreground mt-6">
                      Source: Environmental Research Institute, Comparative Logistics Study 2023
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="packaging" className="mt-6 animate-fade-in">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-blue-100">
                        <Package className="h-5 w-5 text-blue-600" />
                      </div>
                      <h4 className="text-xl font-medium">Packaging Waste Challenge</h4>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      Quick commerce's focus on individual deliveries and single items creates a significant packaging waste problem compared to consolidated shopping methods:
                    </p>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="rounded-full bg-commerce-muted p-1 mt-1 flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-commerce-primary"></div>
                        </div>
                        <div>
                          <p className="font-medium">Single Item Packaging</p>
                          <p className="text-sm text-muted-foreground">
                            Each item requires its own packaging rather than consolidating multiple items in one package.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="rounded-full bg-commerce-muted p-1 mt-1 flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-commerce-primary"></div>
                        </div>
                        <div>
                          <p className="font-medium">Over-Packaging for Speed</p>
                          <p className="text-sm text-muted-foreground">
                            Items are often heavily packaged to prevent damage during rapid transport, using more materials than necessary.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="rounded-full bg-commerce-muted p-1 mt-1 flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-commerce-primary"></div>
                        </div>
                        <div>
                          <p className="font-medium">Limited Recycled Content</p>
                          <p className="text-sm text-muted-foreground">
                            Speed-focused operations often utilize conventional packaging rather than sustainable alternatives due to cost and availability.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-commerce-muted/20 rounded-lg p-6">
                    <h5 className="font-medium mb-4">Annual Packaging Materials per Customer</h5>
                    
                    <div className="relative pt-10 pb-5">
                      <div className="absolute top-0 left-0 right-0 flex justify-between text-xs text-muted-foreground">
                        <span>0 kg</span>
                        <span>10 kg</span>
                        <span>20 kg</span>
                        <span>30 kg</span>
                      </div>
                      
                      <div className="space-y-8">
                        <div>
                          <p className="text-sm mb-2">In-Store Shopping</p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                              <LeafIcon className="h-5 w-5 text-green-600" />
                            </div>
                            <div className="h-6 flex-1 bg-green-100 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500 rounded-full" style={{width: "20%"}}></div>
                            </div>
                            <span className="text-sm font-medium w-12">6.2 kg</span>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm mb-2">Traditional E-commerce</p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-full">
                              <Package className="h-5 w-5 text-yellow-600" />
                            </div>
                            <div className="h-6 flex-1 bg-yellow-100 rounded-full overflow-hidden">
                              <div className="h-full bg-yellow-500 rounded-full" style={{width: "45%"}}></div>
                            </div>
                            <span className="text-sm font-medium w-12">13.5 kg</span>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm mb-2">Quick Commerce</p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-full">
                              <Package className="h-5 w-5 text-red-600" />
                            </div>
                            <div className="h-6 flex-1 bg-red-100 rounded-full overflow-hidden">
                              <div className="h-full bg-red-500 rounded-full" style={{width: "85%"}}></div>
                            </div>
                            <span className="text-sm font-medium w-12">27.8 kg</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h6 className="text-sm font-medium mb-3">Packaging Type Breakdown (Quick Commerce)</h6>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Plastic Bags</span>
                            <span>42%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-commerce-primary rounded-full" style={{width: "42%"}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Cardboard</span>
                            <span>31%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-commerce-primary rounded-full" style={{width: "31%"}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Bubble Wrap</span>
                            <span>18%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-commerce-primary rounded-full" style={{width: "18%"}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Other Materials</span>
                            <span>9%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-commerce-primary rounded-full" style={{width: "9%"}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="urban" className="mt-6 animate-fade-in">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-purple-100">
                        <Car className="h-5 w-5 text-purple-600" />
                      </div>
                      <h4 className="text-xl font-medium">Urban Environment Impact</h4>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      Beyond carbon emissions and packaging waste, quick commerce has broader impacts on urban environments:
                    </p>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="rounded-full bg-commerce-muted p-1 mt-1 flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-commerce-primary"></div>
                        </div>
                        <div>
                          <p className="font-medium">Traffic Congestion</p>
                          <p className="text-sm text-muted-foreground">
                            The influx of delivery vehicles, especially during peak hours, contributes significantly to urban traffic congestion.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="rounded-full bg-commerce-muted p-1 mt-1 flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-commerce-primary"></div>
                        </div>
                        <div>
                          <p className="font-medium">Parking Violations</p>
                          <p className="text-sm text-muted-foreground">
                            Time-pressured delivery personnel often resort to illegal parking, blocking bike lanes, sidewalks, and accessibility ramps.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="rounded-full bg-commerce-muted p-1 mt-1 flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-commerce-primary"></div>
                        </div>
                        <div>
                          <p className="font-medium">Noise Pollution</p>
                          <p className="text-sm text-muted-foreground">
                            The constant movement of delivery vehicles contributes to urban noise pollution, particularly in residential areas.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="rounded-full bg-commerce-muted p-1 mt-1 flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-commerce-primary"></div>
                        </div>
                        <div>
                          <p className="font-medium">Commercial Space Conversion</p>
                          <p className="text-sm text-muted-foreground">
                            Dark stores often replace retail spaces that previously contributed to community character and social interaction.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-commerce-muted/20 rounded-lg p-6">
                    <h5 className="font-medium mb-4">Case Study: Urban Traffic Impact</h5>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-1">
                        <h6 className="text-sm">Midtown Traffic Density (Vehicles per km²)</h6>
                        <span className="text-xs text-muted-foreground">Delhi, India</span>
                      </div>
                      <div className="relative">
                        <div className="w-full h-1 bg-gray-200 absolute top-9"></div>
                        <div className="flex justify-between">
                          <div className="text-center">
                            <div className="w-0.5 h-3 bg-gray-300 mx-auto mb-1"></div>
                            <div className="text-xs text-muted-foreground">2018</div>
                            <div className="mt-3 text-sm font-medium">583</div>
                          </div>
                          <div className="text-center">
                            <div className="w-0.5 h-3 bg-gray-300 mx-auto mb-1"></div>
                            <div className="text-xs text-muted-foreground">2019</div>
                            <div className="mt-3 text-sm font-medium">612</div>
                          </div>
                          <div className="text-center">
                            <div className="w-0.5 h-3 bg-gray-300 mx-auto mb-1"></div>
                            <div className="text-xs text-muted-foreground">2020</div>
                            <div className="mt-3 text-sm font-medium">521</div>
                          </div>
                          <div className="text-center">
                            <div className="w-0.5 h-3 bg-gray-300 mx-auto mb-1"></div>
                            <div className="text-xs text-muted-foreground">2021</div>
                            <div className="mt-3 text-sm font-medium">645</div>
                          </div>
                          <div className="text-center">
                            <div className="w-0.5 h-3 bg-gray-300 mx-auto mb-1"></div>
                            <div className="text-xs text-muted-foreground">2022</div>
                            <div className="mt-3 text-sm font-medium">702</div>
                          </div>
                          <div className="text-center">
                            <div className="w-0.5 h-3 bg-gray-300 mx-auto mb-1"></div>
                            <div className="text-xs text-muted-foreground">2023</div>
                            <div className="mt-3 text-sm font-medium">794</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mt-4">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-commerce-primary rounded-full"></div>
                          <span>Quick commerce launched in this area in 2021</span>
                        </div>
                        <span>+23% since launch</span>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h6 className="text-sm font-medium mb-3">Urban Noise Measurements (dB)</h6>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Pre-Quick Commerce (2020)</span>
                            <span>68.3 dB</span>
                          </div>
                          <div className="w-full h-4 bg-gray-100 rounded-full">
                            <div className="h-4 bg-yellow-400 rounded-full" style={{width: "68.3%"}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Post-Quick Commerce (2023)</span>
                            <span>74.7 dB</span>
                          </div>
                          <div className="w-full h-4 bg-gray-100 rounded-full">
                            <div className="h-4 bg-red-400 rounded-full" style={{width: "74.7%"}}></div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          * WHO recommends ambient noise levels below 70 dB to prevent hearing damage
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h4 className="text-xl font-semibold">The Consolidated Environmental Impact</h4>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quick commerce's environmental footprint extends across multiple dimensions, creating compounding negative effects on urban ecosystems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <LeafIcon className="h-10 w-10 text-red-500 mb-2" />
                  <h5 className="text-lg font-medium mb-1">3.5x</h5>
                  <p className="text-sm text-muted-foreground">
                    Higher carbon emissions per item compared to consolidated delivery
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Package className="h-10 w-10 text-orange-500 mb-2" />
                  <h5 className="text-lg font-medium mb-1">27.8 kg</h5>
                  <p className="text-sm text-muted-foreground">
                    Annual packaging waste per customer (4.5x more than in-store shopping)
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Car className="h-10 w-10 text-yellow-500 mb-2" />
                  <h5 className="text-lg font-medium mb-1">+23%</h5>
                  <p className="text-sm text-muted-foreground">
                    Increase in urban traffic density in areas with high quick commerce activity
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <LeafIcon className="h-10 w-10 text-green-500 mb-2" />
                  <h5 className="text-lg font-medium mb-1">1.8%</h5>
                  <p className="text-sm text-muted-foreground">
                    Average portion of quick commerce packaging that's recyclable or biodegradable
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
