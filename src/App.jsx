import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { APPS, WALLPAPER_URL } from './constants/apps';
import Navbar from './components/Navbar';
import Dock from './components/Dock';
import StatusBar from './components/StatusBar';
import DesktopIcon from './components/DesktopIcon';
import Window from './components/Window';

export default function App() {
  const [openApps, setOpenApps] = useState([]);
  const [focusedApp, setFocusedApp] = useState(null);

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
        style={{ backgroundImage: `url('${WALLPAPER_URL}')` }}
      />
      <div className="absolute inset-0 z-1 bg-black/10 backdrop-brightness-75" />

      <main className="relative z-10 w-full h-[calc(100vh-80px)] pt-18 md:pt-20 px-4 md:px-8 grid grid-cols-3 sm:grid-cols-4 md:grid-flow-col md:grid-rows-5 gap-6 md:gap-6 justify-items-start content-start">
        {APPS.map(app => (
          <DesktopIcon key={app.id} app={app} onOpen={openApp} />
        ))}

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
      <StatusBar />
    </div>
  );
}
