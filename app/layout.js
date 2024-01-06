import { Providers } from "./providers";
import "./globals.css";

import Header from "components/header/Header";
import Footer from "components/Footer";
import Lines from "components/Lines";

export const metadata = {
  title: "Baig Associates",
  description: "Under Development Of Rafay Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-100">
        <Providers>
          <Header />
          <Lines />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
