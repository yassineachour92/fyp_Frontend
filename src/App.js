import './App.css';
import React, { useState, useEffect, useContext } from 'react'

import DemoCarousel from './carousel/carousel';
import Contact from './Contact/Contact';
import Description from './description/Description';
import NavBar from './navBar/NavBar';
import Service from './services/Service';
import TrustMe from './trustMe/TrustMe';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './about/About';
import Particular from './particular/Particular';
import Professionnel from './professionnel/Professionnel';
import ListClient from './Admin/ClientList/ListClient';
// import { useParams } from 'react-router'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <BrowserRouter>

      <div className="App" data-testid="App">
        <Switch>
          <Route exact path="/">
            <div onClick={() => setIsMenuOpen(false)}>
              <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
              <DemoCarousel />
              <Description />
              <Service />
              <TrustMe />
              <div className="video">
                VIDEO : présentation fyp

              </div>
              <Contact />
            </div>
          </Route>
          <Route exact path="/about">
            <div onClick={() => setIsMenuOpen(false)}>
              <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

              <About />
            </div>
          </Route>
          <Route exact path="/particular">
            <div onClick={() => setIsMenuOpen(false)}>
              <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

              <Particular />
            </div>
          </Route>
          <Route exact path="/Professional">
            <div onClick={() => setIsMenuOpen(false)}>
              <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
              <Professionnel />
            </div>
          </Route>
        </Switch>
      </div>
      <div>
      <Switch>
          <Route exact path="/admin">
            <ListClient />
          </Route>
      </Switch>
</div>
    </BrowserRouter>
  );
}

export default App;
