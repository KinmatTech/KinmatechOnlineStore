import React from 'react';
import {Switch, Route } from 'react-router-dom';
import CustomerService from './CustomerService';
import Cart from './Cart';
import Home from './Home';
import Signup from './Signup';


function Routes({productData, cartItems, handleAddProduct}) {
    return (
      <div>
                
                <Switch>
                <Route exact path ='/'>
                <Home />

                </Route>
                <Route path='/signup'>
                    <Signup />
                </Route>
                <Route path='/cart'>
                <Cart cartItems={cartItems} 
                productData={productData} handleAddProduct={handleAddProduct} 
                />
                </Route>
                <Route path='/customerservice'>
                    <CustomerService />
                </Route>
                </Switch>
                         
      </div>
  )
}

export default Routes;