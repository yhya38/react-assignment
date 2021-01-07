import React, { useState } from "react";
import {  useHistory,  } from "react-router-dom";

function Login(props) {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/home",
      state: { gender: gender, age: age },
    });
  };
  console.log(gender);
  return (
    <div className='form'>
      <form>
        <div>

        <label>Gender</label>
        <select onChange={(e) => setGender(e.target.value)}>
          <option value=""></option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        </div>
        <div>
          
        <label>Age</label>
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
       </div>
        <button disabled={!age} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
