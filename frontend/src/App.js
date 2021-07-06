import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Product from './components/pages/Product';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import User from './components/pages/User';
import Categories from './components/pages/Categories';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/product' component={Product} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/user' component={User} />
        <Route path='/Categories' component={Categories} />
      </Switch>
    </Router>
  );
}

export default App;