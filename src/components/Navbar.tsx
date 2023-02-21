import { Link, useLocation } from "react-router-dom"

const Navbar = ({ responsive = false }) => {
    const location = useLocation()
    return (
        <nav className={`self-center `}>
            <ul className={`flex justify-between w-full ${responsive ? "flex-col items-center" : ""} gap-6`}>
                <li className={`hover:text-primary`}>
                    <Link to={"/"} className={`h6 ${location.pathname === "/" ? "text-primary" : ""}`}>Accueil</Link>
                </li>
                <li className={`hover:text-primary ${window.location.href.includes("/products") ? "text-primary" : ""}`}>
                    <Link to={"/products"} className="h6">Produits</Link>
                </li>
                <li className={`hover:text-primary ${location.pathname === "/about" ? "text-primary" : ""}`}>
                    <Link to={"/about"} className="h6">À propos</Link>
                </li>
                <li className={`hover:text-primary ${location.pathname === "/contact" ? "text-primary" : ""}`}>
                    <Link to={"/contact"} className="h6">Contacts</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar