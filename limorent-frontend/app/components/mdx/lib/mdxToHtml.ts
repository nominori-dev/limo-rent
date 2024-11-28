import { getStyledMDXRSC } from "@/app/components/mdx/lib/mdx.utils";

export default async function markdownToHtml(markdown: string) {
    const result = await getStyledMDXRSC(Buffer.from(markdown, 'utf-8'));
    return result.content;
}