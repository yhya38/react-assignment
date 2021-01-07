import React from 'react'

function Buttons({ setItems }) {
   
   
    const fetchData = async (category) => {
      const response = await fetch(
        `http://asia-south1-adon-interviews.cloudfunctions.net/getProductByCategory?category=${category}%27s-fashion`
      );
      const data = await response.json();
      const newData = data.data;
      setItems((prev) => [ ...newData]);
    };

    const handleKids = (name) => {
        fetchData(name)
    }

    return (
      <div className='button'>
        <button  onClick={() => handleKids("kid")}>
          kids
        </button>
        <button onClick={() => handleKids("men")}>mens</button>
        <button onClick={() => handleKids("women")}>womens</button>
      </div>
    );
}

export default Buttons
