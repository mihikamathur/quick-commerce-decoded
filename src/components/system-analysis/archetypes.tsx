
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SystemArchetypes() {
  return (
    <section className="section bg-commerce-muted/10">
      <div className="container-custom">
        <SectionHeader
          title="System Archetypes in Quick Commerce"
          subtitle="Identifying common system patterns that help explain behavior in the quick commerce ecosystem"
          centered
        />
        
        <Tabs defaultValue="fixes-fail" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
            <TabsTrigger value="fixes-fail" className="py-3">Fixes That Fail</TabsTrigger>
            <TabsTrigger value="success-successful">Success to the Successful</TabsTrigger>
            <TabsTrigger value="growth-limits">Limits to Growth</TabsTrigger>
          </TabsList>
          
          <TabsContent value="fixes-fail" className="mt-6 animate-fade-in">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Fixes That Fail</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-medium mb-2">Pattern Description</h5>
                    <p className="text-muted-foreground mb-6">
                      In this archetype, a problem symptom is addressed with a quick fix that temporarily alleviates the problem but has unintended consequences that exacerbate the original issue over time.
                    </p>
                    
                    <h5 className="font-medium mb-2">Quick Commerce Example</h5>
                    <p className="text-muted-foreground">
                      Companies address consumer desire for convenience with ultrafast delivery, which works temporarily but creates unsustainable pressures on labor, infrastructure, and the environment, ultimately threatening the business model itself.
                    </p>
                  </div>
                  
                  <div className="bg-commerce-muted/30 p-6 rounded-lg">
                    <h5 className="font-medium mb-4">Cycle in Quick Commerce</h5>
                    <ol className="list-decimal list-inside space-y-3">
                      <li className="text-muted-foreground">
                        <span className="font-medium text-commerce-primary">Problem:</span> Consumers want faster delivery
                      </li>
                      <li className="text-muted-foreground">
                        <span className="font-medium text-commerce-primary">Fix:</span> Companies promise 10-minute delivery times
                      </li>
                      <li className="text-muted-foreground">
                        <span className="font-medium text-commerce-primary">Short-term:</span> Customer satisfaction increases
                      </li>
                      <li className="text-muted-foreground">
                        <span className="font-medium text-commerce-primary">Long-term:</span> Worker burnout, increased emissions, and unsustainable economics
                      </li>
                      <li className="text-muted-foreground">
                        <span className="font-medium text-commerce-primary">Result:</span> Service quality degrades, costs rise, original problem worsens
                      </li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="success-successful" className="mt-6 animate-fade-in">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Success to the Successful</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-medium mb-2">Pattern Description</h5>
                    <p className="text-muted-foreground mb-6">
                      This archetype describes a situation where success in one area leads to more resources being allocated to that area, which in turn leads to even more success, creating a reinforcing loop that concentrates resources.
                    </p>
                    
                    <h5 className="font-medium mb-2">Quick Commerce Example</h5>
                    <p className="text-muted-foreground">
                      Companies that achieve faster delivery times receive more customer attention and investment, allowing them to further optimize their networks and speed, while smaller players or those prioritizing sustainability struggle to compete.
                    </p>
                  </div>
                  
                  <div className="bg-commerce-muted/30 p-6 rounded-lg">
                    <h5 className="font-medium mb-4">Reinforcing Loop</h5>
                    <ol className="list-decimal list-inside space-y-3">
                      <li className="text-muted-foreground">
                        Company A invests heavily in dark store network for speed
                      </li>
                      <li className="text-muted-foreground">
                        Customers choose Company A for faster delivery
                      </li>
                      <li className="text-muted-foreground">
                        Company A's revenue increases, attracting investor attention
                      </li>
                      <li className="text-muted-foreground">
                        More investment allows for more dark stores and optimization
                      </li>
                      <li className="text-muted-foreground">
                        Delivery times decrease further, attracting more customers
                      </li>
                      <li className="text-muted-foreground">
                        Competitors without resources to match speed lose market share
                      </li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="growth-limits" className="mt-6 animate-fade-in">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Limits to Growth</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-medium mb-2">Pattern Description</h5>
                    <p className="text-muted-foreground mb-6">
                      This archetype illustrates how growth processes eventually encounter limits that slow and stop growth. It involves a reinforcing loop of growth that eventually triggers a balancing loop that constrains further growth.
                    </p>
                    
                    <h5 className="font-medium mb-2">Quick Commerce Example</h5>
                    <p className="text-muted-foreground">
                      Quick commerce companies experience rapid growth initially, but eventually hit limits from diminishing returns on speed (10 minutes vs. 9 minutes makes little difference), physical constraints of urban delivery, and mounting costs.
                    </p>
                  </div>
                  
                  <div className="bg-commerce-muted/30 p-6 rounded-lg">
                    <h5 className="font-medium mb-4">Growth Limits in Quick Commerce</h5>
                    <h6 className="text-sm font-medium mb-2">Reinforcing Loop (Growth):</h6>
                    <ul className="list-disc list-inside text-muted-foreground mb-4">
                      <li>Faster delivery increases consumer demand</li>
                      <li>Higher demand justifies more dark stores</li>
                      <li>More dark stores improve delivery times</li>
                    </ul>
                    
                    <h6 className="text-sm font-medium mb-2">Balancing Loop (Limits):</h6>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Physical limits to how fast delivery can be</li>
                      <li>Economic limits as costs rise for marginal improvements</li>
                      <li>Regulatory limits as concerns about safety and labor grow</li>
                      <li>Consumer value perception limits (10 vs 9 minutes)</li>
                    </ul>
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
