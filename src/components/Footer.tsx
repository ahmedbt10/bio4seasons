import logoSrc from "../assets/Logo.svg"
import mailSrc from "../assets/mailIcon.png"
import { Link } from "react-router-dom"
import fcbSrc from "../assets/facebook.png"
import "./footer.css"
const Footer = () => {
    return (
        <footer className="m-5 rounded-lg shadow-[0_0_8px_0_#E5E5E5] flex flex-col items-center mt-20 pt-11">
            <img src={logoSrc} alt="logo" />
            <section className="w-[90%] m-24">
                <ul className="grid grid-cols-4 justify-items-center" id="nav-list">
                    <li>
                        <h1 className="h5 uppercase mb-5">Contactez-nous</h1>
                        <ul className="flex flex-col gap-5 pl-2">
                            <li className="flex items-center gap-2">
                                <img src={mailSrc} alt="mail" />
                                <a href="mailto: Bio4Saison@gmail.com">Bio4Saison@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={mailSrc} alt="phone" />
                                <a href="tel: 06.23.77.82.32">06.23.77.82.32</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={mailSrc} alt="location" />
                                <p>95150 Taverny, France</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h1 className="h5 uppercase mb-5">Naviguer</h1>
                        <nav>
                            <ul className="flex flex-col gap-5">
                                <li className={`hover:text-primary`}>
                                    <Link to={"/"} className={`${window.location.pathname === "/" ? "active" : ""}`}>Accueil</Link>
                                </li>
                                <li className={`hover:text-primary ${window.location.href.includes("/products") ? "active" : ""}`}>
                                    <Link to={"/products"}>Produits</Link>
                                </li>
                                <li className={`hover:text-primary ${window.location.pathname === "/about" ? "active" : ""}`}>
                                    <Link to={"/about"}>À propos</Link>
                                </li>
                                <li className={`hover:text-primary ${window.location.pathname === "/contact" ? "active" : ""}`}>
                                    <Link to={"/contact"}>Contacts</Link>
                                </li>
                                <li>
                                    <a href="#">Termes</a>
                                </li>
                            </ul>
                        </nav>
                    </li>
                    <li>
                        <h1 className="h5 uppercase mb-5">Catégories</h1>
                        <nav>
                            <ul className="flex flex-col gap-5">
                                <li className="hover:text-primary">
                                    <Link to={"#"}>Fruits</Link>
                                </li>
                                <li className="hover:text-primary">
                                    <Link to={"#"}>Légumes</Link>
                                </li>
                            </ul>
                        </nav>
                    </li>
                    <li>
                        <h1 className="h5 uppercase mb-5">SUIVEZ-NOUS</h1>
                        <ul className="flex gap-5" id="sub-links">
                            <li>
                                <a href="#">
                                    <img src={fcbSrc} alt="facebook-icon" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={fcbSrc} alt="instagram-icon" />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section className="py-9 bg-primary text-center rounded-b-lg w-full">
                <p className="h6">Copyright © <span className="font-bold">Bio 4 Saisons</span> 2020, All rights reserved</p>
            </section>
        </footer>
    )
}

export default Footer