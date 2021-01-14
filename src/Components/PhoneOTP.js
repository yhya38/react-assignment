import React, { useState } from 'react'
import firebase from './firebase'
import "./PhoneOTP.css"

export default function Phone() { 
    const [number, setNumber] = useState()
    const [show, setShow] = useState(true)
 
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
        }).catch(function (error) {
            console.error( error);
        });
    })
    .catch(function (error) {
        console.error( error);
    });
  }
 
    return (
      <div id="phoneOTP">
          
              <label id="label"></label>
            {      show ? 
            <>
               <label htmlFor="number" id="phNo">Enter Your Phone Number</label><br/>
                <input id="number"
                       type="text" 
                       name="number"
                       placeholder="Add country code, eg:+91"
                       value={number}
                       onChange={handleChange}
                        />
           
        
        
                <div id="recaptcha"></div>
                <button id="sendOTP" onClick={handleClick}>Send OTP</button>
            </> :
                null
            }
      </div>
    )
  }


