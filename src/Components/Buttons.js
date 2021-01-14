import React,{useState} from 'react'
import "./Button.css"

function Buttons({ setItems }) {

  const [isActive1, setActive1] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);
   
  const fetchData = async (category) => {
    const response = await fetch(
      `https://asia-south1-adon-interviews.cloudfunctions.net/getProductByCategory?category=${category}%27s-fashion`
    );
    const data = await response.json();
    const newData = data.data;
    setItems(() => [ ...newData]);
  };

  const handleKids = (name) => {
    fetchData(name);
  }

  const toggleClass1 = () => {
    setActive1(true)
    setActive2(false)
    setActive3(false)
  }

  const toggleClass2 = () => {
    setActive2(true)
    setActive1(false)
    setActive3(false)
  }

  const toggleClass3 = () => {
    setActive3(true)
    setActive1(false)
    setActive2(false)
  }

  return (
    <div className='button'>
      <button className={isActive1 ? "active" : ""} onClick={() => {handleKids("kid");toggleClass1()}} >kid's-fashion</button>
      <button className={isActive2 ? "active" : ""} onClick={() => {handleKids("men");toggleClass2()}} >men's-fashion</button>
      <button className={isActive3 ? "active" : ""} onClick={() => {handleKids("women");toggleClass3()}} >women's-fashion</button>
    </div>
  );
}

export default Buttons
