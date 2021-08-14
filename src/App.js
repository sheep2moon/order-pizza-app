import { ThemeProvider } from 'styled-components';
import './App.css';
import { GlobalStyle, theme } from './commons/Theme';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PizzaCreator from './pages/PizzaCreator';
import Order from './pages/Order';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/koszyk' component={Cart} />
          <Route exact path='/kontakt' component={Contact} />
          <Route path='/stworz' component={PizzaCreator} />
          <Route path='/zamowienie' component={Order} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
