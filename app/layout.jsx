import Nav from "@/components/Nav";
import "./globals.css";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Ahmed Wagih",
  description: "Welcome to my portfolio",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: "/apple-touch-icon.png?v=4",
    shortcut: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div className="container">
          {children}
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
