import Product from '../../components/Product'
import { Link } from "react-router-dom"
import "./top-products.css"
import { ArrowRight } from './FirstSection'
import useHover from '../../hooks/useHover'
import { useEffect } from 'react'
const TopProducts = () => {
    const [linkHoverRef, isHovered] = useHover<HTMLAnchorElement>()
    return (
        <section className="px-32 top-products">
            <h1 className="h2 text-center">Top produits</h1>
            <section className="my-20 grid grid-cols-4 gap-11 justify-items-center">
                <Product id={0} />
                <Product id={1} />
                <Product id={2} />
                <Product id={3} />
                <Product id={4} />
                <Product id={5} />
                <Product id={6} />
                <Product id={7} />
            </section>
            <div className="flex justify-center">
                <Link to="/products" className="h5 text-center flex gap-2 items-center hover:text-primary hover:transition-[0.4s]" ref={linkHoverRef}>
                    Voir tous
                    <ArrowRight color={isHovered ? "rgb(76,175,80)" : "black"} />
                </Link>
            </div>
        </section>
    )
}

export default TopProducts