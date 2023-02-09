import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <>
        <h1>Urban Garden</h1>
        <br></br>
        <br></br>
        <h2>Create your own garden</h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <br></br>
        <br></br>
        <NavLink to="/login">Login</NavLink>
        <br></br>
        <br></br>
        <NavLink to="/register">Register</NavLink>
        <br></br>
        <br></br>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
