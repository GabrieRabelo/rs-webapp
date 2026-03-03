import { useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Maximize2, Globe, ArrowLeft, ArrowRight, RotateCw, ChevronLeft } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';
import CVContent from '../apps/CVContent';
import { cn } from '../lib/utils';

function BrowserBar() {
  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-zinc-800/50 border-b border-white/5 shrink-0 overflow-x-auto">
      <div className="hidden md:flex gap-2">
        <ArrowLeft size={14} className="text-zinc-500" />
        <ArrowRight size={14} className="text-zinc-500" />
      </div>
      <div className="flex-1 bg-black/30 rounded-md px-3 py-1 flex items-center gap-2 border border-white/5 text-[10px] md:text-[11px] text-zinc-400 truncate">
        <Globe size={12} className="text-zinc-600" />
        <span className="truncate">rabelosolutions.com/curriculo</span>
      </div>
      <RotateCw size={14} className="text-zinc-500" />
    </div>
  );
}

function WindowContent({ app }) {
  if (app.type === 'browser') return <CVContent />;

  return (
    <div className={cn('p-6 text-zinc-300', app.type === 'terminal' ? 'font-mono text-xs md:text-sm' : 'text-sm md:text-base')}>
      {app.type === 'terminal' ? (
        <>
          <p className="text-green-400">login success: guest</p>
          <p className="mt-2">{app.content}</p>
        </>
      ) : (
        <p className="leading-relaxed">{app.content}</p>
      )}
    </div>
  );
}

export default function Window({ app, onClose, isFocused, onFocus, index = 0 }) {
  const isMobile = useIsMobile();
  const isBrowserApp = app.type === 'browser';
  const constraintsRef = useRef(null);
  const offset = index * 24;

  return (
    <motion.div
      ref={constraintsRef}
      className="absolute inset-0 top-16 pointer-events-none"
    >
      <motion.div
        drag={!isMobile}
        dragMomentum={false}
        dragConstraints={constraintsRef}
        onMouseDown={onFocus}
        initial={isMobile ? { y: '100%' } : { scale: 0.9, opacity: 0, y: 20 }}
        animate={isMobile ? { y: 0 } : { scale: 1, opacity: 1, y: 0 }}
        exit={isMobile ? { y: '100%' } : { scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        style={{ zIndex: isFocused ? 50 : 10, top: 16 + offset, left: 32 + offset }}
        className={cn(
          'absolute inset-0 bg-zinc-900/95 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col h-full pointer-events-auto',
          'md:inset-auto md:border md:border-white/10 md:rounded-xl md:h-auto',
          isBrowserApp ? 'md:w-[650px] md:h-[550px]' : 'md:w-full md:max-w-md',
        )}
      >
        {/* Title Bar */}
        <div className="flex items-center justify-between px-4 py-4 md:py-3 bg-white/5 border-b border-white/5 shrink-0">
          <div className="flex items-center gap-3 md:gap-2">
            {isMobile && (
              <button onClick={onClose} className="p-1">
                <ChevronLeft size={20} />
              </button>
            )}
            <app.icon size={16} className="text-zinc-400" />
            <span className="text-sm font-medium text-zinc-200">{app.title}</span>
          </div>
          {!isMobile && (
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-white/5 rounded text-zinc-500"><Minus size={14} /></button>
              <button className="p-1 hover:bg-white/5 rounded text-zinc-500"><Maximize2 size={14} /></button>
              <button onClick={onClose} className="p-1 hover:bg-red-500/20 hover:text-red-400 rounded text-zinc-500"><X size={14} /></button>
            </div>
          )}
        </div>

        {isBrowserApp && <BrowserBar />}

        <div className="flex-1 overflow-auto min-h-[200px]">
          <WindowContent app={app} />
        </div>
      </motion.div>
    </motion.div>
  );
}
