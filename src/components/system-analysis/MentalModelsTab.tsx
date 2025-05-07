
import { AlertCircle } from "lucide-react";
import { MentalModelCategory } from "./types";
import { ChevronRight } from "lucide-react";

interface MentalModelsTabProps {
  mentalModelCategories: MentalModelCategory[];
  onNavigatePrev: () => void;
}

export function MentalModelsTab({ mentalModelCategories, onNavigatePrev }: MentalModelsTabProps) {
  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-xl animate-pulse">
          M
        </div>
        <div>
          <h3 className="text-xl font-semibold">Mental Models</h3>
          <p className="text-muted-foreground">The deep beliefs, assumptions, and values that create and sustain structures</p>
        </div>
      </div>
      
      <div className="space-y-6">
        {mentalModelCategories.map((category, categoryIndex) => (
          <div 
            key={categoryIndex} 
            className="border border-amber-200 rounded-lg overflow-hidden animate-fade-in"
            style={{ animationDelay: `${categoryIndex * 150}ms` }}
          >
            <div className="bg-amber-50 p-4 flex items-center gap-3">
              {category.icon}
              <div>
                <h3 className="font-medium text-amber-800">{category.name}</h3>
                <p className="text-sm text-amber-700/70">{category.description}</p>
              </div>
            </div>
            
            <div className="divide-y divide-amber-100">
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="p-4 hover:bg-amber-50/50 transition-colors animate-fade-in"
                  style={{ animationDelay: `${(categoryIndex * 150) + (itemIndex * 100)}ms` }}
                >
                  <h4 className="font-medium text-amber-700 mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 mt-4 bg-blue-50 border border-blue-100 rounded-lg animate-fade-in animate-pulse">
        <h4 className="font-medium text-blue-700 mb-2 flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          System Leverage Point
        </h4>
        <p className="text-muted-foreground text-sm">
          Transforming mental models offers the highest leverage for system change. By shifting our collective beliefs about speed, 
          convenience, and what constitutes progress, we can reshape structures, alter patterns, and create new events.
        </p>
      </div>
      
      <div className="flex justify-start mt-6">
        <button 
          onClick={onNavigatePrev} 
          className="flex items-center gap-1 text-amber-600 text-sm font-medium hover:underline group"
        >
          <ChevronRight className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" /> Back to Structures
        </button>
      </div>
    </div>
  );
}
