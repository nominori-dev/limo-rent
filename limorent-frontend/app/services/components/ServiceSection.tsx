import {getAllServices, Service} from "@/app/services/servicesApi";
import ServiceCard from "@/app/services/components/ServiceCard";
import * as React from "react";

interface ServiceSectionOptions {
    onlyRecent: boolean
}

export default async function ServicesSection({onlyRecent} : ServiceSectionOptions){
    const services: Service[] = await getAllServices();

    if(onlyRecent){
        services.splice(2);
    }

    return (
        <div className={'grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8'}>
            {services.map((service, index) => (
                <ServiceCard key={index} heading={service.post.title} description={service.post.metaDescription}
                             url={`/services/${service.post.slug}`}
                             imageSrc={service.previewImage} publishDate={service.post.createdAt}/>
            ))}
        </div>
    )
}