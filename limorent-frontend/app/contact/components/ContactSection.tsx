import ContactForm from "@/app/contact/components/ContactForm";
import React from "react";
import Link from "next/link";
import {Button} from "@/app/components/ui/button";
import {Facebook, Github, Twitter} from "lucide-react";


export default function ContactSection(){
    return (
        <div id={'contact-section'}>
            <div className={'flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4 lg:space-y-0'}>
                <div className={"w-[40%]"}>
                    <ContactForm/>
                </div>
                <div className={'lg:p-12 flex flex-col py-16 space-y-6 text-left text-base-content'}>
                    <div>
                        <h2 className={'text-2xl font-semibold mb-2'}>E-Mail: </h2>
                        <Link href={"mailto:biuro@limorent.pl"} className="link-hover">
                            <p className={'text-xl'}>biuro@limorent.pl</p>
                        </Link>
                    </div>
                    <div>
                        <h2 className={'text-2xl font-semibold mb-2'}>Telefon: </h2>
                        <p className={'text-xl'}>(+ 48) 000 000 000</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                            <Github/>
                        </Button>
                        <Button variant="outline" size="icon">
                            <Twitter/>
                        </Button>
                        <Button variant="outline" size="icon">
                            <Facebook/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}