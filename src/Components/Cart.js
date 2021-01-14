import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";

function Cart() {
  const [item, setItem] = useState(undefined);

  useEffect(() => {
    const item = localStorage.getItem("items");

    if (item) {
      setItem(JSON.parse(item));
    }
  }, []);

  return (
    <div className="cart">
      <h3 style={{margin:"20px 25px"}}>My Cart Items</h3>
      <div className="home">
        {item && item.map((cart) => <Card buttonVisible={false} {...cart} />)}
      </div>

      <Navbar />
    </div>
  );
}

export default Cart;