import React, { useEffect, useState } from 'react'
import "./input-field.css"

const InputField = React.forwardRef<HTMLInputElement, any>(({ label, name, type, placeholder }: { label: string, name: string, type: string, placeholder: string }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [content, setContent] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.currentTarget.value)
        setContent(e.currentTarget.value)
    }
    // const refConten= ref?.current?.value
    return (
        <div className="input-inset-field">
            <label htmlFor={name} className={`${isFocused ? "opacity-0" : ""} capitalize`}>{label}</label>
            <input
                className={`shadow-[0_0_4px_0_#E5E5E5] h-14 rounded top-5 p-4 
                    ${!isFocused && content.length > 0 ? "no-focus-empty" : ""}
                    `}
                type={type}
                onBlur={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
                onChange={(e) => handleChange(e)}
                name={name}
                ref={ref}
                placeholder={placeholder} />
        </div>
    )
})

export default InputField