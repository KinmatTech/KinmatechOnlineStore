import React from 'react';
import './Header.css';
import { a } from 'react-router-dom';


function Header({totalItems}) {
  return (
    <header className='header'>
        <div>
            <h1>
                <a href="/" className="logo"><img src="./logo.png"/></a>
            </h1>
          </div>
          <div className='header-links'>
              <ul>
                  <li>
                      <a href='/'>Home</a>
                  </li>
              </ul>
              <ul>
                  <li>
                      <a href='/customerservice'>Customer Service</a>
                  </li>
              </ul>
               <ul>
                  <li>
                      <a href='/signup'>Signup</a>
                  </li>
              </ul>
               
              <ul>
                  <li>
                      <a href='/cart' className='cart'>                          
                          <i class='fas fa-shopping-cart'></i>
                          <span>  (View Cart) </span>
                                                
                      </a>
                  </li>
              </ul>

          </div>
    </header>
  )
}
export default Header