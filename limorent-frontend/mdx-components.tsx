import type { MDXComponents } from 'mdx/types'
import {Heading} from "@/app/components/mdx/Heading";
import Paragraph from "@/app/components/mdx/Paragraph";
import HeroImage from "@/app/components/mdx/HeroImage";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: Heading.H1,
        h2: Heading.H2,
        p: Paragraph,
        HeroImage,
        Image,
        ...components,
    }
}