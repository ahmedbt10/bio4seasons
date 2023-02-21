import illustrationSrc from "../assets/undraw_empty_cart_co35 1.png"
import useMediaQuery from "../hooks/useMediaQuery"
const About = () => {
    const isSmallerThan984 = useMediaQuery("(max-width: 984px)")
    return (
        <main className={` flex flex-col items-center gap-14 py-12 ${isSmallerThan984 ? "px-16" : "px-32"}`}>
            <h1 className="h5 text-center">
                Qui sommes nous?
            </h1>
            <section className={`flex justify-between items-center gap-20 ${isSmallerThan984 ? "flex-col" : ""}`}>
                <section className={`max-w-md flex flex-col gap-4 ${isSmallerThan984 ? "text-center" : ""}`}>
                    <h1 className="h5">This title could be replaced by your content</h1>
                    <p>
                        in publishing and graphic design, Lorem ipsum is a placeholder text commonly
                        used to demonstrate the visual form of a document or a typeface without relying
                        on meaningful content.
                        <br />
                        <br />
                        in publishing and graphic design, Lorem ipsum is a placeholder text commonly
                        used to demonstrate the visual form of a document or a typeface without relying
                        on meaningful content.
                    </p>
                </section>
                <section>
                    <img src={illustrationSrc} alt="illustration" />
                </section>
            </section>
            <section className={`flex justify-between items-center gap-20 ${isSmallerThan984 ? "flex-col-reverse" : ""}`}>
                <section>
                    <img src={illustrationSrc} alt="illustration" />
                </section>
                <section className={`max-w-md flex flex-col gap-4 ${isSmallerThan984 ? "text-center" : ""}`}>
                    <h1 className="h5">This title could be replaced by your content</h1>
                    <p>
                        in publishing and graphic design, Lorem ipsum is a placeholder text commonly
                        used to demonstrate the visual form of a document or a typeface without relying
                        on meaningful content.
                        <br />
                        <br />
                        in publishing and graphic design, Lorem ipsum is a placeholder text commonly
                        used to demonstrate the visual form of a document or a typeface without relying
                        on meaningful content.
                    </p>
                </section>
            </section>
            <section className={`flex justify-between items-center gap-20 ${isSmallerThan984 ? "flex-col" : ""}`}>
                <section className={`max-w-md flex flex-col gap-4 ${isSmallerThan984 ? "text-center" : ""}`}>
                    <h1 className="h5">This title could be replaced by your content</h1>
                    <p>
                        in publishing and graphic design, Lorem ipsum is a placeholder text commonly
                        used to demonstrate the visual form of a document or a typeface without relying
                        on meaningful content.
                        <br />
                        <br />
                        in publishing and graphic design, Lorem ipsum is a placeholder text commonly
                        used to demonstrate the visual form of a document or a typeface without relying
                        on meaningful content.
                    </p>
                </section>
                <section>
                    <img src={illustrationSrc} alt="illustration" />
                </section>
            </section>
        </main>
    )
}

export default About