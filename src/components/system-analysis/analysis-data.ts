
import { AnalysisItem, MentalModelCategory } from "./types";
import { Book, Award, Lightbulb } from "lucide-react";
import React from "react";

export const getEventItems = (): AnalysisItem[] => [
  {
    title: "Surge in 10-minute delivery services in urban areas",
    description: "Rapid expansion of quick commerce platforms promising ultra-fast delivery in densely populated cities."
  },
  {
    title: "Frequent traffic congestion caused by delivery riders",
    description: "Increased number of two-wheelers and vans on roads leads to urban traffic delays."
  },
  {
    title: "Reports of rider injuries and exhaustion",
    description: "Accidents and fatigue become common due to high-speed targets and demanding shifts."
  },
  {
    title: "Increase in packaging waste",
    description: "Small orders require individual packaging, generating more waste than bulk deliveries."
  },
  {
    title: "Customer complaints when deliveries are late",
    description: "Consumer expectations rise; even minor delays trigger dissatisfaction and negative reviews."
  }
];

export const getPatternItems = (): AnalysisItem[] => [
  {
    title: "Growing consumer dependence on ultra-fast delivery",
    description: "People begin relying on these services for routine purchases, reducing traditional shopping."
  },
  {
    title: "High turnover among delivery workers",
    description: "Riders frequently leave due to burnout, low pay, or lack of job satisfaction."
  },
  {
    title: "Increasing competition between platforms to deliver faster",
    description: "Companies constantly lower delivery time to outpace rivals, worsening labor and operational pressures."
  },
  {
    title: "Continuous rise in environmental footprint from logistics",
    description: "Emissions, energy usage, and resource consumption grow due to speed-focused operations."
  },
  {
    title: "Shrinking delivery windows → rising rider stress",
    description: "Unrealistic delivery timelines place mental and physical strain on riders."
  }
];

export const getStructureItems = (): AnalysisItem[] => [
  {
    title: "Incentive structures that reward speed over safety",
    description: "Riders are paid or rated based on quick deliveries, pushing them to take risks."
  },
  {
    title: "Lack of labour protections for platform workers",
    description: "Delivery personnel are often classified as independent contractors, missing benefits or legal safeguards."
  },
  {
    title: "Profit-driven business models prioritizing customer acquisition",
    description: "Companies focus on growth and user retention at the expense of ethical or sustainable operations."
  },
  {
    title: "Absence of sustainable urban logistics policies",
    description: "Regulatory gaps mean no checks on emissions, traffic congestion, or safety in delivery operations."
  },
  {
    title: "Consumer culture promoting instant gratification",
    description: "Shoppers value convenience and speed over environmental and social responsibility."
  }
];

export const getMentalModelCategories = (): MentalModelCategory[] => [
  {
    name: "Rules (Structures & Regulations)",
    description: "Formal and informal systems that govern how quick commerce operates",
    icon: <Book className="h-6 w-6 text-blue-600" />,
    items: [
      {
        title: "Algorithms prioritize speed over quality",
        description: "Technology systems are designed to optimize for delivery speed rather than quality or sustainability."
      },
      {
        title: "Company policies penalize lateness",
        description: "Internal reward systems punish late deliveries and reward fast ones, regardless of circumstances."
      },
      {
        title: "Lack of labor protections",
        description: "Gig workers often lack sick leave, insurance, or time-off allowances."
      },
      {
        title: "Urban zoning & infrastructure",
        description: "Cities are increasingly structured for high-speed last-mile delivery."
      }
    ]
  },
  {
    name: "Incentives (Motivations & Rewards)",
    description: "What pushes individuals and organizations to keep the system going",
    icon: <Award className="h-6 w-6 text-green-600" />,
    items: [
      {
        title: "Customer incentives",
        description: "Discounts, cashback, and free delivery for fast ordering encourage rapid consumption patterns."
      },
      {
        title: "Worker incentives",
        description: "Bonuses for meeting delivery speed targets create pressure to prioritize speed over safety."
      },
      {
        title: "Platform incentives",
        description: "Higher profit margins due to rapid turnover and increased order volume drive business decisions."
      },
      {
        title: "Investor incentives",
        description: "Funding tied to aggressive growth and market capture, not sustainability."
      }
    ]
  },
  {
    name: "Beliefs (Mental Models)",
    description: "The underlying assumptions that justify or normalize the system",
    icon: <Lightbulb className="h-6 w-6 text-amber-600" />,
    items: [
      {
        title: "Faster is better",
        description: "The belief that speed is inherently desirable in all aspects of commerce and life."
      },
      {
        title: "Time is money",
        description: "The assumption that saving time is always worth the financial, social, or environmental cost."
      },
      {
        title: "Convenience is king",
        description: "The belief that anything that makes life easier is automatically a net positive for society."
      },
      {
        title: "Technology will solve everything",
        description: "Faith that innovation will eventually cancel out any negative effects of current practices."
      }
    ]
  }
];
