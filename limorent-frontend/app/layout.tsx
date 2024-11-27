import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "./components/layout/Footer";
import {Toaster} from "@/app/components/ui/toaster";
import {ToastProvider} from "@/app/components/ui/toast";

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
    title: "LimousineRent - Wynajem limuzyn",
    description: "Wynajem limuzyn do ślubu, na imprezy, wieczór panieński i kawalerski",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        >
        <div className={"mx-auto max-w-[1440px]"}>
            <ToastProvider>
                <Navbar/>
                {children}
                <Footer/>
                <Toaster />
            </ToastProvider>
        </div>
        </body>
        </html>
    );
}
