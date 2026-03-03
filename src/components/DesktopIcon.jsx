import { cn } from '../lib/utils';

export default function DesktopIcon({ app, onOpen }) {
  return (
    <button
      onClick={() => onOpen(app.id)}
      className="w-20 md:w-24 h-24 flex flex-col items-center justify-center gap-2 rounded-xl cursor-pointer select-none group"
    >
      <div className={cn(app.color, 'p-3 rounded-2xl shadow-lg transition-transform active:scale-90')}>
        <app.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
      </div>
      <span className="text-[10px] md:text-xs font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-center px-1">
        {app.title}
      </span>
    </button>
  );
}