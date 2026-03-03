import { Menu } from 'lucide-react';
import { LOGO_URL } from '../constants/apps';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 border-b border-white/10 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-between px-6">
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="transition-transform group-hover:scale-125 duration-300">
          <img
            src={LOGO_URL}
            alt="Slime Logo"
            className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
        <span className="font-bold text-lg tracking-tight">Rabelo Solutions</span>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-white text-black px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-zinc-200 transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] active:shadow-none active:translate-x-1 active:translate-y-1">
          Site Version
        </button>
        <button className="md:hidden text-zinc-400 p-1">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
