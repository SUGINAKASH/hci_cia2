import React, { createContext, useContext, useState, useEffect } from 'react';
import { useEyeTracking } from '../hooks/useEyeTracking';

interface AppContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  isUserPresent: boolean;
  isScreenReaderEnabled: boolean;
  toggleScreenReader: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isScreenReaderEnabled, setIsScreenReaderEnabled] = useState(false);
  const { isUserPresent } = useEyeTracking();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12));
  const toggleScreenReader = () => setIsScreenReaderEnabled(prev => !prev);

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        fontSize,
        increaseFontSize,
        decreaseFontSize,
        isUserPresent,
        isScreenReaderEnabled,
        toggleScreenReader,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext }