import Image from "next/image";
import Link from "next/link";
import { findEventBySlug } from "../../../lib/events";

export default function EventPage({ params }) {
  const event = findEventBySlug(params.slug);

  if (!event) {
    return (
      <main className="page-shell">
        <section className="event-container center-text">
          <Image src="/gotham-logo.png" alt="Gotham Media House" width={140} height={140} />
          <h1>Event Not Found</h1>
          <p className="muted">Please check your access link or return to the portal.</p>
          <Link className="outline-button" href="/">Back to Portal</Link>
        </section>
      </main>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/${event.youtubeVideoId}?rel=0&modestbranding=1`;

  return (
    <main className="page-shell event-shell">
      <div className="event-container">
        <header className="event-header">
          <Image src="/gotham-logo.png" alt="Gotham Media House" width={120} height={120} />
          <div>
            <p className="eyebrow">Private Event</p>
            <h1>{event.eventTitle}</h1>
            <p className="muted">{event.clientName} · {event.eventDate}</p>
          </div>
          <span className="live-pill">● {event.status || "LIVE"}</span>
        </header>

        <section className="video-card">
          <div className="video-frame">
            <iframe
              src={embedUrl}
              title={event.eventTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section className="event-details">
          <p>{event.description}</p>
          <p className="security-note">This private stream is intended only for invited guests. Please do not share this link.</p>
        </section>

        <footer className="event-footer">
          Produced by Gotham Media House
        </footer>
      </div>
    </main>
  );
}
