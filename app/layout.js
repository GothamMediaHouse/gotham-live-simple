import "./globals.css";

export const metadata = {
  title: "Gotham Media House Live",
  description: "Private livestream portal by Gotham Media House",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
