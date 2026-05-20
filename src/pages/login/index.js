import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event) {
    event.preventDefault();

    const res = await fetch("https://api.byggexp.se/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      alert("Wrong email or password");
      return;
    }

    const response = await res.json();

    localStorage.setItem("access_token", response.access_token);

    alert("Logged in");
  } 

  return (
    <div className="loginPage">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="input"
            placeholder="email"
          />

          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="input"
            placeholder="password"
          />

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
