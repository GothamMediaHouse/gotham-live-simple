export const events = [
  {
    slug: "demo-event",
    clientName: "Gotham Media House",
    eventTitle: "Demo Live Event",
    accessCode: "DEMO2026",
    password: "gothamlive",
    youtubeVideoId: "dQw4w9WgXcQ",
    eventDate: "July 2026",
    status: "LIVE",
    description: "Private livestream event hosted by Gotham Media House."
  }
];

export function findEventByCredentials(accessCode, password) {
  return events.find(
    (event) =>
      event.accessCode.toLowerCase() === accessCode.trim().toLowerCase() &&
      event.password === password.trim()
  );
}

export function findEventBySlug(slug) {
  return events.find((event) => event.slug === slug);
}
