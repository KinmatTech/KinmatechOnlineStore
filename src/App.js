import Header from "./Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Cart from "./Cart";
import Footer from "./Footer";
import "./App.css";
import { CartProvider } from "react-use-cart";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';


function App() {
  return (
    <div className="App">
      <div id="popup1" className="overlay">
        <div className="popup">
          <a className="close" href=" ">
            &times;
          </a>
          <div id="button-wrapper">
            <h3>Checkout</h3>
            <h6>Personal&nbsp;Details</h6>
            <hr />
            <form method ="" action="" name="pay">
              <label className="first" for="firstname">
                First&nbsp;name
              </label>
              <input
                type="text"
                name="fullname"
                className="last"
                placeholder="fname"
              />
              <label className="last1" for="Lastname">
                Last&nbsp;name
              </label>
              <input
                type="text"
                name="fullname"
                className="name"
                placeholder="lname"
              />
              <br />
              <label className="email" for="Lastname">
                Email&nbsp;Address
              </label>
              <input
                type="text"
                name="fullname"
                className="email1"
                placeholder="enter your mail id"
              />
              <br />
              <label className="pwd" for="pwd">
                Password:
              </label>
              <input
                type="password"
                className="pwd1"
                name="pwd"
                placeholder="enter your password" required
              />
               <h4 className="h5">Payment&nbsp;with&nbsp;cards</h4>
              <div className="cards">
                <input type="radio" name="cards" className="cards1" />
                 {" "}
                <label className="cards2" for="html">
                  Debit&nbsp;card/Credit&nbsp;card&nbsp;
                  <br />
                  your&nbsp;are&nbsp;the&nbsp;choosing&nbsp;card Payment
                  option.please fill the your card details
                </label>
              </div>
              <h6 className="h6">Card Details</h6>

              <label className="namecard" for="cardname">
                Name&nbsp;on&nbsp;card
              </label>
              <input
                type="text"
                name="cardname"
                className="namecard1"
                placeholder="enter your name on card"
              />
              <label className="cardno" for="cardname">
                Card&nbsp;no
              </label>
              <input
                type="text"
                name="cardname"
                className="cardno1"
                placeholder="**** **** **** 5631" required
              />
              <label className="valid" for="cardname">
                Valid&nbsp;through&nbsp;(MM/YY)
              </label>
              <input
                type="text"
                name="valid"
                className="valid1"
                placeholder="MM/YY" required
              />
              <label className="cvv" for="cardname">
                CVV&nbsp;(3 digits)
              </label>
              <input
                type="text"
                name="cardname"
                className="cvv1"
                placeholder="***" required
              />
              <button className="button" onClick={() => {
      alert('Payment is successful!') 
    }}>Pay</button>
            </form>
          </div>
        </div>
      </div>
          <Router>
      
      <CartProvider>
      
        <Header   />
        <Routes>
        <Cart  />
        <Home />
       
        </Routes>
       </CartProvider>    
       <Footer />
        </Router> 
        </div>
      
  );
}
export default App;