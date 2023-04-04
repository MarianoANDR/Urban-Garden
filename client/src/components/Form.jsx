import { useState } from "react";

export function ForM() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="forM">
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="btnRegister">
        Register
      </button>
    </form>
  );
}
