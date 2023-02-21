import React from 'react'
import nourritureSrc from "../../assets/nourriture.png"

const Service = () => {
    return (
        <section className="flex justify-start items-center gap-6 p-8 max-w-[636px] shadow-[0_0_4px_0_#E5E5E5] rounded-lg service">
            <img src={nourritureSrc} alt="nourriture" />
            <div>
                <h1 className="h5">
                    Nourriture fraîche
                </h1>
                <p>
                    in publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface without relying on meaningful content.
                </p>
            </div>
        </section>

    )
}

export default Service