
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package2, Clock, Users, LeafIcon } from "lucide-react";

interface QuickCommerceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function QuickCommerceCard({ icon, title, description }: QuickCommerceCardProps) {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-commerce-muted text-commerce-primary">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export function QuickCommerceIntro() {
  return (
    <section className="section bg-gradient-to-b from-white to-commerce-muted/20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-4">What is Quick Commerce?</h2>
          <p className="text-lg text-muted-foreground">
            Quick Commerce is the next evolution of e-commerce, promising ultrafast delivery
            of products in as little as 10 minutes. While this offers unprecedented convenience,
            it also raises important questions about sustainability and social impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <QuickCommerceCard
            icon={<Clock className="h-6 w-6" />}
            title="10-Minute Promise"
            description="Services like Blinkit and Zepto promise delivery in just 10 minutes, redefining consumer expectations around delivery speed."
          />
          
          <QuickCommerceCard
            icon={<Package2 className="h-6 w-6" />}
            title="Dark Store Network"
            description="Relies on strategically placed micro-fulfillment centers or 'dark stores' stocking 2,000-4,000 high-demand items."
          />
          
          <QuickCommerceCard
            icon={<Users className="h-6 w-6" />}
            title="Labor Demands"
            description="Requires an army of delivery personnel under immense pressure to meet strict time constraints regardless of traffic or weather."
          />
          
          <QuickCommerceCard
            icon={<LeafIcon className="h-6 w-6" />}
            title="Environmental Questions"
            description="Frequent, small-batch deliveries may increase carbon emissions compared to consolidated shipping models."
          />
        </div>
      </div>
    </section>
  );
}
