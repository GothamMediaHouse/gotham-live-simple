"use client";

import Image from "next/image";
import { useState } from "react";
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

    if (!event) {
      setLoading(false);
      setError("Access code or password is incorrect.");
      return;
    }

    sessionStorage.setItem(`gotham_event_${event.slug}`, "true");
    window.location.href = `/events/${event.slug}`;
  }

  return (
    <main className="page">
      <div className="container login-shell">
        <section className="center" style={{ width: "100%" }}>
          <div className="logo-wrap">
            <Image
              className="logo"
              src="/images/logo.png"
              alt="Gotham Media House"
              width={205}
              height={205}
              priority
            />
          </div>

          <p className="kicker">Welcome</p>
          <h1 className="title">Private Livestream Portal</h1>
          <p className="subtitle">Secure access for invited guests.</p>

          <form className="login-card form-stack" onSubmit={handleSubmit}>
            <div>
              <label className="label">Access Code</label>
              <input
                className="input"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                placeholder="Enter your access code"
                autoComplete="off"
              />
            </div>

            <div>
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            {error && <p className="error">{error}</p>}

            <button className="button" type="submit">
              {loading ? "Entering..." : "Enter Event"}
            </button>
          </form>

          <p className="footer-note">Professional. Reliable. Purpose-Driven.</p>
        </section>
      </div>
    </main>
  );
}
