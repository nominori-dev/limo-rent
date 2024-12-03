import Hero from "./components/landing/Hero";
import Fleet from "@/app/components/landing/Fleet";
import ContactSection from "@/app/contact/components/ContactSection";
import {VehicleResponse} from "@/app/dashboard/fleet/fleet.types";
import {getVehicles} from "@/app/dashboard/fleet/actions";
import * as React from "react";
import {getAllServices, Service} from "@/app/services/servicesApi";

import ServiceCard from "@/app/services/components/ServiceCard";

export default async function Home() {

    const vehicles: VehicleResponse[] = await getVehicles();
    const services: Service[] = await getAllServices();

  return (
      <main>
          <div>
              <Hero/>
              <div className={"offer-section"}>
                  <h2 className="bg-clip-text text-transparent text-left bg-gradient-to-b from-neutral-900 to-neutral-700 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                      Oferta
                  </h2>
                  <div className={'grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8'}>
                      {services.map((service, index) => (
                          <ServiceCard key={index} heading={service.post.title} description={service.post.metaDescription}
                                       url={`/services/${service.post.slug}`}
                                       imageSrc={service.previewImage} publishDate={service.post.createdAt}/>
                      ))}
                  </div>
              </div>
              <div>
                  <h2 className="bg-clip-text text-transparent text-left bg-gradient-to-b from-neutral-900 to-neutral-700 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">Nasza
                      Flota</h2>
                  <p className="pt-4 text-2xl font-light opacity-70">
                      Zaplanuj niezapomniany wieczór z nami! Nasza firma oferuje ekskluzywne wieczory z luksusową
                      limuzyną, które zapewnią Wam nie tylko komfort, ale także niepowtarzalne przeżycia.
                  </p>
                  <Fleet/>
              </div>
              <div>
                  <h2 className="bg-clip-text text-transparent text-left bg-gradient-to-b from-neutral-900 to-neutral-700 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                      Aktualności
                  </h2>
              </div>
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
