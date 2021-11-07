import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { AntigasCiv } from './containers/AntigasCiv';
import { IdadeMedia } from './containers/IdadeMedia';
import { IdadeModerna } from './containers/IdadeModerna';
import { RevIndustrial } from './containers/RevIndustrial';
import { SecXX } from './containers/SecXX';
import { GuerraFria } from './containers/GuerraFria';
import { Atualidade } from './containers/Atualidade';
import { Glossario } from './components/Glossario';
import { MapaMental } from './components/MapaMental';

function App() {


  return (
    <Router basemname={`/${process.env.PUBLIC_URL}`}>
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

        <Route path='/estagios/idade-media/:page'> 
          <IdadeMedia/>
        </Route>

        <Route path='/estagios/idade-moderna/:page' >
          <IdadeModerna/>
        </Route>
        
        <Route path='/estagios/revolucao-industrial/:page'>
          <RevIndustrial/>
        </Route>

        <Route path='/estagios/inicio-seculo-xx/:page'>
          <SecXX/>
        </Route>

        <Route path='/estagios/guerra-fria/:page'>
          <GuerraFria/>
        </Route>

        <Route path='/estagios/atualidade/:page'>
          <Atualidade/>
        </Route>

        <Route path='/extras/glossario'>
          <Glossario/>
        </Route>

        <Route path='/extras/mapa-mental'>
          <MapaMental/>
        </Route>

      </main>


      <Footer/>
    </Router>
  );
}

export default App;
