import { Folder, User, Terminal, FileText } from 'lucide-react';

export const APPS = [
  {
    id: 'about',
    title: 'About Me',
    icon: User,
    color: 'bg-sky-400',
    type: 'default',
    content: 'Software Engineer with 6+ years building high-reliability fintech systems at Nubank and Sicredi. Specialized in Java, Kotlin, and Clojure, with deep experience in distributed systems, microservices, and event-driven architectures at scale. Passionate about functional programming, technical mentorship, and AI-driven developer tooling.',
  },
  {
    id: 'cv',
    title: 'Resume',
    icon: FileText,
    color: 'bg-green-600',
    type: 'browser',
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: Folder,
    color: 'bg-amber-400',
    type: 'default',
    content: 'Most of my work lives behind bank-grade firewalls — classified! 🔒 For the stuff I can show, check GitHub → GabrieRabelo for experimental projects and open-source tinkering.',
  },
  {
    id: 'terminal',
    title: 'Terminal',
    icon: Terminal,
    color: 'bg-stone-700',
    type: 'terminal',
    content: 'guest@rabelosolutions:~$ echo "Welcome to my terminal!"',
  },
];
