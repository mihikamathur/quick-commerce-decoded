
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeader } from "@/components/ui/section-header";
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface DataPoint {
  year: string;
  [key: string]: number | string;
}

export function BehaviorOverTime() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    setIsVisible(true);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const deliverySpeedData: DataPoint[] = [
    { year: "2010", average: 5, premium: 2, economy: 7 },
    { year: "2012", average: 4, premium: 1.5, economy: 6 },
    { year: "2014", average: 3, premium: 1, economy: 5 },
    { year: "2016", average: 2, premium: 0.5, economy: 4 },
    { year: "2018", average: 1.5, premium: 0.3, economy: 3 },
    { year: "2020", average: 1, premium: 0.2, economy: 2 },
    { year: "2022", average: 0.5, premium: 0.17, economy: 1.5 },
    { year: "2024", average: 0.3, premium: 0.15, economy: 1 },
    { year: "2025", average: 0.25, premium: 0.12, economy: 0.8 },
  ];

  const laborSatisfactionData: DataPoint[] = [
    { year: "2010", satisfaction: 85, turnover: 15, injuries: 12 },
    { year: "2012", satisfaction: 82, turnover: 20, injuries: 14 },
    { year: "2014", satisfaction: 78, turnover: 25, injuries: 18 },
    { year: "2016", satisfaction: 72, turnover: 32, injuries: 24 },
    { year: "2018", satisfaction: 65, turnover: 45, injuries: 32 },
    { year: "2020", satisfaction: 58, turnover: 60, injuries: 40 },
    { year: "2022", satisfaction: 52, turnover: 72, injuries: 48 },
    { year: "2024", satisfaction: 48, turnover: 78, injuries: 52 },
    { year: "2025", satisfaction: 45, turnover: 82, injuries: 54 },
  ];

  const emissionsData: DataPoint[] = [
    { year: "2010", totalEmissions: 100, perOrderEmissions: 100 },
    { year: "2012", totalEmissions: 115, perOrderEmissions: 95 },
    { year: "2014", totalEmissions: 135, perOrderEmissions: 90 },
    { year: "2016", totalEmissions: 160, perOrderEmissions: 85 },
    { year: "2018", totalEmissions: 200, perOrderEmissions: 75 },
    { year: "2020", totalEmissions: 280, perOrderEmissions: 120 },
    { year: "2022", totalEmissions: 320, perOrderEmissions: 145 },
    { year: "2024", totalEmissions: 350, perOrderEmissions: 160 },
    { year: "2025", totalEmissions: 370, perOrderEmissions: 168 },
  ];

  return (
    <section className="section bg-commerce-muted/10">
      <div className="container-custom">
        <SectionHeader
          title="Behavior Over Time"
          subtitle="Tracking key metrics in quick commerce over the past decade"
          centered
        />
        
        <Card className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <CardContent className="p-6">
            <Tabs defaultValue="delivery" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
                <TabsTrigger value="delivery" className="py-3">Delivery Speed</TabsTrigger>
                <TabsTrigger value="labor">Labor Metrics</TabsTrigger>
                <TabsTrigger value="emissions">Emissions Trends</TabsTrigger>
              </TabsList>
              
              <TabsContent value="delivery" className="animate-fade-in pt-6">
                <h3 className="text-xl font-medium mb-2">Delivery Speed Expectations (Days)</h3>
                <p className="text-muted-foreground mb-6">
                  Average expected delivery time has decreased dramatically over the past decade
                </p>
                
                <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={deliverySpeedData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis 
                        dataKey="year" 
                        tick={{ fontSize: 12 }}
                        tickLine={{ stroke: '#ccc' }}
                      />
                      <YAxis 
                        label={{ 
                          value: 'Days', 
                          angle: -90, 
                          position: 'insideLeft',
                          style: { textAnchor: 'middle', fontSize: 12 } 
                        }} 
                        tick={{ fontSize: 12 }}
                        tickLine={{ stroke: '#ccc' }}
                      />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="premium" 
                        name="Premium Service" 
                        stroke="#8b5cf6" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="average" 
                        name="Average Service" 
                        stroke="#3b82f6" 
                        strokeWidth={2} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="economy" 
                        name="Economy Service" 
                        stroke="#10b981" 
                        strokeWidth={2} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="text-sm font-medium mb-2">Key Insights</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Premium service delivery expectations dropped from 2 days to just hours between 2010-2024</li>
                    <li>• Average expected delivery time decreased by 94% over the 15-year period</li>
                    <li>• The gap between economy and premium service continues to narrow</li>
                    <li>• By 2025, even economy delivery is expected to be under 1 day on average</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="labor" className="animate-fade-in pt-6">
                <h3 className="text-xl font-medium mb-2">Labor Conditions</h3>
                <p className="text-muted-foreground mb-6">
                  Worker satisfaction has declined as delivery speed has increased
                </p>
                
                <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={laborSatisfactionData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis 
                        dataKey="year" 
                        tick={{ fontSize: 12 }}
                        tickLine={{ stroke: '#ccc' }}
                      />
                      <YAxis 
                        label={{ 
                          value: 'Percentage', 
                          angle: -90, 
                          position: 'insideLeft',
                          style: { textAnchor: 'middle', fontSize: 12 } 
                        }} 
                        tick={{ fontSize: 12 }}
                        tickLine={{ stroke: '#ccc' }}
                      />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="satisfaction" 
                        name="Worker Satisfaction" 
                        stroke="#10b981" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="turnover" 
                        name="Annual Worker Turnover" 
                        stroke="#f43f5e" 
                        strokeWidth={2} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="injuries" 
                        name="Injury Rate (per 1000 workers)" 
                        stroke="#f97316" 
                        strokeWidth={2} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-6 bg-red-50 p-4 rounded-lg border border-red-100">
                  <h4 className="text-sm font-medium mb-2">Key Insights</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Worker satisfaction decreased by 47% as speed expectations increased</li>
                    <li>• Annual turnover has more than quintupled from 15% to 82%</li>
                    <li>• Injury rates have shown consistent increases correlating with faster delivery times</li>
                    <li>• There was a notable acceleration in negative trends after 2018 when 30-minute delivery became common</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="emissions" className="animate-fade-in pt-6">
                <h3 className="text-xl font-medium mb-2">Environmental Impact</h3>
                <p className="text-muted-foreground mb-6">
                  Quick commerce has led to higher emissions per order despite efficiency improvements
                </p>
                
                <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={emissionsData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis 
                        dataKey="year" 
                        tick={{ fontSize: 12 }}
                        tickLine={{ stroke: '#ccc' }}
                      />
                      <YAxis 
                        label={{ 
                          value: 'Index (2010 = 100)', 
                          angle: -90, 
                          position: 'insideLeft',
                          style: { textAnchor: 'middle', fontSize: 12 } 
                        }} 
                        tick={{ fontSize: 12 }}
                        tickLine={{ stroke: '#ccc' }}
                      />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="totalEmissions" 
                        name="Total Sector Emissions" 
                        stroke="#f43f5e" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="perOrderEmissions" 
                        name="Emissions Per Order" 
                        stroke="#f97316" 
                        strokeWidth={2} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-100">
                  <h4 className="text-sm font-medium mb-2">Key Insights</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Total emissions from e-commerce delivery have increased 270% since 2010</li>
                    <li>• Emissions per order initially decreased through technological improvements (2010-2018)</li>
                    <li>• The trend reversed after 2018 with the rise of quick commerce, increasing emissions per order by 124%</li>
                    <li>• The rapid acceleration correlates with the shift from same-day to same-hour delivery</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
