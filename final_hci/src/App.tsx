import React from 'react';
import Dashboard from './components/Dashboard';
import AccessibilityControls from './components/AccessibilityControls';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <AccessibilityControls />
        <Dashboard />
      </div>
    </AppProvider>
  );
}

export default App;