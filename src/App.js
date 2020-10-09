import React from 'react';
import 'normalize.css';
import './scss/app.scss';

import Header from './components/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
