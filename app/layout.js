import { Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import UserProvider from "@/context/userContext";
import { Toaster } from "sonner";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Talkme Chat App",
  description: "A simple chat application for real time chatting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${geistMono.variable} antialiased`}>
        <Toaster position="top-right" />
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
