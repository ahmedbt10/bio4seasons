
import { Link } from 'react-router-dom'
import useMediaQuery from '../../hooks/useMediaQuery'
import emptySrc from "../../assets/undraw_empty_cart_co35 1.png"
import { ArrowRight } from '../home/FirstSection';

const EmptyCart = () => {
    const isSmallerThan558 = useMediaQuery("(max-width:558px)");
    const isSmallerThan377 = useMediaQuery("(max-width:377px)")
    return (
        <section className="flex flex-col items-center py-10 gap-6 ">
            <h1 className="h5 font-normal">Votre Panier est vide.</h1>
            <img src={emptySrc} alt="empty-cart" />
            <Link to={"/products"}>
                <button className={`bg-primary flex text-bgWhite items-center  py-6 rounded justify-start w-fit
                    ${isSmallerThan558 ? "gap-3 px-4" : "gap-5 px-8"}
                    `}>
                    <span className="h6 font-bold">
                        {isSmallerThan558 ? "Magasiner" : "Commencer à magasiner"}
                    </span>
                    {isSmallerThan377 ? "" : <ArrowRight color="white" />}
                </button>
            </Link>
        </section>
    )
}

export default EmptyCart