import { createContext, useState } from "react";
import { getProduct } from "../pages/Cart";
import { Product } from "../components/Product";


export interface CartProps {
    items: Array<CartItemProps>,
    getProductQuantity: (id: CartItemProps["id"]) => number,
    addOneProduct: (id: CartItemProps["id"]) => void,
    removeOneProduct: (id: CartItemProps["id"]) => void,
    deleteProduct: (id: CartItemProps["id"]) => void,
    getTotalCost: (products: CartProps["items"]) => number,

}
export interface CartItemProps {
    id: Product["id"];
    quantity: number;
}
export const CartContext = createContext<CartProps>({
    items: [{ id: 0, quantity: 0 }],
    //@ts-expect-error
    getProductQuantity: () => { },
    addOneProduct: () => { },
    removeOneProduct: () => { },
    deleteProduct: () => { },
    //@ts-expect-error
    getTotalCost: () => { },
})

const CartProvider = ({ children }: { children: Array<JSX.Element> | JSX.Element }) => {
    const [cartProducts, setCartProducts] = useState<Array<CartItemProps>>([])

    // cartItem has {id:number, quantity:1}
    const getProductQuantity = (id: CartItemProps["id"]) => {
        const quantity = cartProducts.find((product) => product.id === id)?.quantity;
        return quantity === undefined ? 0 : quantity
    }

    const addOneProduct = (id: CartItemProps["id"]) => {
        const quantity = getProductQuantity(id);
        quantity === 0
            ? setCartProducts([...cartProducts, { id: id, quantity: 1 }])
            : setCartProducts(cartProducts.map((product) => product.id === id ? { ...product, quantity: product.quantity + 1 } : product))
    }
    const removeOneProduct = (id: CartItemProps["id"]) => {
        const quantity = getProductQuantity(id);
        quantity === 1
            ? deleteProduct(id)
            : setCartProducts(cartProducts.map(product => product.id === id ? { ...product, quantity: product.quantity - 1 } : product))
    }
    const deleteProduct = (id: CartItemProps["id"]) => {
        setCartProducts(cartProducts.filter(product => product.id !== id))
    }
    const getTotalCost = (products: CartProps["items"]) => {
        let totalCost = 0;
        products.map(product => {
            const price = getProduct(product.id)?.price;
            totalCost += price === undefined ? 0 : price * product.quantity
        })
        return totalCost
    }
    const contextValue: CartProps = {
        items: cartProducts,
        getProductQuantity,
        addOneProduct,
        removeOneProduct,
        getTotalCost,
        deleteProduct,
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider