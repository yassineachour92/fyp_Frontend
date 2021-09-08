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
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <BrowserRouter>

      <div className="App" >
        <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Switch>
          <Route exact path="/">
            <div onClick={() => setIsMenuOpen(false)}>

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


              <About />
            </div>
          </Route>
          <Route exact path="/particulier">
            <div onClick={() => setIsMenuOpen(false)}>

              <Particular />
            </div>
          </Route>
          <Route exact path="/Professionnel">
            <div onClick={() => setIsMenuOpen(false)}>

              <Professionnel />
            </div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
