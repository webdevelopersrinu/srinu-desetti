import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  Container, 
  Cpu, 
  Palette, 
  GitBranch 
} from 'lucide-react';

export const techStackData = [
  {
    name: 'React',
    icon: Code,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    level: 95
  },
  {
    name: 'Node.js',
    icon: Server,
    color: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    level: 90
  },
  {
    name: 'MongoDB',
    icon: Database,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    level: 85
  },
  {
    name: 'Express.js',
    icon: Globe,
    color: 'text-gray-700 dark:text-gray-300',
    bgColor: 'bg-gray-50 dark:bg-gray-800/50',
    level: 88
  },
  {
    name: 'Docker',
    icon: Container,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    level: 80
  },
  {
    name: 'Python',
    icon: Cpu,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    level: 75
  },
  {
    name: 'Tailwind CSS',
    icon: Palette,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
    level: 92
  },
  {
    name: 'Git',
    icon: GitBranch,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    level: 88
  }
];