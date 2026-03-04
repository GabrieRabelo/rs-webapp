import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { APPS } from './constants/apps';
import wallpaper from './assets/wallpaper.png';
import Navbar from './components/Navbar';
import Dock from './components/Dock';
import DesktopIcon from './components/DesktopIcon';
import Window from './components/Window';
import { useDesktopGrid } from './hooks/useDesktopGrid';

export default function App() {
  const [openApps, setOpenApps] = useState([]);
  const [focusedApp, setFocusedApp] = useState(null);
  const { containerRef, positions, moveIcon } = useDesktopGrid(APPS);

  const openApp = (appId) => {
    setOpenApps(prev => prev.includes(appId) ? prev : [...prev, appId]);
    setFocusedApp(appId);
  };

  const closeApp = (appId) => {
    setOpenApps(prev => prev.filter(id => id !== appId));
    setFocusedApp(prev => (prev === appId ? null : prev));
  };

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden font-sans text-zinc-200 select-none">
      <Navbar />

      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${wallpaper})` }}
      />
      <div className="absolute inset-0 z-1 bg-black/10 backdrop-brightness-75" />

      <main ref={containerRef} className="relative z-10 w-full h-[calc(100vh-40px)]">
        {APPS.map(app => {
          const pos = positions[app.id] ?? { x: 16, y: 80 };
          return (
            <DesktopIcon
              key={app.id}
              app={app}
              x={pos.x}
              y={pos.y}
              onOpen={openApp}
              onMoveEnd={moveIcon}
            />
          );
        })}

        <AnimatePresence>
          {openApps.map((appId, index) => (
            <Window
              key={appId}
              app={APPS.find(a => a.id === appId)}
              isFocused={focusedApp === appId}
              onFocus={() => setFocusedApp(appId)}
              onClose={() => closeApp(appId)}
              index={index}
            />
          ))}
        </AnimatePresence>
      </main>

      <Dock apps={APPS} openApps={openApps} onOpen={openApp} />
    </div>
  );
}
