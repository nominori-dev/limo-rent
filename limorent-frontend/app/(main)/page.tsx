import Hero from "@/app/(main)/components/landing/Hero";
import Fleet from "@/app/(main)/fleet/components/Fleet";
import ContactSection from "@/app/(main)/contact/components/ContactSection";
import * as React from "react";
import ServicesSection from "@/app/(main)/services/components/ServiceSection";
import Link from "next/link";
import BlogSection from "@/app/(main)/blog/components/BlogSection";
import {getVehicles} from "@/app/(cms)/dashboard/fleet/actions";

export default async function Home() {

    const vehicles = await getVehicles();

    return (
        <main>
            <div>
                <Hero/>
                <div id={"services-section"}>
                    <h2 className="bg-clip-text text-transparent text-left bg-gradient-to-b from-neutral-900 to-neutral-700 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                        Oferta
                    </h2>
                    <ServicesSection onlyRecent={true}/>
                    <div className={"pt-4 mx-auto text-center"}>
                        <p className="underline underline-offset-4 text-2xl md:text-4xl link-hover font-semibold text-base-content">
                            <Link href="/services">przejdź do wszystkich usług</Link></p>
                    </div>
                </div>
                <div>
                    <h2 className="bg-clip-text text-transparent text-left bg-gradient-to-b from-neutral-900 to-neutral-700 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">Nasza
                        Flota</h2>
                    <p className="pt-4 text-2xl font-light opacity-70">
                        Zaplanuj niezapomniany wieczór z nami! Nasza firma oferuje ekskluzywne wieczory z luksusową
                        limuzyną, które zapewnią Wam nie tylko komfort, ale także niepowtarzalne przeżycia.
                    </p>
                    <Fleet/>
                </div>
                <div>
                    <h2 className="bg-clip-text text-transparent text-left bg-gradient-to-b from-neutral-900 to-neutral-700 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                        Aktualności
                    </h2>
                    <BlogSection onlyRecent={true}/>
                    <div className={"pt-4 mx-auto text-center"}>
                        <p className="underline underline-offset-4 text-2xl link-hover font-semibold text-base-content">
                            <Link href="/blog">przejdź do wszystkich postów</Link></p>
                    </div>
                </div>
                <div>
                    <h2 className="bg-clip-text text-transparent text-left bg-gradient-to-b from-neutral-900 to-neutral-700 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                        Rezerwacja
                    </h2>
                    <ContactSection vehicles={vehicles}/>
                </div>
            </div>
        </main>
    );
}
