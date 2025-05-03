
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Package } from "lucide-react";

const NavItem = ({ to, children, active }: { to: string; children: React.ReactNode; active: boolean }) => (
  <li className="relative">
    <Link 
      to={to} 
      className={cn(
        "px-3 py-2 text-sm font-medium transition-colors hover:text-commerce-primary",
        active ? "text-commerce-primary" : "text-foreground/80"
      )}
    >
      {children}
      {active && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-commerce-primary" />
      )}
    </Link>
  </li>
);

export function Navbar() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Package className="h-6 w-6 text-commerce-primary" />
          <Link to="/" onClick={() => setCurrentPath("/")} className="font-bold text-xl">
            <span className="gradient-text">Quick</span>Commerce
          </Link>
        </div>
        
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-1">
            <NavItem to="/" active={currentPath === "/"}>Home</NavItem>
            <NavItem to="/system-analysis" active={currentPath === "/system-analysis"}>System Analysis</NavItem>
            <NavItem to="/trade-offs" active={currentPath === "/trade-offs"}>Trade-Offs</NavItem>
            <NavItem to="/interventions" active={currentPath === "/interventions"}>Interventions</NavItem>
          </ul>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com/yourusername/quick-commerce-analysis" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}
