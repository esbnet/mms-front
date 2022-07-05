export function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500">
            <div className="w-full flex flex-row items-center ">
                    <a href="#responsive-header" className="text-gray-light hover:text-yellow mr-4">
                        Agendamento
                    </a>
                    <a href="#responsive-header" className="text-gray-light hover:text-yellow mr-4">
                        Aluguel
                    </a>
                    <a href="#responsive-header" className="text-gray-light hover:text-yellow">
                        Eventos
                    </a>
            </div>
        </nav>
    )
}
