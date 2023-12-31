import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../../Components/Card/Card";
import "../cart/Cart.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Cartcard from "../../Components/Cartcard/Cartcard";

const Cart = ({ cartItem }) => {
  const location = useLocation();
  const { state } = location;
  let [cartData, setCartdata] = useState(state?.data);

  return (
    <div className="cartContainer">
      <Navbar cartItem={cartItem} />

      <div className="cartBodyContent">
        <div className="cartWrapper">
          {cartData?.map((cart) => (
            <Cartcard
              setCartdata={setCartdata}
              data={cart}
              cartData={cartData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
