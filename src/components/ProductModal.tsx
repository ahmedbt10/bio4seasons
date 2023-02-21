import { useContext, useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import { CartContext } from "../context/CartContext"
import { CartSvg } from "./Header"
import bigSrc from "../assets/productbig.svg"
const AddQuant = ({ id, count, setCount }:
    { id: number, count: number, setCount: React.Dispatch<React.SetStateAction<number>> }) => {
    const increase = () => {
        setCount((prev) => prev + 1)
    }
    const decrease = () => {
        setCount((prev) => prev - 1)
    }
    return (
        <div className={`flex items-center gap-2`}>
            <div className="flex items-center">
                <button className={`rounded bg-primary text-bgWhite h3 flex justify-center items-center  w-8 h-8

                `} onClick={decrease}>-</button>
                <div className={` bg-[#F5F5F5] rounded px-8 flex items-center justify-center h-8
                `}>
                    <span className="h5">
                        {count}
                    </span>
                </div>
                <button className={`rounded bg-primary text-bgWhite h3 flex justify-center items-center w-8 h-8
                `} onClick={increase}>+</button>
            </div>
        </div >
    )
}
const ProductModal = ({ id }: { id: number }) => {
    const [show, setShow] = useState(true);
    const isSmallerThan771 = useMediaQuery("(max-width:771px)");
    const [count, setCount] = useState(1);
    const cart = useContext(CartContext)
    const quantity = cart.getProductQuantity(id)
    const productToCart = () => {
        if (count > quantity) {
            for (let i = 1; i++; i < count - quantity) {
                cart.addOneProduct(id);
            }
        }
        else if (count < quantity) {
            for (let i = 1; i++; i < quantity - count) {
                cart.removeOneProduct(id);
            }
        }
        else return;
    }
    return (
        <div className={`absolute h-full grid bg-[#000000] bg-opacity-30 w-full place-items-center
        ${show ? "" : "hidden"}
        `} >
            <section className={`px-10 py-16  bg-bgWhite rounded relative
            ${isSmallerThan771 ? "w-[90%]" : "w-2/3"}
            `}>
                {/* <img src={bigSrc} alt="prodcut-big" /> */}
                <div className="w-full bg-primary h-1/2">
                    a
                </div>
                <button className="h2 absolute top-0 right-4" onClick={() => setShow(false)}>
                    x
                </button>
                <div className="flex items-center justify-between">
                    <div className="max-w-[50%]">
                        <h1 className="h3">Chou Blanc</h1>
                        <p className="p text-black-25">
                            in publishing and graphic design, Lorem ipsum is a placeholder
                            text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful
                            content to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="h6 font-bold">Quantité</h1>
                        <AddQuant id={id} count={count} setCount={setCount} />
                        <h2 className="h6 font-bold">Totale: <span className="text-primary">{`${5.74}€`}</span></h2>
                        <button className="bg-primary flex items-center gap-1 p-3 rounded" onClick={productToCart}>
                            <CartSvg color="white" />
                            <span className="p font-bold text-bgWhite">Ajouter au panier</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductModal