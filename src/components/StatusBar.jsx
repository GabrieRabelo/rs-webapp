import { useState, useEffect } from 'react';

export default function StatusBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed top-16 right-6 z-[60] hidden md:block">
      <div className="px-3 py-1 bg-black/20 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-bold text-white shadow-lg">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
}