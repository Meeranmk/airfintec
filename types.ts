
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface CalculatorResult {
  monthlyPayment?: number;
  totalInterest?: number;
  totalPayment?: number;
  roi?: number;
  paybackPeriod?: number;
  annualSavings?: number;
}

export enum Page {
  Home = 'home',
  About = 'about',
  Services = 'services',
  Calculators = 'calculators',
  Contact = 'contact'
}
