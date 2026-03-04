import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { APPS } from './constants/apps';
import wallpaper from './assets/wallpaper.png';
import wallpaperMobile from './assets/wallpaper-mobile.png';
import { useIsMobile } from './hooks/useIsMobile';
import Navbar from './components/Navbar';
import Dock from './components/Dock';
import DesktopIcon from './components/DesktopIcon';
import Window from './components/Window';
import { useDesktopGrid } from './hooks/useDesktopGrid';

function MobileIcon({ app, onOpen }) {
  return (
    <button
      onClick={() => onOpen(app.id)}
      aria-label={app.title}
      className="flex flex-col items-center justify-center gap-2 py-2 active:scale-90 transition-transform"
    >
      <div
        className={`${app.color} p-3`}
        style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.6), inset -2px -2px 0px rgba(0,0,0,0.25), inset 2px 2px 0px rgba(255,255,255,0.25)' }}
      >
        <app.icon className="w-8 h-8 text-white" />
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
    </button>
  );
}

export default function App() {
  const [openApps, setOpenApps] = useState([]);
  const [focusedApp, setFocusedApp] = useState(null);
  const isMobile = useIsMobile();
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

      {/* Wallpaper */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${wallpaper})` }}
      />
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${wallpaperMobile})` }}
      />
      <div className="absolute inset-0 z-1 bg-black/10 backdrop-brightness-75" />

      <main ref={containerRef} className="relative z-10 w-full h-[calc(100vh-40px)]">

        {/* Mobile: static home-screen icon grid */}
        {isMobile ? (
          <div className="grid grid-cols-3 gap-x-4 gap-y-6 px-10 pt-10">
            {APPS.map(app => (
              <MobileIcon key={app.id} app={app} onOpen={openApp} />
            ))}
          </div>
        ) : (
          APPS.map(app => {
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
          })
        )}

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
