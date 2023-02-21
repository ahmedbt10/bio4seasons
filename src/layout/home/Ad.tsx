import { Link } from "react-router-dom"
import fruitSrc from "../../assets/fruits.png"
import useMediaQuery from "../../hooks/useMediaQuery"
import "./ad.css"
import { ArrowRight } from "./FirstSection"

const Ad = () => {
    const isSmallerThan1116 = useMediaQuery("(max-width:1116px)")
    const isSmallerThan1044 = useMediaQuery("(max-width:1044px)")
    const isSmallerThan860 = useMediaQuery("(max-width:860px)")
    const isSmallerThan558 = useMediaQuery("(max-width:558px)")
    const isSmallerThan496 = useMediaQuery("(max-width:496px)")
    const isSmallerThan438 = useMediaQuery("(max-width:438px)")
    const isSmallerThan408 = useMediaQuery("(max-width:408px)")
    const isSmallerThan377 = useMediaQuery("(max-width:377px)")
    return (

        <section className={`flex items-center w-full  
            ${isSmallerThan1116 ? "justify-center gap-5" : "justify-evenly"}
            ${isSmallerThan1044 ? "gap-0" : ""}
            ${isSmallerThan860 ? "flex-col-reverse" : ""}
        `} >
            <div className={`flex flex-col 
                ${isSmallerThan1044 ? "shadow-[0_0_4px_0_#BCBCBC] rounded-lg px-10  gap-4 py-7 mr-[-5.375rem]" : "gap-8 max-w-[412px] "}
                ${isSmallerThan860 ? "mr-7  mt-[-16.25rem] mb-2 items-center text-center" : ""}
                ${isSmallerThan438 ? "mr-5" : ""}
            `}>
                <h1 className="h4">
                    Vivez sainement avec un paquet de plateau de fruits tous les jours!
                </h1>
                <p className="p">
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                    used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                </p>
                <Link to={"/products"}>
                    <button className={`bg-primary flex text-bgWhite items-center  py-6 rounded justify-start w-fit
                    ${isSmallerThan558 ? "gap-3 px-4" : "gap-5 px-8"}
                    `}>
                        <span className="h6 font-bold">
                            {isSmallerThan558 ? "Magasiner" : "Commencer à magasiner"}
                        </span>
                        {isSmallerThan377 ? "" : <ArrowRight color={"white"} />}
                    </button>
                </Link>
            </div>
            <img src={fruitSrc} alt="fruits" className={`
                ${isSmallerThan1044 ? "scale-75" : ""} 
                ${isSmallerThan860 ? "scale-50 mt-[-5.75rem] mb-28" : ""}
                ${isSmallerThan496 ? "mr-4 mb-32" : ""}
                ${isSmallerThan408 ? "mb-36" : ""}
                `} />
        </section>
    )
}

export default Ad