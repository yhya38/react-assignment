import React, { useState } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import Home from "./Home";

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
  return (
    <div>
      <form>
        <label>Gender</label>

        <input
          type="text"
          onChange={(e) => setGender(e.target.value)}
          placeholder="men or women"
        />
        <label>Age</label>
        <input type="number" onChange={(e) => setAge(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Login;
