import ServicesSection from "@/app/services/components/ServiceSection";

export default function LandingServices(){
    return (
        <div className={"px-10 sm:px-32 pb-20 pt-10"}>
            <div>
                <ServicesSection onlyRecent={false}/>
            </div>
        </div>
    )
}