"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { findEventBySlug } from "../../../lib/events";

export default function EventPage({ params }) {
  const event = findEventBySlug(params.slug);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (!event) return;

    const access = sessionStorage.getItem(`gotham_event_${event.slug}`);
    if (access === "true") {
      setAllowed(true);
    } else {
      window.location.href = "/";
    }
  }, [event]);

  if (!event) {
    return (
      <main className="page">
        <div className="container center">
          <h1>Event Not Found</h1>
          <Link className="back-link" href="/">Return Home</Link>
        </div>
      </main>
    );
  }

  if (!allowed) return null;

  return (
    <main className="page">
      <div className="container">
        <header className="event-header">
          <Image
            className="event-logo"
            src="/images/logo.png"
            alt="Gotham Media House"
            width={104}
            height={104}
            priority
          />
          <Link className="back-link" href="/">Sign Out</Link>
        </header>

        <section className="event-card">
          <p className="event-meta">{event.eventDate}</p>
          <h1 className="event-title">{event.eventTitle}</h1>
          <p className="subtitle" style={{ margin: "0 0 18px" }}>{event.clientName}</p>
          <span className="live-badge"><span className="dot" /> {event.status || "Live"}</span>

          <div className="video-frame">
            <iframe
              src={`https://www.youtube.com/embed/${event.youtubeVideoId}?autoplay=1&rel=0`}
              title={event.eventTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p className="private-note">
            {event.description}<br />Produced by Gotham Media House.
          </p>
        </section>
      </div>
    </main>
  );
}
