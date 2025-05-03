
import { Package } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-muted py-6 md:py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5 text-commerce-primary" />
            <span className="text-sm md:text-base font-medium">
              <span className="gradient-text font-bold">Quick</span>Commerce Analysis
            </span>
          </div>
          
          <nav>
            <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm">
              <li>
                <Link to="/" className="hover:text-commerce-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/system-analysis" className="hover:text-commerce-primary transition-colors">
                  System Analysis
                </Link>
              </li>
              <li>
                <Link to="/trade-offs" className="hover:text-commerce-primary transition-colors">
                  Trade-Offs
                </Link>
              </li>
              <li>
                <Link to="/interventions" className="hover:text-commerce-primary transition-colors">
                  Interventions
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} QuickCommerce Analysis
          </div>
        </div>
      </div>
    </footer>
  );
}
