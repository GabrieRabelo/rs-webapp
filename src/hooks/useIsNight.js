import { useState, useEffect } from 'react';

function isNightHour() {
  const h = new Date().getHours();
  return h >= 18 || h < 6;
}

export function useIsNight() {
  const [isNight, setIsNight] = useState(isNightHour);

  useEffect(() => {
    const tick = () => setIsNight(isNightHour());
    // Check every minute — wallpaper switch is not time-critical
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  return isNight;
}