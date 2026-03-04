import { Folder, User, Terminal, FileText } from 'lucide-react';

export const LOGO_URL = 'https://www.tibiawiki.com.br/images/f/fd/Slime_%28Old%29.gif';

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
    content: 'Explore my portfolio of microservices and React applications on GitHub.',
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
