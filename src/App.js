import { ThemeProvider } from 'styled-components';
import './App.css';
import { GlobalStyle, theme } from './commons/Theme';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Offer from './pages/Offer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchItems } from './redux/shopSlice';

function App() {
  const dispatch = useDispatch();
  const apiStatus = useSelector((state) => state.shop.status);

  useEffect(() => {
    if (apiStatus === 'idle') {
      dispatch(fetchItems());
    }
  }, [apiStatus, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/oferta' component={Offer} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
