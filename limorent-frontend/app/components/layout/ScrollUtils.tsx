export const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView({behavior: 'smooth', block: "center", inline: "center" });
    }
}