import ActiveLink from "@/app/components/ActiveLink";
import Link from "next/link";


export default function Header(){
    return(
        <header className="h-16 bg-white flex justify-around items-center">
            <Link href="/">
                <img
                    src="images/logo-fifa.png"
                    width={100}
                    height={50}
                    alt="Logo da FIFA"
                />
            </Link>
            <nav>
                <ActiveLink href="/">início</ActiveLink>
                <ActiveLink href="/grupo">Grupos</ActiveLink>
                <ActiveLink href="/partidas">Partidas</ActiveLink>
                <ActiveLink href="/assistir">Assistir</ActiveLink>
            </nav>
        </header>
    )
}