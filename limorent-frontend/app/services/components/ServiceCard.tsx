"use client"
import Link from "next/link";
import {motion} from "framer-motion";

interface ServiceCardOptions {
    heading: string,
    description: string
    url: string,
    imageSrc: string;
    publishDate: string
}

export default function ServiceCard({heading, description, url, imageSrc, publishDate} : ServiceCardOptions) {
    return (
        <motion.div
            initial={{ opacity: 0.4, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <div className="hover:scale-110 transition ease-in-out">
                <Link href={url} className={'overflow-hidden'}>
                    <div className="md:flex-shrink-0">

                        <img src={imageSrc}
                             className={'transform hover:scale-75 ease-in duration-500 pointer-events-none'} alt={""}/>
                    </div>
                    <div className="py-2">
                        <h1 className="font-semibold hover:underline text-md lg:text-3xl text-base-content tracking-normal">{heading}</h1>
                        <p className="text-xs sm:text-sm text-gray-700 py-2">
                            {publishDate}
                        </p>
                        <p className="text-xs hidden lg:flex sm:text-sm text-gray-700 py-2">
                            {description}
                        </p>
                    </div>
                </Link>
            </div>
        </motion.div>
    )
}