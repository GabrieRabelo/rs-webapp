import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-10 border-b border-white/10 bg-black/50 backdrop-blur-xl z-[100] flex items-center justify-between px-4">
      <div className="flex items-center gap-2 cursor-pointer group">
        <div className="transition-transform group-hover:scale-110 duration-200">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-6 h-6 object-contain"
          />
        </div>
        <span className="text-white hidden sm:block text-sm font-semibold tracking-tight">
          Rabelo Solutions
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button
          disabled
          title="Work in progress..."
          className="bg-amber-400/15 text-amber-300/50 px-3 py-1 text-xs rounded-full cursor-not-allowed font-medium"
        >
          Site Version
        </button>
        <button aria-label="Menu" className="md:hidden text-zinc-400 p-1">
          <Menu size={20} />
        </button>
      </div>
    </nav>
  );
}
