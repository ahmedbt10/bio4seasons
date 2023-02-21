import React, { ReactNode, useEffect, useRef, useState } from "react";

const useOutsideClick = (ref: React.RefObject<HTMLUListElement>, open: boolean): boolean => {
    const [clickedInside, setClickedInside] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState(open)
    console.log(isOpen)
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && ref.current?.contains(e.target as Node)) {
                console.log("current")
                setClickedInside(true);
            }
            else if (open && ref.current && !ref.current?.contains(e.target as Node)) {
                console.log("not current")
                setClickedInside(false)
            }
            else console.log("problem")
        }
        // Bind the event listener
        document.addEventListener("click", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref.current]);
    return clickedInside;
}

export default useOutsideClick

