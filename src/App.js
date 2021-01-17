import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import { Route } from 'react-router-dom';
import './App.css';








function App() {
  return (
    <div>

      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />


    </div>
  );
}

export default App;
