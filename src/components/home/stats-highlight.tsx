
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  value: string;
  label: string;
  description: string;
}

function StatCard({ value, label, description }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Card className="overflow-hidden transition-all duration-700 transform">
      <CardContent className="p-6">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          <p className="text-4xl font-bold text-commerce-primary mb-2">{value}</p>
          <h4 className="text-xl font-medium mb-2">{label}</h4>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsHighlight() {
  return (
    <section className="section bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container-custom">
        <h3 className="text-center mb-12">Quick Commerce by the Numbers</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            value="$72B"
            label="Market Size by 2025"
            description="The global quick commerce market is growing at an unprecedented rate"
          />
          <StatCard
            value="47%"
            label="Annual Growth Rate"
            description="One of the fastest growing segments in retail technology"
          />
          <StatCard
            value="3.5x"
            label="CO₂ Emissions"
            description="Compared to consolidated delivery models per item delivered"
          />
          <StatCard
            value="8.6M"
            label="Global Workforce"
            description="Delivery personnel involved in quick commerce globally"
          />
        </div>
      </div>
    </section>
  );
}
