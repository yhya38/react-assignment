import React, { useState } from "react";
import {  useHistory,  } from "react-router-dom";
import "./Login.css";
import firebase from './firebase'

function Login(props) {

  const [number, setNumber] = useState()
  const [show, setShow] = useState(true)
  const [showLogin, setShowLogin] = useState(false)
  const [gender, setGender] = useState(undefined);
  const [age, setAge] = useState("");
  const history = useHistory();
  
  const handleChange = (e) => {
    setNumber(e.target.value)
  }

  const handleClick=()=>{
    var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');

    firebase.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
      var code = prompt('Enter the otp', '');

      if(code === null) return;

      e.confirm(code).then(function (result) {    
        console.log(result.user,"user");
        document.querySelector('#label').textContent += "Your number is verified";
        setShow(false)
        setShowLogin(true)
      }).catch(function (error) {
            console.error( error);
      });
  })
  .catch(function (error) {
    console.error( error);
  });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("gender", gender)
    localStorage.setItem("age", age)
    history.push({
      pathname: "/home",
      state: { gender: gender, age: age },
    });
  };

  const isFormValid = () => {
    if(!gender || !age){
      return false;
    }
    return true;
  };

  return (
    <div>
      <div id="phoneOTP">
        <label id="label"></label>
          { show ? 
            <div>
              <label htmlFor="number" id="phNo">Enter Your Phone Number</label><br/>
                <input id="number"
                       type="text" 
                       name="number"
                       placeholder="Add country code, eg:+91"
                       value={number}
                       onChange={handleChange} />
                <div id="recaptcha"></div>
                <button id="sendOTP" onClick={handleClick}>Send OTP</button>
            </div> :
            null
          }
      </div>

      {/*----------------------- Gender & Age Components ----------------------*/}
      {showLogin ? 
        <form >
          <label className="gender">Gender</label><br/>
          <input onChange={(e) => setGender(e.target.value)}
              type="radio" id="male" name="gender" value="male" />
          <label className="male" htmlFor="male">Male</label><br/>
        
          <input onChange={(e) => setGender(e.target.value)}
              type="radio" id="female" name="gender" value="female" />
          <label className="female" htmlFor="female">Female</label><br/>
            
          <label className="age">Age</label>
          <input
            type="number"
            onChange={(e) => setAge(e.target.value)}
            value={age}/><br/>
        
          {isFormValid() && <button onClick={handleSubmit}>
            Submit
          </button>}
        </form> 
      : null}
    </div>
  );
}

export default Login;
