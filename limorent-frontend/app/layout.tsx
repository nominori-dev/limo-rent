import SessionWrapper from "@/app/(main)/components/SessionWrapper";
import localFont from "next/font/local";
import type {Metadata} from "next";

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
        <SessionWrapper>
            <html lang="pl">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased `}
            >
            <div className={"mx-auto"}>
                {children}
            </div>
            </body>
            </html>
        </SessionWrapper>
    );
}