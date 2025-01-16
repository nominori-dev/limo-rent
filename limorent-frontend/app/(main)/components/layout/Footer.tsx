
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import { Github, Twitter, Facebook } from "lucide-react";

import { Section, Container } from "../craft";

import Logo from "@/public/logo.svg";

export default function Footer() {
    return (
        <footer>
            <Section>
                <Container className="grid gap-6">
                    <div className="not-prose flex flex-col gap-6">
                        <Link href="/public">
                            <Image
                                src={Logo}
                                alt="Logo"
                                width={120}
                                height={27.27}
                                className="transition-all hover:opacity-75 dark:invert"
                            ></Image>
                        </Link>
                        <p>
                            Idealne limuzyny na wieczór kawalerski lub wieczór panieński w Warszawie. Transfery z Lotnisk Chopin, Modlin.
                        </p>
                    </div>
                    <div className="mb-4 flex flex-col gap-4 md:mb-0 md:flex-row">
                        <Link href="/privacy-policy">Polityka Prywatności</Link>
                        <Link href="/terms-of-service">Regulamin Wynajmu</Link>
                        <Link href="/cookie-policy">Polityka Plików Cookie</Link>
                    </div>
                </Container>
                <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                            <Github />
                        </Button>
                        <Button variant="outline" size="icon">
                            <Twitter />
                        </Button>
                        <Button variant="outline" size="icon">
                            <Facebook />
                        </Button>
                    </div>
                    <p className="text-muted-foreground">
                        Copyright
                        ©{" "}
                        LimousineRent 2024.
                    </p>
                </Container>
            </Section>
        </footer>
    );
}
