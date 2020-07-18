import React from 'react';
import AppRouter from './router/index';
import './App.css';
import initFontAwesome from './utils/initFontAwesome';

initFontAwesome();

function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
