import Service from './Service'
import "./services.css"
const Services = () => {
    return (
        <section className={`services px-32`}>
            <h1 className="h2 text-center">Pourquoi nous choisir?</h1>
            <section className="grid grid-cols-2 gap-16  py-20 justify-items-center justify-between" id="services-list">
                <Service />
                <Service />
                <Service />
                <Service />
            </section>
        </section>
    )
}

export default Services