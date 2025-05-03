
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { LeafIcon, Package, Users } from "lucide-react";

export function Conclusion() {
  return (
    <section className="section bg-gradient-to-b from-white to-commerce-muted/20">
      <div className="container-custom">
        <SectionHeader
          title="Conclusion"
          subtitle="Rethinking the balance between convenience, sustainability, and equity in quick commerce"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <div className="mb-4 h-12 w-12 rounded-full bg-commerce-primary/10 flex items-center justify-center">
              <Package className="h-6 w-6 text-commerce-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Consumer Convenience</h3>
            <p className="text-muted-foreground">
              Quick commerce has redefined consumer expectations, creating unprecedented levels of 
              convenience but also dependency on immediate gratification. A balanced approach 
              can maintain convenience while reducing negative externalities.
            </p>
          </Card>
          
          <Card className="p-6">
            <div className="mb-4 h-12 w-12 rounded-full bg-commerce-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-commerce-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Labor Conditions</h3>
            <p className="text-muted-foreground">
              The human cost of ultrafast delivery is unsustainable, with high turnover, 
              safety risks, and precarious employment. Worker-centered reforms are essential 
              for the long-term viability of the quick commerce ecosystem.
            </p>
          </Card>
          
          <Card className="p-6">
            <div className="mb-4 h-12 w-12 rounded-full bg-commerce-primary/10 flex items-center justify-center">
              <LeafIcon className="h-6 w-6 text-commerce-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Environmental Impact</h3>
            <p className="text-muted-foreground">
              Current quick commerce models create disproportionate environmental harm through 
              emissions and waste. Technological innovation and process redesign can significantly 
              reduce this footprint while maintaining service quality.
            </p>
          </Card>
        </div>
        
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Finding the Path Forward</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            The future of quick commerce requires a multi-stakeholder approach that recognizes and addresses 
            the complex systemic issues while preserving the convenience that consumers value.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-medium mb-3">Balancing Speed & Sustainability</h4>
              <p className="text-sm text-muted-foreground">
                Rather than pursuing ever-faster delivery times, the industry can stabilize around 
                sustainable speed targets (20-30 minutes) while focusing innovation on efficiency, 
                worker wellbeing, and environmental impact.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-medium mb-3">Shared Responsibility</h4>
              <p className="text-sm text-muted-foreground">
                Creating sustainable quick commerce requires involvement from businesses, consumers, 
                regulators, and workers. Each stakeholder has a role in reimagining the system to 
                distribute benefits and costs more equitably.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="animate-pulse-slow">
              Download Full Research Report
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              Includes detailed methodology, data sources, and extended recommendations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
