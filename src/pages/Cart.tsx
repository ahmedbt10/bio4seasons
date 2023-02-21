import { useContext } from "react"
import vegSrc from "../assets/faqus.png"
import emptySrc from "../assets/trash.png"
import useMediaQuery from "../hooks/useMediaQuery"
import { CartContext } from "../context/CartContext";
import { Product } from "../components/Product";
import EmptyCart from "../layout/cart/EmptyCart";
import { Link } from "react-router-dom";

const AddQuant = ({ id }: { id: number }) => {
    const isSmallerThan827 = useMediaQuery("(max-width:827px)")
    const isSmallerThan678 = useMediaQuery("(max-width:678px)")
    const cart = useContext(CartContext)
    // @ts-expect-error
    const quantity = cart.getProductQuantity(id).toString();
    const increase = () => {
        cart.addOneProduct(id)
    }
    const decrease = () => {
        cart.removeOneProduct(id)
    }
    const handleDelete = () => {
        cart.deleteProduct(id)
    }
    return (
        <div className={`flex items-center gap-2 ${isSmallerThan827 ? "" : "border-x-4 px-8 border-x-[#F9F9F9]"}`}>
            <div className="flex items-center">
                <button className={`rounded bg-primary text-bgWhite h3 flex justify-center items-center  
                ${isSmallerThan678 ? "w-8 h-8" : "w-16"}

                `} onClick={decrease}>-</button>
                <div className={` bg-[#F5F5F5] rounded px-8 flex items-center justify-center
                ${isSmallerThan678 ? "h-8" : "h-14"}
                `}>
                    <span className="h5">
                        {quantity}
                    </span>
                </div>
                <button className={`rounded bg-primary text-bgWhite h3 flex justify-center items-center 
                ${isSmallerThan678 ? "w-8 h-8" : "w-16"}
                `} onClick={increase}>+</button>
            </div>
            <button className={`p-5 rounded bg-[#d3e6d4]
            ${isSmallerThan678 ? "w-8 h-8" : "w-16"}
            `} onClick={handleDelete}>
                <img src={emptySrc} alt="trash-icon" />
            </button>
        </div >
    )
}
const CartProduct = ({ product }: { product: Product | undefined }) => {
    return (
        product === undefined
            ? <></>
            : <section className="flex items-center ml-[-4.25rem] justify-start">
                <img src={vegSrc} alt="veg" className="scale-50" />
                <div className="text-left ml-[-3rem]">
                    <h1 className="h6 font-semibold">{product.name}</h1>
                    <h2 className="h6 font-semibold text-primary text-sm">
                        {product.price}€ <span className="text-[#3B6C3D]">/ Kg</span>
                    </h2>
                </div>
            </section>
    )
}
const CartProductRow = ({ id }: { id: number }) => {
    const isSmallerThan827 = useMediaQuery("(max-width:827px)")
    const cart = useContext(CartContext);
    const quantity = cart.getProductQuantity(id);
    //@ts-ignore
    const product = getProduct(id);
    const price = product?.price;
    //@ts-expect-error
    const totalPrice = (price * quantity).toFixed(2);
    return (
        isSmallerThan827
            ? <ResponsiveCartProduct
                price={price === undefined ? 0 : price}
                id={id}
            />
            : <section className="flex justify-between px-7 items-center border-b-4 border-b-[#F9F9F9]">
                <CartProduct product={product} />
                <AddQuant id={id} />
                <p className="h5">
                    {totalPrice}€
                </p>
            </section>

    )
}
const ResponsiveCartProduct = ({ price, id }: { price: number, id: number }) => {
    const isSmallerThan496 = useMediaQuery("(max-width:496px)")
    const cart = useContext(CartContext)
    const quantity = cart.getProductQuantity(id)
    //@ts-expect-error
    const totalPrice = (quantity * price).toFixed(2)
    return (
        <section className={`flex items-center border-b-4 pb-6 border-b-[#F9F9F9] justify-center gap-3 
        ${isSmallerThan496 ? "flex-col" : ""}
        `}>
            <img src={vegSrc} alt="veg" className={`scale-50 
            ${isSmallerThan496 ? "mb-[-3rem]" : ""}
            `} />
            <div className={`${isSmallerThan496 ? "text-center flex flex-col gap-2 items-center" : "text-left ml-[-3rem]"}`}>
                <h1 className="h6 font-semibold">faqus</h1>
                <h2 className="h6 font-semibold text-primary text-sm">
                    {price}€ <span className="text-[#3B6C3D]">/ Kg</span>
                </h2>
                <AddQuant id={id} />
                <div className={`flex ${isSmallerThan496 ? "gap-2" : "gap-4"}`}>
                    <h1 className="p font-bold">Totale:</h1>
                    <h2 className="p font-bold text-primary">{totalPrice}€</h2>
                </div>
            </div>
        </section>
    )
}

// get product from id
export const getProduct = (id: Product["id"]) => {
    const cartProducts: Array<Product> = [{
        id: id,
        img: vegSrc,
        name: "Courgette",
        price: 4.95,
        category: "fruits",
        isTopProduct: false,
        mesure: "kg"
    }]
    return cartProducts.find((product) => product.id === id)
}
const Cart = () => {
    const isSmallerThan984 = useMediaQuery("(max-width: 984px)")
    const isSmallerThan496 = useMediaQuery("(max-width:496px)")
    const isSmallerThan378 = useMediaQuery("(max-width: 378px)")
    const isSmallerThan827 = useMediaQuery("(max-width:827px)")
    const cart = useContext(CartContext)
    //@ts-expect-error
    const total = cart.getTotalCost(cart.items).toFixed(2)
    return (
        <main className={`py-12 ${isSmallerThan378 ? "px-8" : isSmallerThan984 ? "px-16" : "px-32"}`}>
            <h1 className="h2 text-center">Votre panier</h1>
            {cart.items.length === 0
                ? <EmptyCart />
                : <>
                    {!isSmallerThan827 && <div className="flex justify-between p-7 bg-[#F5F5F5] rounded-lg shadow-[0_0_4px_0_#B3B3B3] mt-20">
                        <span className="h5 font-bold">Produit</span>
                        <span className="h5 font-bold">Quantité</span>
                        <span className="h5 font-bold">Totale</span>
                    </div>}
                    {cart.items.map((item) => {
                        const product = getProduct(item.id)
                        //@ts-expect-error
                        return <CartProductRow key={"product-" + item.id} product={product} total={total} id={item.id} />
                    })}
                    <section className={`flex justify-between pt-10 ${isSmallerThan496 ? "flex-col gap-2" : ""}`} >
                        <div className={`flex items-center gap-2 ${isSmallerThan496 ? "self-center" : ""}`}>
                            <h1 className="h4 uppercase">Totale:</h1>
                            <h2 className="h6 font-bold text-primary">{total}€</h2>
                        </div>
                        <button className="bg-primary text-bgWhite h6 font-bold px-8 py-2 rounded">
                            <Link to="/ahmed">
                                Commander
                            </Link>
                        </button>
                    </section>
                </>}
        </main>
    )
}

export default Cart