import React from 'react'
import "./Card.css"

function Card({name, imageURL, price, buttonVisible=true}) {

  const handleClick = () => {
    let items = localStorage.getItem("items");
    if (items) {
      let parsedItems = JSON.parse(items);
      let checkItem = parsedItems.find((item) => item.imageURL === imageURL);
      if (!checkItem) {
        parsedItems.push({ name, imageURL, price });
        localStorage.setItem("items", JSON.stringify(parsedItems));
      }
    } else {
      localStorage.setItem(
        "items",
        JSON.stringify([{ name, imageURL, price }])
      );
    }
  };

    return (
      <div className="card">
        <img src={imageURL} alt={name} />
        <h3>{name}</h3>
        <p>Price :  $ {price}</p>
        {buttonVisible && <button onClick={handleClick}>Add</button>}
      </div>
    );
}

export default Card;
