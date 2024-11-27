import * as React from "react";
import Image from "next/image";

import { Section, Container } from "@/app/components/craft";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/app/components/ui/card";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/app/components/ui/carousel";

const photos = [
    {
        src: "https://images.unsplash.com/photo-1676107746494-61af7d8673ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        src: "https://images.unsplash.com/photo-1705682433884-f5ec3c3f979b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        src: "https://images.unsplash.com/photo-1632548260498-b7246fa466ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        src: "https://images.unsplash.com/photo-1676107648535-931375db52e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        src: "https://images.unsplash.com/photo-1720887236665-43caad593cdf?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

import {Coins} from "lucide-react";
import {Button} from "@/app/components/ui/button";
import Link from "next/link";

type FeatureText = {
    icon: JSX.Element;
    title: string;
    description: string;
};

const featureText: FeatureText[] = [
    {
        icon: <Coins className="h-6 w-6"/>,
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        icon: <Coins className="h-6 w-6"/>,
        title: "Lorem Ipsum",
        description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        icon: <Coins className="h-6 w-6"/>,
        title: "Lorem Ipsum",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
];

const Fleet = () => {
    return (
        <Section id={"fleet-section"}>
            <Container>
                <h2 className="text-3xl md:text-7xl font-bold dark:text-white text-left">Nasza Flota</h2>
                <p className="pt-4 text-2xl font-light opacity-70">
                    Zaplanuj niezapomniany wieczór z nami! Nasza firma oferuje ekskluzywne wieczory z luksusową limuzyną, które zapewnią Wam nie tylko komfort, ale także niepowtarzalne przeżycia.
                </p>
                <Carousel className="mt-6 w-full">
                    <CarouselContent className="-ml-1">
                        {photos.map((photo, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-1 md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="p-1">
                                    <Card className="relative overflow-hidden">
                                        <CardHeader>
                                            <CardTitle>Card Title</CardTitle>
                                            <CardDescription>Card Description</CardDescription>
                                        </CardHeader>
                                        <CardContent className="not-prose flex aspect-square items-center justify-center">
                                            <Image
                                                src={photo.src}
                                                alt="Presets.com Example Image"
                                                width={720}
                                                height={480}
                                                className=" inset-0 h-full w-full object-cover rounded-lg"
                                            ></Image>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full">
                                                Wybierz ten samochód
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <div className={"pt-4 mx-auto text-center"}>
                    <p className="underline underline-offset-4 text-2xl md:text-4xl link-hover font-semibold text-base-content">
                        <Link href="/fleet">zobacz całą flotę</Link></p>
                </div>
            </Container>
            <Container>
                <div className="flex flex-col gap-6">


                    <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
                    {featureText.map(({icon, title, description}, index) => (
                            <div className="flex flex-col gap-4" key={index}>
                                {icon}
                                <h4 className="text-xl text-primary">{title}</h4>
                                <p className="text-base opacity-75">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Fleet;


