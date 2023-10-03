import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {


  return (
      <div>
        <Router>
            <Switch>
              <Route path='/'>
                <HomePage />
              </Route>
            </Switch>
          </Router>
      </div>
  );
}

export default App;
