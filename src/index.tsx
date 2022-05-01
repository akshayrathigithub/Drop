import React from 'react';
import { createRoot } from 'react-dom/client';
import MainApp from './App';
import { THEME_OPTIONS } from './Constants/Enum';
import { LoaderProps } from './Interface/Interface';

const { useEffect } = React;

const loader: HTMLElement | null = document.querySelector('.loader');
// setting loader background color based on theme
const savedThemeLocal = localStorage.getItem('globalTheme');
if (loader) {
  if (savedThemeLocal === THEME_OPTIONS.DARK) {
    loader.style.backgroundColor = '#23262a';
  } else {
    loader.style.backgroundColor = '#f8f8ff';
  }
}

// if you want to show the loader when React loads data again
const hideLoader = () => {
  if (loader) {
    loader.classList.add('loader--hide');
  }
};
const App: React.FC<LoaderProps> = (props) => {
  useEffect(() => {
    props.hideLoader();
  }, []);

  return <MainApp />;
};
const container = document.getElementById('rootApp') as HTMLDivElement;
const root = createRoot(container);
root.render(<App hideLoader={hideLoader} />);
