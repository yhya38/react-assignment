import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Buttons from './Buttons';
import Card from './Card';

function Home(props) {
    
    const [items, setItems] = useState([]);

    const location = useLocation()
    const gender = location.state.gender;
    const age = location.state.age;
        
   
        
  useEffect(() => {
     if (age < 18) {
       var fetchData = async () => {
         const response = await fetch(
           "https://asia-south1-adon-interviews.cloudfunctions.net/getProductByCategory?category=kid%27s-fashion"
         );
         const data = await response.json();
         console.log(data);
         const newData = data.data;
         setItems((prev) => [...newData]);
       };
     } else if (age >= 18 && gender === "male") {
       fetchData = async () => {
         const response = await fetch(
           "https://asia-south1-adon-interviews.cloudfunctions.net/getProductByCategory?category=men%27s-fashion"
         );
         const data = await response.json();
         const newData = data.data;
         setItems((prev) => [...newData]);
       };
     } else if (age >= 18 && gender === "female") {
       fetchData = async () => {
         const response = await fetch(
           "https://asia-south1-adon-interviews.cloudfunctions.net/getProductByCategory?category=women%27s-fashion"
         );
         const data = await response.json();
         const newData = data.data;
         setItems((prev) => [...newData]);
       };
     }
     fetchData();
    
  }, [])
    return (
        <div>
        <Buttons gender={gender} age={age} setItems={setItems} />
        <div className='home'>
            {
                items.map(item => {
                    return <Card key={item.id} {...item} />
                })
            }
        </div>
        </div>
    )
}

export default Home
