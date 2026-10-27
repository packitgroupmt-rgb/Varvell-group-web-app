import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://www.varvellgroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "varvell Group | Building. Serving. Delivering.",
    template: "%s | varvell Group"
  },
  description:
    "varvell Group is a diversified European business group operating across construction, hospitality, warehousing and logistics.",
  applicationName: "varvell Group",
  authors: [{ name: "varvell Group" }],
  creator: "varvell Group",
  publisher: "varvell Group",
  keywords: [
    "varvell Group",
    "construction",
    "hospitality",
    "restaurant",
    "logistics",
    "warehousing",
    "Luxembourg",
    "European business group"
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "varvell Group",
    title: "varvell Group | Building. Serving. Delivering.",
    description:
      "A diversified business group across construction, hospitality and logistics.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "varvell Group" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "varvell Group | Building. Serving. Delivering.",
    description:
      "A diversified business group across construction, hospitality and logistics.",
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
