import { useEffect, useRef } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { cn } from '../lib/utils';

const SNAP_SPRING = { type: 'spring', stiffness: 350, damping: 35 };
const DRAG_THRESHOLD = 6;

export default function DesktopIcon({ app, onOpen, x, y, onMoveEnd }) {
  const mx = useMotionValue(x);
  const my = useMotionValue(y);
  const dragging = useRef(false);
  const pointerStart = useRef(null);

  // Animate to new grid position when props change (reorder or snap after drop).
  // mx/my are stable MotionValue refs — safe to include in deps.
  useEffect(() => {
    if (dragging.current) return;
    animate(mx, x, SNAP_SPRING);
    animate(my, y, SNAP_SPRING);
  }, [x, y, mx, my]);

  const handlePointerDown = (e) => {
    pointerStart.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e) => {
    if (!pointerStart.current) return;
    const dist = Math.hypot(
      e.clientX - pointerStart.current.x,
      e.clientY - pointerStart.current.y
    );
    pointerStart.current = null;
    if (dist < DRAG_THRESHOLD) onOpen(app.id);
  };

  const handleDragEnd = (_e, info) => {
    dragging.current = false;
    if (Math.hypot(info.offset.x, info.offset.y) < DRAG_THRESHOLD) {
      animate(mx, x, SNAP_SPRING);
      animate(my, y, SNAP_SPRING);
    } else {
      onMoveEnd(app.id, mx.get(), my.get());
    }
  };

  return (
    <motion.button
      drag
      dragMomentum={false}
      style={{ x: mx, y: my, position: 'absolute', top: 0, left: 0 }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onDragStart={() => { dragging.current = true; }}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.08, zIndex: 50 }}
      className="w-20 md:w-24 h-24 flex flex-col items-center justify-center gap-2 select-none group touch-none active:cursor-grabbing"
    >
      <div
        className={cn(app.color, 'p-3')}
        style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.6), inset -2px -2px 0px rgba(0,0,0,0.25), inset 2px 2px 0px rgba(255,255,255,0.25)' }}
      >
        <app.icon className="w-7 h-7 md:w-8 md:h-8 text-white" style={{ imageRendering: 'pixelated' }} />
      </div>
      <span
        className="text-white text-center px-1 leading-tight"
        style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '7px',
          textShadow: '1px 1px 0px #000, -1px 1px 0px #000, 1px -1px 0px #000, -1px -1px 0px #000',
        }}
      >
        {app.title}
      </span>
    </motion.button>
  );
}
