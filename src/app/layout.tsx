import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/componets/navbar/NavBar";
import Footer from "@/componets/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
      default : "Next.js 14 HomePage",
      template : "%s | Next.js 14"
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className={"container"}>
          <NavBar/>
          {children}
          <Footer />
      </div>
      </body>
    </html>
  );
}
