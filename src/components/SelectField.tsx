import { useEffect, useRef, useState } from "react";
import "./select-field.css"

const SelectOption = ({ option, setChoice, setOpen }:
    { option: string, setChoice: React.Dispatch<React.SetStateAction<string>>, setOpen: React.Dispatch<React.SetStateAction<boolean>> }
) => {
    const handleClick = () => {
        setChoice(option)
        setOpen(false)
    }
    return (
        <li className="py-2 px-4 hover:bg-[#cbcbcb] rounded cursor-pointer" onClick={handleClick}>
            <span className="font-semibold capitalize">{option}</span>
        </li>
    )
}
const MultipleSelectOption = ({ option, setChoice }: { option: string, setChoice: React.Dispatch<React.SetStateAction<string>> }) => {
    const [checked, setChecked] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const handleClick = () => {
        inputRef.current?.checked ?
            setChecked(true)
            : setChecked(false)
    }
    const handleChange = () => {
        !checked
            ? setChoice(prev => prev.length === 0 ? option : prev + " - " + option)
            : setChoice(
                prev => prev.indexOf(option) === 0 && prev.length > option.length
                    ? prev.replace(option + " - ", "")
                    : prev === option
                        ? prev.replace(option, "")
                        : prev.replace(" - " + option, "")
            )
    }
    return (
        <li className="py-2 px-4 hover:bg-[#cbcbcb] rounded flex items-center gap-3">
            <input type="checkbox" className="scale-150 cursor-pointer" onChange={handleChange} ref={inputRef} onClick={handleClick} checked={checked}></input>
            <span className="font-semibold capitalize">{option}</span>
        </li>
    )
}

const SelectField = ({ label, options, multiple = false, setOptSelected }:
    {
        label: string,
        options: Array<string>,
        multiple: boolean,
        setOptSelected: React.Dispatch<React.SetStateAction<string[]>>
    }) => {
    const [open, setOpen] = useState(false);
    const [choice, setChoice] = useState("");


    // this is to hide the field when not focusing
    // const fieldRef = useRef<HTMLUListElement>(null);
    // const fieldIsClickedInside = useOutsideClick(fieldRef, open);

    const handleClick = () => {
        setOpen(prev => !prev)
    }
    useEffect(() => {
        setOptSelected(
            choice.includes("-")
                ? choice.split(" - ")
                : choice === "" ? []
                    : [choice]
        )
    }, [choice])
    return (
        <div className="w-full relative">
            <div
                className={`h-14  rounded p-4  shadow-[0_0_4px_0_#E5E5E5] pr-8 capitalize relative cursor-pointer overflow-hidden ${open ? "outline" : "outline-none"}`}
                onClick={handleClick}
            >
                <span className="font-bold absolute left-4 top-[5px]">{label}</span>
                <span className="relative translate-x-[-16.5%] top-[0.675rem] font-normal" id="current-choice">{choice === "" ? label : choice}</span>
                <svg
                    className={`fill-black-100 h-4 w-4 absolute top-5 right-0 mr-4 transition-[0.4s] ${open ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>

            <div className={`absolute z-10 w-full flex flex-col 
                ${open ? "" : "hidden"}
                 bg-[#FFFFFF] rounded mt-1 transition-[0.4s] gap-1 cursor-pointer shadow-[0_0_4px_0_#E5E5E5]
                 `}

            >
                <ul className={`overflow-y-scroll h-[${options.length * 2.5}rem] max-h-40`}>
                    {
                        options.map((option, index) => multiple ? <MultipleSelectOption key={"option" + index} option={option} setChoice={setChoice} /> : <SelectOption key={"option" + index} option={option} setChoice={setChoice} setOpen={setOpen} />)
                    }
                </ul>
            </div>

        </div>
    );
};

export default SelectField;
