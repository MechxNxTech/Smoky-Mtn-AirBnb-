export interface OptimizationResult {
  title: string;
  description: string;
  pricingStrategy: string;
  amenitiesSuggestions: string[];
}

export interface LeadForm {
  name: string;
  email: string;
  phone: string;
  propertyAddress: string;
}

export enum ViewState {
  HOME = 'HOME',
  AI_TOOL = 'AI_TOOL',
  CONTACT = 'CONTACT'
}