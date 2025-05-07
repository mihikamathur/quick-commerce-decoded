
import { ChevronRight } from "lucide-react";
import { AnalysisItem } from "./types";

interface StructuresTabProps {
  structureItems: AnalysisItem[];
  onNavigateNext: () => void;
  onNavigatePrev: () => void;
}

export function StructuresTab({ structureItems, onNavigateNext, onNavigatePrev }: StructuresTabProps) {
  return (
    <div className="animate-fade-in space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl">
          S
        </div>
        <div>
          <h3 className="text-xl font-semibold">Structures</h3>
          <p className="text-muted-foreground">The underlying systems, policies, and frameworks that generate the patterns</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {structureItems.map((item, index) => (
          <div 
            key={index} 
            className="p-4 rounded-lg border border-green-100 bg-green-50 hover:bg-green-100 transition-colors animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h4 className="font-medium text-green-700 mb-1">{item.title}</h4>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between mt-6">
        <button 
          onClick={onNavigatePrev} 
          className="flex items-center gap-1 text-green-600 text-sm font-medium hover:underline group"
        >
          <ChevronRight className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" /> Back to Patterns
        </button>
        <button 
          onClick={onNavigateNext} 
          className="flex items-center gap-1 text-green-600 text-sm font-medium hover:underline group"
        >
          Next: Mental Models <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
