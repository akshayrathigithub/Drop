import React from 'react';
import Upload from './Components/Upload/Upload';
import ThemeProvider from './Contexts/ThemeProvider';
import './GlobalStyle.scss';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="main-app">
        <Upload />
      </div>
    </ThemeProvider>
  );
};
export default App;
