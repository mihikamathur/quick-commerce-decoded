
export type AnalysisItem = {
  title: string;
  description: string;
};

export type MentalModelCategory = {
  name: string;
  description: string;
  icon: JSX.Element;
  items: AnalysisItem[];
};
