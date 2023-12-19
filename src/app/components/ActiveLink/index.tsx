'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


export default function ActiveLink({children, href}){
    const router = useRouter();
    const pathName = usePathname();

    const style = {
        color: pathName === href ? '#ED2590' : '#000000',
        fontWeight: pathName === href ? 700 : 400
    }



    return(
        <>
            <Link className="text-lg no-underline mr-10" href={href} style={style}>{children}</Link>
        </>
    )
}