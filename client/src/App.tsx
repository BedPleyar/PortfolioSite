import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles/';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Admin from './components/AdminPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
})

const queryClient = new QueryClient()

function App() {

  return (
    <ThemeProvider theme = {darkTheme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
