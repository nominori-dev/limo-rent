import ContactSection from "@/app/(main)/contact/components/ContactSection";
import {VehicleResponse} from "@/app/(cms)/dashboard/fleet/fleet.types";
import {getVehicles} from "@/app/(cms)/dashboard/fleet/actions";

export default async function Contact(){

    const vehicles: VehicleResponse[] = await getVehicles();

    return (
        <main>
            <h2 className="bg-clip-text text-transparent text-left bg-gradient-to-b from-neutral-900 to-neutral-700 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Chcesz zarezerwować limuzynę? <br/> Zapraszamy do kontaktu
            </h2>
            <ContactSection vehicles={vehicles}/>
        </main>
    )
}