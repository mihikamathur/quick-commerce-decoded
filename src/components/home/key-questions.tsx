
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

interface QuestionCardProps {
  question: string;
  explanation: string;
}

function QuestionCard({ question, explanation }: QuestionCardProps) {
  return (
    <Card className="card-hover h-full">
      <CardContent className="pt-6">
        <h4 className="text-xl font-semibold mb-3 text-commerce-primary">{question}</h4>
        <p className="text-muted-foreground">{explanation}</p>
      </CardContent>
    </Card>
  );
}

export function KeyQuestions() {
  return (
    <section className="section bg-gradient-to-b from-commerce-muted/20 to-white">
      <div className="container-custom">
        <SectionHeader
          title="Key Questions We Explore"
          subtitle="Our analysis dives deep into several critical aspects of the quick commerce phenomenon"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <QuestionCard
            question="Is speed sustainable?"
            explanation="We examine the environmental footprint of ultrafast delivery models compared to traditional e-commerce and physical shopping."
          />
          <QuestionCard
            question="What are the human costs?"
            explanation="We investigate how delivery time pressures affect worker safety, job satisfaction, and overall labor conditions."
          />
          <QuestionCard
            question="How is consumer behavior changing?"
            explanation="We analyze how instant gratification is reshaping purchase patterns and customer expectations in retail."
          />
          <QuestionCard
            question="Who benefits most?"
            explanation="We explore the distribution of value among consumers, workers, and companies in the quick commerce ecosystem."
          />
          <QuestionCard
            question="Are current models viable?"
            explanation="We evaluate the economic sustainability of quick commerce business models beyond venture capital funding."
          />
          <QuestionCard
            question="What interventions could help?"
            explanation="We propose potential solutions to address the negative externalities while preserving convenience."
          />
        </div>
      </div>
    </section>
  );
}
