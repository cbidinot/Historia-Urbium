import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { AntigasCiv } from './containers/AntigasCiv';
import { IdadeMedia } from './containers/IdadeMedia';


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
        <Route path='/estagios/antigas-civilizacoes/:page'>
          <AntigasCiv/>
        </Route>
        <Route path='/estagios/idade-media/:page' >
          <IdadeMedia/>
        </Route>
        
      </main>


      <Footer/>
    </Router>
  );
}

export default App;
