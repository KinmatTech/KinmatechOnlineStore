import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  if (isEmpty) return <h5 className="text-center">Cart is Empty</h5>;
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        {/* {console.warn(items)} */}
        <div className="col-12">
          <h5>
            Cart ({totalUniqueItems}) total Items: ({totalItems})
          </h5>
          <br />
          <table className="table table-light table-hover m-0">
            <tbody>
              <tr>
                <td style={{ padding: "0px 100px 0px 98px" }}>
                  <b>Product Image</b>
                </td>
                <td style={{ padding: "0px 100px 0px 71px" }}>
                  <b>Product Name</b>
                </td>
                <td style={{ padding: "0px 100px 0px 71px" }}>
                  <b>Price</b>
                </td>
                <td style={{ padding: "0px 100px 0px 90px" }}>
                  <b>Quantity</b>
                </td>
              </tr>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ height: "6rem" }} alt="" />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td> {item.quantity}</td>
                    <td>
                      <button
                        style={{ border: "2px solid red" }}
                        className="btn btn-light ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        –
                      </button>
                      <button
                        style={{ border: "2px solid #fcba03" }}
                        className="btn btn-light ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-dark ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove Item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <hr />
        <br />
        {/* <div> */}
        <div className="col-auto ms-auto">
          <h5><strong>Total Price: N {cartTotal} </strong></h5>
        </div>
        <div className="col-auto ms-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            Clear Cart
          </button>
          <a className="btn btn-primary m-3" href="#popup1">
            Checkout
          </a>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Cart;
