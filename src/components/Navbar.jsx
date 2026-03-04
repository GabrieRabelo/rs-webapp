import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-10 border-b border-white/10 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-between px-4">
      <div className="flex items-center gap-2 cursor-pointer group">
        <div className="transition-transform group-hover:scale-125 duration-300">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-7 h-7 object-contain"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
        <span
          className="text-white hidden sm:block"
          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '9px', textShadow: '1px 1px 0 #000' }}
        >
          Rabelo Solutions
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="bg-amber-400 text-black px-3 py-1 text-[7px] hover:bg-amber-300 transition-colors active:translate-x-[2px] active:translate-y-[2px]"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            boxShadow: '3px 3px 0px rgba(0,0,0,0.7)',
          }}
        >
          Site Version
        </button>
        <button aria-label="Menu" className="md:hidden text-zinc-400 p-1">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
