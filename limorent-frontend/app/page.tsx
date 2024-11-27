import Hero from "./components/landing/Hero";
import Fleet from "@/app/components/landing/Fleet";
import ContactSection from "@/app/contact/components/ContactSection";
import {VehicleResponse} from "@/app/dashboard/fleet/fleet.types";
import {getVehicles} from "@/app/dashboard/fleet/actions";

export default async function Home() {

    const vehicles: VehicleResponse[] = await getVehicles();


  return (
      <main>
          <div>
              <Hero/>
              <Fleet/>
              <div>
                  <h2 className="bg-clip-text text-transparent text-left bg-gradient-to-b from-neutral-900 to-neutral-700 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                     Rezerwacja
                  </h2>
                  <ContactSection/>
              </div>
          </div>
      </main>
  );
}
