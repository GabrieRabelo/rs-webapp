import { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { cn } from '../lib/utils';

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px', textShadow: '1px 1px 0px #000' }}>
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </span>
  );
}

export default function Dock({ apps, openApps, onOpen }) {
  return (
    <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-60 w-max max-w-[95vw]">
      <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 bg-zinc-900/60 backdrop-blur-3xl border border-white/20 rounded-3xl shadow-2xl">
        {apps.map(app => (
          <button
            key={app.id}
            onClick={() => onOpen(app.id)}
            aria-label={app.title}
            title={app.title}
            className="relative p-2 rounded-xl transition-all hover:bg-white/10 active:scale-75"
          >
            <app.icon
              size={22}
              className={cn(openApps.includes(app.id) ? 'text-white' : 'text-zinc-400')}
            />
            {openApps.includes(app.id) && (
              <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
            )}
          </button>
        ))}
        <div className="w-px h-6 bg-white/10 mx-1" />
        <a href="https://github.com/GabrieRabelo" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="p-2 text-zinc-400 hover:text-white transition-colors">
          <Github size={22} />
        </a>
        <a href="https://linkedin.com/in/rabelito" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="p-2 text-zinc-400 hover:text-white transition-colors">
          <Linkedin size={22} />
        </a>
        <div className="w-px h-6 bg-white/10 mx-1" />
        <div className="px-2 text-white">
          <Clock />
        </div>
      </div>
    </div>
  );
}
