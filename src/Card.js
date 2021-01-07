import React from 'react'

function Card({name, imageURL, price}) {
    return (
      <div className="card">
        <img src={imageURL} alt={name} />
        <h3>{name}</h3>
        <p> $ {price}</p>
        <button>Add</button>
      </div>
    );
}

export default Card
