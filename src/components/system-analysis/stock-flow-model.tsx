
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import Image from "react-bootstrap/Image";

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
              
              <div className="relative w-full overflow-hidden rounded-lg border border-muted">
                <img 
                  src="/lovable-uploads/93ba41a0-3eab-4cda-a052-2919d1ed216d.png" 
                  alt="Stock and Flow Model for Quick Commerce" 
                  className="w-full object-contain"
                />
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
