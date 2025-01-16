import {Metadata} from "next";
import FleetSection from "@/app/(main)/fleet/components/FleetSection";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Example dashboard app built using the components.",
}

export default async function LandingFleetPage() {

    return (
        <div className={"px-10 sm:px-32 pb-20 pt-10"}>
            <div>
                <FleetSection/>
            </div>
        </div>
    )
}