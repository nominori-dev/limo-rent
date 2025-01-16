import BlogSection from "@/app/(main)/blog/components/BlogSection";

export default function LandingBlog(){
    return (
        <div className={"px-10 sm:px-32 pb-20 pt-10"}>
            <div>
                <BlogSection onlyRecent={false}/>
            </div>
        </div>
    )
}