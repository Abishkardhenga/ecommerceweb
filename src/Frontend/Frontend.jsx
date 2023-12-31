import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Card from "../Components/Card/Card";
import "../Frontend/Frontend.css";
import { products } from "../Utilis/Data";
import Sidebar from "../Components/Sidebar/Sidebar";
import Footer from "../Components/Footer/Footer";

const Frontend = () => {
  const [cartItem, setCartItem] = useState([]);

  return (
    <div>
      <Navbar cartItem={cartItem} />
      <div className="bodyContent">
        <Sidebar />
        <div className="bodyContainer">
          {products.map((product) => (
            <Card setCartItem={setCartItem} data={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Frontend;
