
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative pb-20 pt-24 md:pt-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white" />
      
      {/* Animated blobs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-spin-slow -z-10" />
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-spin-slow -z-10" />
      <div className="absolute bottom-0 right-1/2 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-spin-slow -z-10" />
      
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-commerce-muted p-3 mb-6 animate-fade-in">
            <Package className="h-6 w-6 text-commerce-primary" />
          </div>
          
          <h1 className="max-w-4xl animate-fade-in">
            The Rise of <span className="gradient-text">Quick Commerce</span>:<br />
            <span className="text-commerce-dark/80">10-Minute Deliveries and Their Hidden Impact</span>
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-in delay-100">
            Exploring how ultrafast delivery is changing consumer behavior and the trade-offs
            in terms of environmental costs and labor conditions.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in delay-200">
            <Button asChild size="lg">
              <Link to="/system-analysis">
                Explore System Analysis
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/trade-offs">
                View Trade-Offs
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
