import { ThemeProvider } from 'styled-components';
import './App.css';
import { GlobalStyle, theme } from './commons/Theme';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Offer from './pages/Offer';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';

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
          <Route path='/produkt/:id' component={SingleProduct} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
