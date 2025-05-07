
import { ChevronRight } from "lucide-react";
import { AnalysisItem } from "./types";

interface PatternsTabProps {
  patternItems: AnalysisItem[];
  onNavigateNext: () => void;
  onNavigatePrev: () => void;
}

export function PatternsTab({ patternItems, onNavigateNext, onNavigatePrev }: PatternsTabProps) {
  return (
    <div className="animate-fade-in space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xl">
          P
        </div>
        <div>
          <h3 className="text-xl font-semibold">Patterns</h3>
          <p className="text-muted-foreground">The trends and repeated behaviors that emerge over time</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {patternItems.map((item, index) => (
          <div 
            key={index} 
            className="p-4 rounded-lg border border-purple-100 bg-purple-50 hover:bg-purple-100 transition-colors animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h4 className="font-medium text-purple-700 mb-1">{item.title}</h4>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between mt-6">
        <button 
          onClick={onNavigatePrev} 
          className="flex items-center gap-1 text-purple-600 text-sm font-medium hover:underline group"
        >
          <ChevronRight className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" /> Back to Events
        </button>
        <button 
          onClick={onNavigateNext} 
          className="flex items-center gap-1 text-purple-600 text-sm font-medium hover:underline group"
        >
          Next: Structures <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
