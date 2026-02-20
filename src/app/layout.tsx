import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Codeofy - Premium Software Development & IT Solutions",
  description:
    "Transform your ideas into powerful digital solutions. We build scalable web apps, mobile apps, and enterprise software.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}