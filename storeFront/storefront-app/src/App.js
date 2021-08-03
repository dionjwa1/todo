import './App.css';
import Header from './components/storefront/header/header'
import Footer from './components/storefront/footer/footer'
import Categories from './components/storefront/categories';
import Products from './components/storefront/products/details';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <>

    <Router>
      
      <Header />
        <Link> </Link>
      <Switch>
      <Route path='/categories' >
      <Categories />
      </Route>

      <Route path='/details'>
      <Products />
      </Route>

      <Route path='/'>
      <h2>This is Home Coming Soon!</h2>
      </Route>

      </Switch>
 
    </Router>
      <Footer />
</>
  );
}

export default App;
