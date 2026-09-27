import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./styles/global.css";
import "./styles/normalize.css";

const PlayfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Гештальт-Терапевт Алина Белугина",
  description:
    "Гештальт-терапевт в Севастополе. Алина Белугина. Гештальт терапевт в севастополе недорого.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={PlayfairDisplay.className}>
      <body>{children}</body>
    </html>
  );
}
