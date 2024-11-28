import {compileMDX} from "next-mdx-remote/rsc";
import {Heading} from "@/app/components/mdx/Heading";
import Paragraph from "@/app/components/mdx/Paragraph";
import HeroImage from "@/app/components/mdx/HeroImage";
import Image from "next/image";

export async function getStyledMDXRSC(mdxSource: Buffer){
    return compileMDX({
        source: mdxSource,
        options: {parseFrontmatter: true},
        components: {
            h1: Heading.H1,
            h2: Heading.H2,
            p: Paragraph,
            HeroImage,
            Image
        }
    })
}

export type MDXProps = {
    name: string
}