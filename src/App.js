import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './Navbar.js';

import { FontList } from './features/fonts/FontList.js';
import { BuyNewFonts } from './features/fonts/BuyNewFonts.js';

import './App.css';
import './Font.css';
import './Navbar.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/fonts/myfonts" render={() => (
            <React.Fragment>
              <FontList />
            </React.Fragment>
            )}
          />
          <Route exact path="/fonts/buynewfonts" component={BuyNewFonts}/>
          <Redirect to="/fonts/myfonts"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;