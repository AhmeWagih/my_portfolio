import Nav from "@/components/Nav";
import "./globals.css";
export const metadata = {
  title: "Ahmed Wagih",
  description: "Welcome to my portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
