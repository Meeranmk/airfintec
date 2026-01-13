
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
  primary: '#CC0000',
  darkGray: '#333333',
  lightGray: '#F5F5F5',
  mediumGray: '#666666',
  borderGray: '#E0E0E0',
};

export const SERVICES: Service[] = [
  {
    id: 'ache-spares',
    title: 'ACHE Spares Supply',
    description: 'Comprehensive range of components for all types of Air-Cooled Heat Exchangers.',
    icon: 'Settings',
    details: [
      'Finned Tubes (L-Foot, G-Base, Extruded)',
      'Fan Assemblies & Blades',
      'Plugs & Gaskets',
      'Tube Bundles',
      'Structural Components'
    ]
  },
  {
    id: 'finned-tube',
    title: 'Finned Tube Replacement',
    description: 'Services for on-site or off-site replacement of critical finned tube sections.',
    icon: 'Wrench',
    details: [
      'On-site Tube Extraction',
      'Precise Installation',
      'Testing & Certification',
      'Custom Fabrication'
    ]
  },
  {
    id: 'technical-consulting',
    title: 'Technical Consulting',
    description: 'Expert advice from professionals with 20+ years of industry experience.',
    icon: 'Lightbulb',
    details: [
      'Performance Audits',
      'Troubleshooting',
      'Design Improvements',
      'Project Planning'
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance Services',
    description: 'Predictive and preventive maintenance programs to ensure maximum uptime.',
    icon: 'ShieldCheck',
    details: [
      'Cleaning & Descaling',
      'Vibration Analysis',
      'Coating Services',
      'Structural Repairs'
    ]
  }
];

export const CORE_VALUES = [
  {
    title: 'Quality First',
    description: 'Never compromise on ACHE spares or services quality.',
    icon: <ShieldCheck className="w-8 h-8 text-[#CC0000]" />
  },
  {
    title: 'Customer Focus',
    description: 'Understanding and meeting the needs of global clientele.',
    icon: <Users className="w-8 h-8 text-[#CC0000]" />
  },
  {
    title: 'Integrity & Trust',
    description: 'Operating with transparency and honesty in every deal.',
    icon: <Target className="w-8 h-8 text-[#CC0000]" />
  },
  {
    title: 'Efficiency & Speed',
    description: 'Optimized supply chain to minimize client downtime.',
    icon: <Clock className="w-8 h-8 text-[#CC0000]" />
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
