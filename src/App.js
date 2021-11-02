import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <main>
        {/*<div style={{ height: '1000px', background: 'blue'}}></div>*/}
        <Route path={'/home' && '/'}>
          <Home/>
        </Route>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
