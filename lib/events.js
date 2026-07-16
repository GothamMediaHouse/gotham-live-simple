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
    slug: "center-of-gravity",
    clientName: "Center of Gravity",
    eventTitle: "Multiview",
    accessCode: "David",
    password: "Gravity",
    youtubeVideoId: "tOF3hsr1Fos",
    eventDate: "August 12, 2026",
    description: "Center of Gravity MV."
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
