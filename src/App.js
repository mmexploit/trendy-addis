import logo from './logo.svg';
import React from 'react';
import './App.css';
import { HomePage } from './components/pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
      </Switch>
    </div>
        
  );
}

export default App;
