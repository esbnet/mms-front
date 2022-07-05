import { Logo } from "../Logo";
import { Navbar } from "../Navbar";

export function Header() {
    return (
        <div className="w-[1100px] flex justify-around items-center bg-gray-dark">
            <Logo />
            <Navbar />
        </div>
    )
}