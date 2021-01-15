import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";

function Cart() {
  const [item, setItem] = useState(undefined);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('items'));

    if (item) {
      setItem(item);
      
      let total = item.reduce((prev, next) => prev + next.price, 0)
      document.querySelector('.total').textContent += "Total cart value : $ " + total;
    }
  }, []);

  return (
    <div className="cart">
      <h3 style={{margin:"20px 25px"}}>My Cart Items</h3>
      <div className="home">
        {item && item.map((cart) => <Card buttonVisible={false} {...cart} />)}
      </div>
      <div className="total" style={{margin:"20px 25px 60px"}}> </div>
     
      <Navbar />
    </div>
  );
}

export default Cart;