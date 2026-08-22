import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${instrumentSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}