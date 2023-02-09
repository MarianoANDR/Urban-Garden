import React from "react";

function Register() {
  return (
    <>
      <h2>Register</h2>

      <br></br>
      <br></br>
      <form>
        <label>Username </label>
        <input type="text" />
        <br></br>
        <br></br>
        <label>Email </label>
        <input type="text" />
        <br></br>
        <br></br>
        <label>Password </label>
        <input type="text" />
        <br></br>
        <br></br>
        <button>Register</button>
      </form>
    </>
  );
}

export default Register;
