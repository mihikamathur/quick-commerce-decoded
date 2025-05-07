
import { ChevronRight } from "lucide-react";
import { AnalysisItem } from "./types";

interface EventsTabProps {
  eventItems: AnalysisItem[];
  onNavigateNext: () => void;
}

export function EventsTab({ eventItems, onNavigateNext }: EventsTabProps) {
  return (
    <div className="animate-fade-in space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
          E
        </div>
        <div>
          <h3 className="text-xl font-semibold">Events</h3>
          <p className="text-muted-foreground">The visible occurrences that we can readily observe</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {eventItems.map((item, index) => (
          <div 
            key={index} 
            className="p-4 rounded-lg border border-blue-100 bg-blue-50 hover:bg-blue-100 transition-colors animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h4 className="font-medium text-blue-700 mb-1">{item.title}</h4>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-end mt-6">
        <button 
          onClick={onNavigateNext} 
          className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline group"
        >
          Next: Patterns <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
