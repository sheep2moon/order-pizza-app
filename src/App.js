import { ThemeProvider } from 'styled-components';
import './App.css';
import { GlobalStyle, theme } from './commons/Theme';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Offer from './pages/Offer';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
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
          <Route exact path='/oferta' component={Offer} />
          <Route exact path='/koszyk' component={Cart} />
          <Route exact path='/kontakt' component={Contact} />
          <Route path='/produkt/:id' component={SingleProduct} />
          <Route path='/zamowienie' component={Order} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
