import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import "../styles/shapes.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tipien",
  description: " Harvest Smarter, Store Better With Tipien Storage Solutions",
  icons:{
    icon: "/tpicon.png",
    apple:"/tpicon.png"
  },
  keywords:[
    "maize bags",
    "gunia",
    "airtight bags",
   ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="relative h-full w-full z-0">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
