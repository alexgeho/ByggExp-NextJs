import React, { useState } from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { registerCompany, redirectToAdmin } from "@/lib/auth";

export default function SignupPage() {
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneCountryCode, setPhoneCountryCode] = useState("46");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(event) {
    event.preventDefault();
    setError("");

    if (adminPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (adminPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const data = await registerCompany({
        name: companyName,
        address: companyAddress,
        email: companyEmail,
        adminName,
        adminEmail,
        adminPassword,
        adminPhoneAreaCode: phoneCountryCode,
        adminPhoneNumber: phoneNumber,
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
          <p>Register your company and create an admin account</p>
        </div>

        <form className="signupForm" onSubmit={handleSignup}>
          {error ? <p className="authError">{error}</p> : null}

          <section className="signupSection">
            <h2 className="signupSectionTitle">Company</h2>

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
              value={companyAddress}
              onChange={(event) => setCompanyAddress(event.target.value)}
              required
              className="input"
              placeholder="Company address"
            />

            <input
              type="email"
              value={companyEmail}
              onChange={(event) => setCompanyEmail(event.target.value)}
              required
              className="input"
              placeholder="Company email"
            />
          </section>

          <section className="signupSection">
            <h2 className="signupSectionTitle">Administrator</h2>

            <input
              type="text"
              value={adminName}
              onChange={(event) => setAdminName(event.target.value)}
              required
              className="input"
              placeholder="Full name"
              autoComplete="name"
            />

            <input
              type="email"
              value={adminEmail}
              onChange={(event) => setAdminEmail(event.target.value)}
              required
              className="input"
              placeholder="Email"
              autoComplete="email"
            />

            <div className="phoneRow">
              <input
                type="text"
                value={phoneCountryCode}
                onChange={(event) => setPhoneCountryCode(event.target.value)}
                className="input phoneCountryCode"
                placeholder="46"
                aria-label="Country code"
              />
              <input
                type="tel"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                className="input phoneNumber"
                placeholder="Phone number"
                autoComplete="tel-national"
              />
            </div>
          </section>

          <section className="signupSection">
            <h2 className="signupSectionTitle">Password</h2>

            <input
              type="password"
              value={adminPassword}
              onChange={(event) => setAdminPassword(event.target.value)}
              required
              minLength={6}
              className="input"
              placeholder="Password"
              autoComplete="new-password"
            />

            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
              minLength={6}
              className="input"
              placeholder="Confirm password"
              autoComplete="new-password"
            />
          </section>

          <Button type="submit" disabled={loading}>
            {loading ? "Creating company..." : "Create company account"}
          </Button>

          <p className="authSwitch">
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
