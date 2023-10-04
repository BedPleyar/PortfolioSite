import React from 'react';
import logo from './logo.svg';
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles/';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Admin from './components/AdminPage';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
})

function App() {

  return (
    <ThemeProvider theme = {darkTheme}>
      <CssBaseline />
      <div>
        <Router>
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route exact path='/about'>
              <AboutMe />
            </Route>
            <Route exact path='/admin'>
              <Admin />
            </Route>
          </Switch>
          <div style={{position: "fixed", bottom: "0", width: "100%"}}>
                <NavBar />
          </div> 
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
