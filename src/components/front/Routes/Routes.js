import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CustomerService from '../CustomerService/CustomerService';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import Signup from '../Signup/Signup';


function Routes({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) {
    return (
      <div>
       <Router>
              <Switch>
                <Route exact path='/'>
                    <Products productItems={productItems} handleAddProduct={handleAddProduct} />
                </Route>
                <Route path='/signup'>
                    <Signup />
                </Route>
                <Route path='/cart'>
                    <Cart cartItems={cartItems}
                        handleAddProduct={handleAddProduct}
                        handleRemoveProduct={handleRemoveProduct}
                        handleCartClearance={handleCartClearance}
                    />
                </Route>
                <Route path='/customerservice'>
                    <CustomerService />
                </Route>
                 
            </Switch>   
            </Router>         
      </div>
  )
}

export default Routes;