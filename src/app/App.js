import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from '../navbar/Navbar';

import { FontList } from '../fonts/FontList';
import { BuyNewFonts } from '../fonts/BuyNewFonts';

import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="App">

          <Switch>
            {/*<Route exact path="/fonts/myfonts" render={() => (
              <React.Fragment>
                <FontList />
              </React.Fragment>
              )}
            />*/}
            <Route exact path="/fonts/myfonts" component={FontList}/>
            <Route exact path="/fonts/buynewfonts" component={BuyNewFonts}/>
            <Redirect to="/fonts/myfonts"/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;