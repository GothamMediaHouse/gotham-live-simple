"use client";

import { useState } from "react";
import Image from "next/image";
import { findEventByCredentials } from "../lib/events";

export default function HomePage() {
  const [accessCode, setAccessCode] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const event = findEventByCredentials(accessCode, password);

    setTimeout(() => {
      if (!event) {
        setLoading(false);
        setError("Invalid access code or password.");
        return;
      }

      window.location.href = `/events/${event.slug}`;
    }, 450);
  }

  return (
    <main className="page-shell home-shell">
      <div className="background-glow" />
      <section className="login-wrap">
        <div className="logo-mark">
          <Image
            src="/gotham-logo.png"
            alt="Gotham Media House"
            width={210}
            height={210}
            priority
          />
        </div>

        <p className="eyebrow">Private Livestream Portal</p>
        <h1>Secure access for invited guests.</h1>
        <p className="intro">
          Enter your event credentials below to access your private Gotham Media House livestream.
        </p>

        <form className="access-card" onSubmit={handleSubmit}>
          <div>
            <label>Access Code</label>
            <input
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              placeholder="Example: DEMO2026"
              autoComplete="off"
            />
          </div>

          <div>
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Opening Event..." : "Enter Event"}
          </button>
        </form>

        <footer>
          Need assistance? Contact Gotham Media House.
        </footer>
      </section>
    </main>
  );
}
