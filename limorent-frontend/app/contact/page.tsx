import ContactSection from "@/app/contact/components/ContactSection";

export default function Contact(){
    return (
        <main>
            <h2 className="bg-clip-text text-transparent text-left bg-gradient-to-b from-neutral-900 to-neutral-700 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Chcesz zarezerwować limuzynę? <br/> Zapraszamy do kontaktu
            </h2>
            <ContactSection/>
        </main>
    )
}