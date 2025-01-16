import type {Metadata} from "next";
import "../globals.css";
import Navbar from "@/app/(main)/components/layout/Navbar";
import Footer from "@/app/(main)/components/layout/Footer";
import {Toaster} from "@/app/(main)/components/ui/toaster";
import {ToastProvider} from "@/app/(main)/components/ui/toast";

export const metadata: Metadata = {
    title: "LimousineRent - Wynajem limuzyn",
    description: "Wynajem limuzyn do ślubu, na imprezy, wieczór panieński i kawalerski",
};

export default function MainLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={"mx-auto max-w-[1440px]"}>
            <ToastProvider>
                <Navbar/>
                {children}
                <Footer/>
                <Toaster/>
            </ToastProvider>
        </div>
    );
}
