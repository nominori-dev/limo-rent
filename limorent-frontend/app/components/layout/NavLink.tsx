import Link from "next/link";

import React, {ReactNode, useEffect} from "react";
import {usePathname, useRouter} from "next/navigation";
import {scrollToSection} from "@/app/components/layout/ScrollUtils";

type NavLinksProps = {
    href: string,
    section: string,
    activePage: string,
    children: ReactNode
}

export default function NavLink({href, section, activePage, children} : NavLinksProps){

    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        router.prefetch(href);
    });

    return(
        <div>
            {pathname === activePage &&
                <span className={'link-hover cursor-pointer'}
                      onClick={() => scrollToSection(section)}>{children}</span>
            }
            {pathname !== activePage &&
                <Link href={href} className={'link-hover cursor-pointer'}>{children}</Link>
            }
        </div>
    )
}