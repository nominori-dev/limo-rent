import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Section, Container } from "@/app/(main)/components/craft";
import { Button } from "../ui/button";

import RetroGrid from "@/app/(main)/components/ui/retro-grid";

const Hero = () => {
    return (
        <Section className={"mt-12 relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"}>
            <Container>
                <div>
                    <Button
                        asChild
                        className="mb-6 w-fit"
                        size={"sm"}
                        variant={"outline"}
                    >
                        <Link className="not-prose" href="#services-section">
                            Przejdź do naszej oferty <ArrowRight className="w-4" />
                        </Link>
                    </Button>
                    <h1 className={"text-3xl md:text-7xl font-bold dark:text-white text-left"}>
                        Wynajem luksusowych samochodów na specjalne okazje
                    </h1>
                    <h3 className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                        Jako doświadczona i solidna firma działamy na rynku od 2009 roku. Nasze usługi cieszą się zaufaniem tysięcy zadowolonych klientów.
                        Dołącz do nich, wybierając limuzynę idealnie dopasowaną do Twoich potrzeb. Jesteśmy największym dostawcą limuzyn i party busów w Warszawie.
                    </h3>
                </div>
            </Container>
            <RetroGrid/>
        </Section>
    );
};

export default Hero;
