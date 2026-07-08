export const events = [
  {
    slug: "demo-event",
    clientName: "Gotham Media House",
    eventTitle: "Demo Live Event",
    accessCode: "DEMO2026",
    password: "gothamlive",
    youtubeVideoId: "YOUR_VIDEO_ID_HERE",
    eventDate: "July 2026",
    description: "Private livestream hosted by Gotham Media House."
  },
  {
    slug: "acme-town-hall",
    clientName: "ACME Corporation",
    eventTitle: "Annual Town Hall",
    accessCode: "ACME2026",
    password: "acmeprivate",
    youtubeVideoId: "YOUTUBE_VIDEO_ID_HERE",
    eventDate: "August 12, 2026",
    description: "Private town hall livestream."
  },
  {
    slug: "rockland-chamber",
    clientName: "Rockland Chamber",
    eventTitle: "Business Breakfast Livestream",
    accessCode: "RCC2026",
    password: "rocklandlive",
    youtubeVideoId: "YOUTUBE_VIDEO_ID_HERE",
    eventDate: "September 5, 2026",
    description: "Private livestream event."
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
