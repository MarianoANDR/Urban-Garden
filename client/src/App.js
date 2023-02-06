import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Urban Garden</h1>
      <br></br>
      <br></br>
      <h2>Login</h2>
      <br></br>
      <br></br>
      <br></br>

      <form>
        <label>Username</label>
          <input type="text"/>
            <br></br>
            <br></br>
          <label>Password</label>
          <input type="text"/>
          <br></br>
          <br></br>
          <button>Log In</button>
          <br></br>
          <br></br>
          <p>Not a User?</p>
          <p>Register Now</p>
          <button>Register</button>
      </form>
    </div>
  );
}

export default App;
