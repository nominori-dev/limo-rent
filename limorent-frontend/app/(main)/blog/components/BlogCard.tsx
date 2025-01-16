import Link from "next/link";

type BlogPostCardProps = {
    title: string,
    slug: string,
    description: string
}

export default function BlogPostCard({title, slug, description}: BlogPostCardProps){
    return (
        <div className="flex flex-col text-left pointer-events-auto">
            <div className="flex space-x-2">
                <Link href={`/app/(main)/blog/${slug}`} className="font-bold underline underline-offset-auto text-xl pb-4 sm:text-3xl pt-2 hover:underline text-base-content">{title}</Link>
            </div>
            <p className="text-gray-500 text-md sm:text-2xl leading-7">{description}</p>
        </div>
    )
}