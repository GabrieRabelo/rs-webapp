import { Folder, User, Terminal, FileText } from 'lucide-react';

export const WALLPAPER_URL = 'https://i.ibb.co/pBHm4xJx/wallpaper.jpg';
export const LOGO_URL = 'https://www.tibiawiki.com.br/images/f/fd/Slime_%28Old%29.gif';

export const APPS = [
  {
    id: 'about',
    title: 'Sobre Mim',
    icon: User,
    color: 'bg-blue-500',
    type: 'default',
    content: 'Engenheiro de Software apaixonado por interfaces fluidas e sistemas escaláveis. Atualmente focado no ecossistema Java/Kotlin e Frontend moderno.',
  },
  {
    id: 'cv',
    title: 'Currículo',
    icon: FileText,
    color: 'bg-emerald-500',
    type: 'browser',
  },
  {
    id: 'projects',
    title: 'Projetos',
    icon: Folder,
    color: 'bg-amber-500',
    type: 'default',
    content: 'Explore meu portfólio de microserviços e aplicações React no GitHub.',
  },
  {
    id: 'terminal',
    title: 'Terminal',
    icon: Terminal,
    color: 'bg-zinc-800',
    type: 'terminal',
    content: 'guest@rabelosolutions:~$ echo "Bem-vindo ao meu terminal!"',
  },
];
