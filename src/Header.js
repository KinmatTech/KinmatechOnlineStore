import React from 'react';
//import { a } from 'react-router-dom';
import './Header.css';

function Header({}) {
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
                      <a href='#'>Customer Service</a>
                  </li>
              </ul>
               <ul>
                  <li>
                      <a href='#'>Signup</a>
                  </li>
              </ul>
               
          </div>
    </header>
  )
}
export default Header