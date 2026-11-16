import "./globals.css";

export const metadata = {
  title: "Arkhaprava Mishra | Full-stack Developer",
  description: "Arkhaprava Mishra builds thoughtful web experiences, from clear interfaces to the systems behind them.",
  openGraph: {
    title: "Arkhaprava Mishra | Full-stack Developer",
    description: "Thoughtful web experiences, from clear interfaces to the systems behind them.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
