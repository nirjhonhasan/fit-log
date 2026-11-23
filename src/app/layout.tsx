import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import PlanProvider from "@/context/PlanContext";
import { ToastContainer } from "react-toastify";
import ButtonProvider from "@/context/ButtonContext";
import { Suspense } from "react";
import Providers from "./provider/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog - Workout Library",
  description: "Build a workout plan and track every set.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en" data-theme="fitlog"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >



      <body className="min-h-screen flex flex-col">

        <Suspense fallback={null}>
          <Providers>
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </Providers>
        </Suspense>



        <ToastContainer theme="dark" position="bottom-right" />

      </body>
    </html>
  );
}
