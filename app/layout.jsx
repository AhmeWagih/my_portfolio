import Nav from "@/components/Nav";
import "./globals.css";
export const metadata = {
  title: "Ahmed Wagih",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="180x180" href="/icon3.svg" />
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
