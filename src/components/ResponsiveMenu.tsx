import menuSrc from "../assets/menu.png"

const ResponsiveMenu = ({ setShow }: { setShow: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const showNav = () => setShow((prev) => !prev)
    return (

        <button onClick={showNav}>
            <img src={menuSrc} alt="menu-icon" />
        </button>
    )
}

export default ResponsiveMenu