import React, { useState } from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { registerCompany, redirectToAdmin } from "@/lib/auth";

export default function SignupPage() {
  const [companyName, setCompanyName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await registerCompany({
        companyName,
        userName,
        email,
      });

      redirectToAdmin(data);
    } catch (err) {
      setError(err.message || "Registration failed");
      setLoading(false);
    }
  }

  return (
    <div className="signupPage">
      <div className="signupPageInner">
        <div className="signupHeader">
          <h1>Try for free</h1>
          <p>Register your company in a few seconds</p>
        </div>

        <form className="signupForm" onSubmit={handleSignup}>
          {error ? <p className="authError">{error}</p> : null}

          <section className="signupSection">
            <input
              type="text"
              value={companyName}
              onChange={(event) => setCompanyName(event.target.value)}
              required
              className="input"
              placeholder="Company name"
            />

            <input
              type="text"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              required
              className="input"
              placeholder="Your name"
              autoComplete="name"
            />

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="input"
              placeholder="Email"
              autoComplete="email"
            />
          </section>

          <Button type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </Button>

          <p className="authSwitch">
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
