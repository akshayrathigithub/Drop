import React from 'react';
import ThemeProvider from './Contexts/ThemeProvider';
import './GlobalStyle.scss';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="main-app">This is the App Component !!!</div>
    </ThemeProvider>
  );
};
export default App;
