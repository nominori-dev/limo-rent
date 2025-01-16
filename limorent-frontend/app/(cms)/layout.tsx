import type {Metadata} from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "Panel zarządzania - LimousineRent.pl",
    description: "Panel sterowania LimousineRent",
};

export default function DashboardLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={"mx-auto max-w-[1440px]"}>
            {children}
        </div>
    );
}
