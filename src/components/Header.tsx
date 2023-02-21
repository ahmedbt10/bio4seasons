import { Link, useLocation } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import logoSrc from "../assets/logo.png"
import searchSrc from "../assets/searchIcon.png"
import useMediaQuery from "../hooks/useMediaQuery"
import Navbar from "./Navbar"
import ResponsiveMenu from "./ResponsiveMenu"
import { CartContext } from "../context/CartContext"

export const CartSvg = ({ color = "black" }: { color: string }) => {
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H3.66667L4.2 3.66667M4.2 3.66667H25L19.6667 14.3333H6.33333M4.2 3.66667L6.33333 14.3333M6.33333 14.3333L3.276 17.3907C2.436 18.2307 3.03067 19.6667 4.21867 19.6667H19.6667M19.6667 19.6667C18.9594 19.6667 18.2811 19.9476 17.781 20.4477C17.281 20.9478 17 21.6261 17 22.3333C17 23.0406 17.281 23.7189 17.781 24.219C18.2811 24.719 18.9594 25 19.6667 25C20.3739 25 21.0522 24.719 21.5523 24.219C22.0524 23.7189 22.3333 23.0406 22.3333 22.3333C22.3333 21.6261 22.0524 20.9478 21.5523 20.4477C21.0522 19.9476 20.3739 19.6667 19.6667 19.6667ZM9 22.3333C9 23.0406 8.71905 23.7189 8.21895 24.219C7.71885 24.719 7.04058 25 6.33333 25C5.62609 25 4.94781 24.719 4.44772 24.219C3.94762 23.7189 3.66667 23.0406 3.66667 22.3333C3.66667 21.6261 3.94762 20.9478 4.44772 20.4477C4.94781 19.9476 5.62609 19.6667 6.33333 19.6667C7.04058 19.6667 7.71885 19.9476 8.21895 20.4477C8.71905 20.9478 9 21.6261 9 22.3333Z"
                stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}
export const SearchSvg = ({ color = "black" }: { color: string }) => {
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 25L17 17L25 25ZM19.6667 10.3333C19.6667 11.559 19.4253 12.7727 18.9562 13.905C18.4872 15.0374 17.7997 16.0663 16.933 16.933C16.0663 17.7997 15.0374 18.4872 13.905 18.9562C12.7727 19.4253 11.559 19.6667 10.3333 19.6667C9.10766 19.6667 7.89399 19.4253 6.76162 18.9562C5.62925 18.4872 4.60035 17.7997 3.73367 16.933C2.86699 16.0663 2.1795 15.0374 1.71046 13.905C1.24141 12.7727 1 11.559 1 10.3333C1 7.85798 1.98333 5.48401 3.73367 3.73367C5.48401 1.98333 7.85798 1 10.3333 1C12.8087 1 15.1827 1.98333 16.933 3.73367C18.6833 5.48401 19.6667 7.85798 19.6667 10.3333Z"
                stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const Header = () => {
    const isSmallerThan850 = useMediaQuery("(max-width: 850px)")
    const isSmallerThan526 = useMediaQuery("(max-width: 526px)")
    const [show, setShow] = useState(false)
    const location = useLocation()
    const cart = useContext(CartContext)
    // close the responsive navbar each time the pathname changes
    useEffect(() => {
        setShow(false)
    }, [location.pathname])
    return (
        <header className={`py-8 flex flex-col rounded-[8px] shadow-[0_0_8px_#E5E5E5] ${isSmallerThan526 ? "px-7" : "px-10"} m-5 gap-12`}>
            <div className={` flex justify-between items-center  `}>
                {isSmallerThan850 && <ResponsiveMenu setShow={setShow} />}
                <Link to="/">
                    <img src={logoSrc} alt="logo" className={`${isSmallerThan850 ? "scale-75" : ""}`} />
                </Link>
                {!isSmallerThan850 && <Navbar />}
                <div className="flex justify-between gap-4 items-center">
                    <button>
                        <SearchSvg color="black" />
                    </button>
                    <div className="relative">
                        {cart.items.length > 0 &&
                            <div className="w-3 h-3 bg-primary absolute rounded-xl left-2 top-[-0.25rem] flex justify-center items-center">
                                <span className="scale-50 font-bold text-bgWhite">{cart.items.length >= 10 ? "." : cart.items.length}</span>
                            </div>
                        }
                        <Link to="/cart">
                            <CartSvg color={location.pathname === "/cart" ? "#4CAF50" : "black"} />
                        </Link>
                    </div>
                </div>
            </div>
            {show && isSmallerThan850 && <Navbar responsive={true} />}
        </header>
    )
}

export default Header