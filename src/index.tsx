import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style.scss';
import Home from './home/home';
import About from './about/about';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
    <About />
  </React.StrictMode>
);
