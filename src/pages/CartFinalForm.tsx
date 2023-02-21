import { useContext } from "react"
import InputField from "../components/InputField"
import useMediaQuery from "../hooks/useMediaQuery"
import "./cart-final-form.css"
import { CartContext } from "../context/CartContext"
import SelectField from "../components/SelectField"
const CartFinalForm = () => {
    const isSmallerThan865 = useMediaQuery("(max-width:865px)")
    const isSmallerThan800 = useMediaQuery("(max-width:800px)")
    const isSmallerThan700 = useMediaQuery("(max-width:700px)")
    const isSmallerThan615 = useMediaQuery("(max-width:615px)")
    const isSmallerThan550 = useMediaQuery("(max-width:550px)")
    const isSmallerThan450 = useMediaQuery("(max-width:450px)")
    const cart = useContext(CartContext)
    //@ts-expect-error
    const total = cart.getTotalCost(cart.items).toFixed(2)
    return (
        <main className={`py-12  
        ${isSmallerThan450 ? "px-4" : ""}
        ${isSmallerThan615 ? "px-8" : ""}
        ${isSmallerThan865 ? "px-16" : "px-32"}
        `}>
            <h1 className="h2 text-center mb-14">Finalisez votre commande</h1>
            <section className={`py-16 shadow-[0_0_4px_0_#B3B3B3] rounded-lg flex flex-col gap-10
            ${isSmallerThan450 ? "px-4" : "px-8"}
            ${isSmallerThan550 ? "px-8" : "px-14"} 
            `}>
                <h1 className="h5 font-semibold text-center">Où voulez-vous que votre commande soit envoyée?</h1>
                <form action="" className="flex flex-col gap-10" id="final-form">
                    <div className="flex flex-col gap-4">
                        <InputField label={"Nom et prénom"} name={"fullName"} type={"text"} placeholder={"Comment devrions-nous vous appeler?"} />
                        <InputField label={"Email"} name={"email"} type={"email"} placeholder={"Votre adresse email"} />
                        <InputField label={"Telephone"} name={"phoneNum"} type={"tel"} placeholder={"Votre numéro de téléphone mobile ou fixe"} />
                        <span className="p" id="delivery-info">Nous en avons besoin pour la livraison, juste au cas où nous aurions besoin de vous joindre.</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <InputField label={"Adresse"} name={"address"} type={"address"} placeholder={"numéro d'appartement, de suite ou d'espace"} />
                        <InputField label={"Adresse 2 (facultatif)"} name={"address2"} type={"address"} placeholder={"autres informations"} />
                        {/* to change */}
                        <SelectField label={"Région"} options={["Taverny", "Ahmed"]} multiple={false} />
                        <div className={`flex gap-4 ${isSmallerThan700 ? "flex-col" : ""} `} id="form-last-section">
                            <SelectField label={"Ville"} options={["Paris", "Lion"]} multiple={false} />
                            <InputField label={"Code postal"} name={"postalCode"} type={"postal"} placeholder={"Expl: 95150, 95152, 95153"} />
                        </div>
                    </div>
                </form>
                <section className={`flex justify-between pt-10 ${isSmallerThan800 ? "flex-col gap-2" : ""}`} >
                    <div className={`flex items-center gap-2 ${isSmallerThan800 ? "self-center" : ""}`}>
                        <h1 className="h4 uppercase">Totale:</h1>
                        <h2 className="h6 font-bold text-primary">{total}€</h2>
                    </div>
                    <button type="submit" className="bg-primary text-bgWhite h6 font-bold px-8 py-2 rounded">
                        Commander
                    </button>
                </section>
            </section>
        </main>
    )
}

export default CartFinalForm