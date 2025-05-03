
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  centered = false, 
  className,
  children 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-10 space-y-2",
      centered && "text-center",
      className
    )}>
      <h2 className={cn(
        "font-bold tracking-tight", 
        centered ? "mx-auto" : ""
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-muted-foreground text-lg",
          centered ? "mx-auto max-w-3xl" : ""
        )}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
