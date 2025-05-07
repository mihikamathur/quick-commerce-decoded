
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EventsTab } from "./EventsTab";
import { PatternsTab } from "./PatternsTab";
import { StructuresTab } from "./StructuresTab";
import { MentalModelsTab } from "./MentalModelsTab";
import { getEventItems, getPatternItems, getStructureItems, getMentalModelCategories } from "./analysis-data";

export function EventPatternStructure() {
  const [activeTab, setActiveTab] = useState("events");

  const eventItems = getEventItems();
  const patternItems = getPatternItems();
  const structureItems = getStructureItems();
  const mentalModelCategories = getMentalModelCategories();

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="section bg-commerce-muted/10">
      <div className="container-custom">
        <SectionHeader
          title="Event-Pattern-Structure-Mental Models Analysis"
          subtitle="Analyzing quick commerce at multiple levels of systemic depth"
          centered
        />
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <Tabs defaultValue="events" onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto mb-6">
                <TabsTrigger value="events" className="py-3">Events</TabsTrigger>
                <TabsTrigger value="patterns">Patterns</TabsTrigger>
                <TabsTrigger value="structures">Structures</TabsTrigger>
                <TabsTrigger value="mental-models">Mental Models</TabsTrigger>
              </TabsList>
              
              <TabsContent value="events">
                <EventsTab 
                  eventItems={eventItems}
                  onNavigateNext={() => handleNavigate("patterns")}
                />
              </TabsContent>
              
              <TabsContent value="patterns">
                <PatternsTab 
                  patternItems={patternItems}
                  onNavigateNext={() => handleNavigate("structures")}
                  onNavigatePrev={() => handleNavigate("events")}
                />
              </TabsContent>
              
              <TabsContent value="structures">
                <StructuresTab 
                  structureItems={structureItems}
                  onNavigateNext={() => handleNavigate("mental-models")}
                  onNavigatePrev={() => handleNavigate("patterns")}
                />
              </TabsContent>
              
              <TabsContent value="mental-models">
                <MentalModelsTab 
                  mentalModelCategories={mentalModelCategories}
                  onNavigatePrev={() => handleNavigate("structures")}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
