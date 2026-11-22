import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Arkhaprava Mishra | Full-stack Developer",
  description: "Arkhaprava Mishra builds thoughtful web experiences, from clear interfaces to the systems behind them.",
  openGraph: {
    title: "Arkhaprava Mishra | Full-stack Developer",
    description: "Thoughtful web experiences, from clear interfaces to the systems behind them.",
    type: "website",
    images: [
      {
        url: "/arkhaprava-hero.png",
        width: 1080,
        height: 800,
        alt: "Arkhaprava Mishra, full-stack developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkhaprava Mishra | Full-stack Developer",
    description: "Thoughtful web experiences, from clear interfaces to the systems behind them.",
    images: ["/arkhaprava-hero.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
