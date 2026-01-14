
import React from 'react';
import {
  Wrench,
  Settings,
  Lightbulb,
  ShieldCheck,
  Truck,
  Clock,
  Briefcase,
  Users,
  Target,
  Globe
} from 'lucide-react';
import { Service } from './types';

export const COLORS = {
  primary: '#FF8C00',
  darkGray: '#333333',
  lightGray: '#F5F5F5',
  mediumGray: '#666666',
  borderGray: '#E0E0E0',
};

export const SERVICES: Service[] = [
  {
    id: 'finned-tube',
    title: 'Finned Tube Replacement',
    description: 'Rapid fin tube replacement services maximizing equipment uptime through specialized re-tubing processes.',
    icon: 'Wrench',
    details: [
      'Inspection and Preparation',
      'Specialized Tube Removal',
      'Fin Inspection and Repair',
      'New Tube Installation',
      'Pressure Testing & Certification'
    ]
  },
  {
    id: 'ache-erection',
    title: 'ACHE Erection Services',
    description: 'Comprehensive installation services leveraging deep expertise for efficient, precise setup and seamless startup.',
    icon: 'Settings',
    details: [
      'Foundation Preparation & Alignment',
      'Structural Assembly',
      'Tube Bundle Installation',
      'Mechanical Equipment Setup',
      'Pre-Commissioning & Testing'
    ]
  },
  {
    id: 'supervision',
    title: 'Supervision Services',
    description: 'Expert supervision for ACHE erection and trial runs, managing every detail from scheduling to commissioning.',
    icon: 'ShieldCheck',
    details: [
      'End-to-End Project Supervision',
      'Manpower Planning & Coordination',
      'Tools & Equipment Management',
      'Quality Control & Inspection',
      'Final Commissioning Support'
    ]
  },
  {
    id: 'ache-spares',
    title: 'ACHE Spares Supply',
    description: 'Comprehensive range of AVL-compliant components with thorough quality inspection and efficient delivery.',
    icon: 'Truck',
    details: [
      'Finned Tubes & Headers',
      'Plugs, Gaskets & Fasteners',
      'Fans, Motors & Bearings',
      'Belts, Pulleys & Guards',
      'Complete Structural Components'
    ]
  }
];

export const CORE_VALUES = [
  {
    title: 'Quality First',
    description: 'Never compromise on ACHE spares or services quality, meeting AVL standards.',
    icon: <ShieldCheck className="w-8 h-8 text-[#FF8C00]" />
  },
  {
    title: 'Customer Focus',
    description: 'Dedicated to rapidly meeting global client needs with cost-effective solutions.',
    icon: <Users className="w-8 h-8 text-[#FF8C00]" />
  },
  {
    title: 'Integrity & Trust',
    description: 'Operating with transparency and honesty in every deal and relationship.',
    icon: <Target className="w-8 h-8 text-[#FF8C00]" />
  },
  {
    title: 'Efficiency & Speed',
    description: 'Optimized supply chain to minimize client downtime consistently.',
    icon: <Clock className="w-8 h-8 text-[#FF8C00]" />
  },
  {
    title: 'Global Responsibility',
    description: 'Committed to sustainable and responsible business practices worldwide.',
    icon: <Globe className="w-8 h-8 text-[#FF8C00]" />
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Settings': return <Settings className="w-6 h-6" />;
    case 'Wrench': return <Wrench className="w-6 h-6" />;
    case 'Lightbulb': return <Lightbulb className="w-6 h-6" />;
    case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
    case 'Truck': return <Truck className="w-6 h-6" />;
    case 'Clock': return <Clock className="w-6 h-6" />;
    case 'Briefcase': return <Briefcase className="w-6 h-6" />;
    case 'Users': return <Users className="w-6 h-6" />;
    case 'Target': return <Target className="w-6 h-6" />;
    case 'Globe': return <Globe className="w-6 h-6" />;
    default: return <Settings className="w-6 h-6" />;
  }
};
