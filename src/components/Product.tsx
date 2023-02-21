import faqusSrc from "../assets/faqus.png"
import cartSrc from "../assets/cartIcon.png"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { CartSvg } from "./Header"
export interface Product {
    id: number
    img: string;
    name: string;
    price: number;
    category: "fruits" | "vegetables";
    isTopProduct: boolean;
    mesure: "piece" | "kg";
}

const Product = ({ id }: { id: Product["id"] }) => {
    const cart = useContext(CartContext);
    const product: Product = {
        id: id,
        img: faqusSrc,
        name: "Courgette",
        price: 4.95,
        category: "fruits",
        isTopProduct: false,
        mesure: "kg"
    }
    return (
        <section className="w-64 rounded-lg shadow-[0_0_2px_0_#BCBCBC] pb-3">
            <img src={product.img} alt="product" />
            <h1 className="h6 font-extrabold mx-3">{product.name + id}</h1>
            <div className="flex justify-between items-center mx-3">
                <h2 className="h6 font-semibold text-primary">
                    {product.price}€ <span className="text-[#3B6C3D]">/ Kg</span>
                </h2>
                <button className="bg-primary p-3 rounded-lg hover:bg-[#3B6C3D] hover:transition-[0.4s]" onClick={() => cart.addOneProduct(id)}>
                    <CartSvg color="white" />
                </button>
            </div>
        </section>
    )
}

export default Product