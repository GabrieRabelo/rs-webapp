import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// Grid cell step sizes (icon size + gap)
export const STEP_X = 88; // w-20 (80px) + 8px gap
export const STEP_Y = 96;  // h-20 (80px) + 16px gap

// Grid origin offsets within the main container
// ORIGIN_Y accounts for the fixed navbar (h-16 = 64px) + breathing room
export const ORIGIN_X = 16;
export const ORIGIN_Y = 80;

export function cellToPixel(col, row) {
  return {
    x: ORIGIN_X + col * STEP_X,
    y: ORIGIN_Y + row * STEP_Y,
  };
}

/**
 * Manages icon positions as a column-first ordered list.
 * Icons are placed top→bottom, then left→right.
 * Dragging an icon reorders the list and all icons animate to new positions.
 */
export function useDesktopGrid(apps) {
  const containerRef = useRef(null);
  const [maxRows, setMaxRows] = useState(5);

  // Recompute maxRows when the container itself resizes (more accurate than window resize)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const availableH = entry.contentRect.height - ORIGIN_Y - 16;
      setMaxRows(Math.max(1, Math.floor(availableH / STEP_Y)));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Ordered list of icon IDs; index determines grid position (column-first)
  const [iconOrder, setIconOrder] = useState(() => apps.map(a => a.id));

  // Derive pixel positions from iconOrder + maxRows (memoized to avoid recomputing every render)
  const positions = useMemo(() => iconOrder.reduce((acc, id, i) => {
    const col = Math.floor(i / maxRows);
    const row = i % maxRows;
    acc[id] = cellToPixel(col, row);
    return acc;
  }, {}), [iconOrder, maxRows]);

  /**
   * Called when an icon is dropped.
   * Converts pixel coords to target slot, removes icon from old slot,
   * inserts at new slot — other icons cascade to fill gaps.
   */
  const moveIcon = useCallback((movedId, pixelX, pixelY) => {
    setIconOrder(prev => {
      const rows = maxRows;
      const col = Math.max(0, Math.round((pixelX - ORIGIN_X) / STEP_X));
      const row = Math.max(0, Math.min(rows - 1, Math.round((pixelY - ORIGIN_Y) / STEP_Y)));
      const targetSlot = col * rows + row;

      const withoutMoved = prev.filter(id => id !== movedId);
      const insertAt = Math.min(Math.max(0, targetSlot), withoutMoved.length);

      return [
        ...withoutMoved.slice(0, insertAt),
        movedId,
        ...withoutMoved.slice(insertAt),
      ];
    });
  }, [maxRows]);

  return { containerRef, positions, moveIcon };
}
