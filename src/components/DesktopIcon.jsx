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
      whileHover={{ scale: 1.08 }}
      whileDrag={{ scale: 1.1, zIndex: 50 }}
      aria-label={app.title}
      className="w-18 md:w-20 h-20 flex flex-col items-center justify-center gap-1.5 select-none group touch-none active:cursor-grabbing"
    >
      <div
        className={cn(app.color, 'p-2.5 rounded-2xl shadow-lg shadow-black/50')}
      >
        <app.icon className="w-6 h-6 text-white" />
      </div>
      <span
        className="text-white text-center px-1 leading-tight text-[11px] font-medium"
        style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}
      >
        {app.title}
      </span>
    </motion.button>
  );
}
