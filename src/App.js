import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

function App() {

  return (
    <Router>
      <Route exact path={'/'}>
        <Redirect to='/home' />
      </Route>
      <Header/>
      <main>
        <Route exact path={'/home'}>
          <Home/>
        </Route>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
