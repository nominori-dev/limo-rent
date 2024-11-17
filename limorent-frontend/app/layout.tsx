import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "./components/layout/Footer";

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
            className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1440px] mx-auto`}
        >
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
