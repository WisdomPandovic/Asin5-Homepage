import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/NavComponent/NavBar";
import ImportBsJS from "@/app/importBsJS";
import Footer from "@/components/Footer/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ImportBsJS />
        {/* <Nav/> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
