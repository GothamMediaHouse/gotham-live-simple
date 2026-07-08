# Gotham Live White Simple

A simple Gotham Media House private livestream portal for Vercel.

## Add or edit events

Edit:

```txt
lib/events.js
```

Example:

```js
{
  slug: "client-town-hall",
  clientName: "Client Name",
  eventTitle: "Annual Town Hall",
  accessCode: "CLIENT2026",
  password: "PrivatePassword",
  youtubeVideoId: "YOUTUBE_VIDEO_ID",
  eventDate: "July 2026",
  status: "LIVE",
  description: "Private livestream event hosted by Gotham Media House."
}
```

## YouTube video ID

If your YouTube link is:

```txt
https://www.youtube.com/watch?v=AbCdEf12345
```

Use:

```txt
AbCdEf12345
```

## Test login

Access Code: `DEMO2026`
Password: `gothamlive`
