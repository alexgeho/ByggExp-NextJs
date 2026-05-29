import React, { useState } from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { login, redirectToAdmin } from "@/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await login(email, password);
      redirectToAdmin(data);
    } catch (err) {
      setError(err.message || "Wrong email or password");
      setLoading(false);
    }
  }

  return (
    <div className="loginPage">
      <form className="LoginCard" onSubmit={handleLogin}>
        <h1>Login</h1>

        {error ? <p className="authError">{error}</p> : null}

        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="input"
          placeholder="Email"
          autoComplete="email"
        />

        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          className="input"
          placeholder="Password"
          autoComplete="current-password"
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Login"}
        </Button>

        <p className="authSwitch">
          Don&apos;t have an account?{" "}
          <Link href="/signup">Try for free</Link>
        </p>
      </form>
    </div>
  );
}
