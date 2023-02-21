import fcbSrc from "../assets/facebook.png"
import mailSrc from "../assets/mailIcon.png"
import useMediaQuery from "../hooks/useMediaQuery"
import mapSrc from "../assets/Screenshot from 2020-10-31 13-24-42 1.png"
const Contact = () => {
    const isSmallerThan984 = useMediaQuery("(max-width: 984px)")
    const isSmallerThan378 = useMediaQuery("(max-width: 378px)")
    const isSmallerThan900 = useMediaQuery("(max-width: 900px)")
    return (
        <main className={`py-12 ${isSmallerThan378 ? "px-8" : isSmallerThan984 ? "px-16" : "px-32"} flex justify-center`}>
            <section className={`flex items-start ${isSmallerThan900 ? "flex-col" : ""}`}>
                <ul className={`flex flex-col gap-10 shadow-[0_0_4px_0_#B3B3B3] rounded-lg p-12 ${isSmallerThan900 ? "w-full items-center px-0" : "w-1/2"}`}>
                    <li>
                        <h1 className="h5 uppercase mb-2">Contactez-nous</h1>
                        <ul className={`flex flex-col gap-5 ${isSmallerThan900 ? "" : "pl-2"}`}>
                            <li className={`flex items-center gap-2 ${isSmallerThan900 ? "justify-center" : ""}`}>
                                <img src={mailSrc} alt="mail" />
                                <a href="mailto: Bio4Saison@gmail.com">Bio4Saison@gmail.com</a>
                            </li>
                            <li className={`flex items-center gap-2 ${isSmallerThan900 ? "justify-center" : ""}`}>
                                <img src={mailSrc} alt="phone" />
                                <a href="tel: 06.23.77.82.32">06.23.77.82.32</a>
                            </li>
                            <li className={`flex items-center gap-2 ${isSmallerThan900 ? "justify-center" : ""}`}>
                                <img src={mailSrc} alt="location" />
                                <p>95150 Taverny, France</p>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h1 className="h6 font-bold uppercase mb-2">SUIVEZ-NOUS</h1>
                        <ul className={`flex gap-2 items-center ${isSmallerThan900 ? "justify-center" : ""}`}>
                            <li className="scale-75">
                                <a href="#">
                                    <img src={fcbSrc} alt="facebook-icon" />
                                </a>
                            </li>
                            <li className="scale-75">
                                <a href="#">
                                    <img src={fcbSrc} alt="instagram-icon" />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className={`rounded-lg ${isSmallerThan900 ? "w-[95%] self-center mt-[-1.2rem]" : "ml-[-5.125rem] mt-48"}`}>
                    <img src={mapSrc} alt="maop" />
                </div>
            </section>
        </main>
    )
}

export default Contact