
import Product from '../../components/Product'
import "../home/top-products.css"
const OurProducts = ({ currentIds }: { currentIds: Array<number> }) => {
    return (
        <section className="top-products">
            <section className={`
            my-10 grid justify-items-center
            ${currentIds.length < 4 ? "grid-cols-3 gap-x-20 gap-y-11" : "grid-cols-4 gap-11"}
            `}>
                {currentIds.map((id) => <Product key={id} id={id} />)}
            </section>
        </section>
    )
}

export default OurProducts