import React from 'react';
import { Sun, Moon, ZoomIn, ZoomOut, Mic } from 'lucide-react';
import { useAppContext } from '../hooks/useAppContext';

export default function AccessibilityControls() {
  const {
    isDarkMode,
    toggleDarkMode,
    increaseFontSize,
    decreaseFontSize,
    isScreenReaderEnabled,
    toggleScreenReader
  } = useAppContext();

  return (
    <div className="fixed top-4 right-4 flex items-center space-x-2 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label={isDarkMode ? 'Enable light mode' : 'Enable dark mode'}
      >
        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>
      
      <button
        onClick={increaseFontSize}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Increase font size"
      >
        <ZoomIn className="h-5 w-5" />
      </button>
      
      <button
        onClick={decreaseFontSize}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Decrease font size"
      >
        <ZoomOut className="h-5 w-5" />
      </button>
      
      <button
        onClick={toggleScreenReader}
        className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
          isScreenReaderEnabled ? 'text-indigo-600' : ''
        }`}
        aria-label={isScreenReaderEnabled ? 'Disable screen reader' : 'Enable screen reader'}
      >
        <Mic className="h-5 w-5" />
      </button>
    </div>
  );
}