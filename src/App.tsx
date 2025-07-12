import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { LanguageProvider } from './components/LanguageContext';
import CardLanding from './components/CardLanding';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <CardLanding />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;