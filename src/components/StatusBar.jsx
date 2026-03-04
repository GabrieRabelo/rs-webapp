import { useState, useEffect } from 'react';

export default function StatusBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed top-10 right-6 z-[60] hidden md:block">
      <div
        className="px-3 py-1 bg-black/50 border border-white/20 text-white"
        style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px', boxShadow: '2px 2px 0px rgba(0,0,0,0.7)' }}
      >
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
}