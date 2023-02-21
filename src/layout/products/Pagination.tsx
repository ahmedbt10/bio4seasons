
import { useState, useEffect } from "react"
import useMediaQuery from "../../hooks/useMediaQuery"

export const ArrowNext = ({ color }: { color: string }) => {
    return (
        <svg
            width="26"
            height="22"
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.6667 1.66675L25 11.0001M25 11.0001L15.6667 20.3334M25 11.0001H1"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    )
}
export const ArrowPrev = ({ color }: { color: string }) => {
    return (
        <svg
            width="26"
            height="22"
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.3333 20.3333L0.999999 10.9999M0.999999 10.9999L10.3333 1.66658M0.999999 10.9999L25 10.9999"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>

    )
}

const Pagination = ({ currentPage, setCurrentPage, prodsPerPage, totalPages }:
    {
        currentPage: number,
        setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
        prodsPerPage: number,
        totalPages: number
    }) => {
    const pageNumbers: Array<number> = [];
    for (let i = 1; i <= Math.ceil(totalPages / prodsPerPage); i++) {
        pageNumbers.push(i)
    }
    const [pagesShown, setPagesShown] = useState<Array<number>>(pageNumbers);

    // setPagesShown(currentPage>=3?[currentPage-2,currentPage-1,currentPage]:[currentPage,currentPage +1,currentPage+2])
    const isSmallerThan560 = useMediaQuery("(max-width: 560px)")
    useEffect(() => {
        isSmallerThan560 ? setPagesShown(currentPage >= 3 ? [currentPage - 2, currentPage - 1, currentPage] : currentPage === 1 ? [currentPage, currentPage + 1, currentPage + 2] : [currentPage - 1, currentPage, currentPage + 1])
            : setPagesShown(currentPage <= 6
                ? pageNumbers.filter((page) => page <= 6)
                : [currentPage - 5, currentPage - 4, currentPage - 3, currentPage - 2, currentPage - 1, currentPage])

    }, [isSmallerThan560])

    const increase = (number: number) => {
        number < pageNumbers.length && setCurrentPage(number + 1);
        currentPage === pagesShown[pagesShown.length - 1] && showHiddenNextItem(pagesShown);
    }
    const decrease = (number: number) => {
        number > 1 && setCurrentPage(number - 1);
        currentPage === pagesShown[0] && showHiddenPrevItem(pagesShown);
    }


    //show next or previous element if > pages to show
    const showHiddenNextItem = (pages: Array<number>) => {
        pages.shift();
        setPagesShown([...pages, pages[pages.length - 1] + 1])
    }
    const showHiddenPrevItem = (pages: Array<number>) => {
        pages.pop();
        setPagesShown([pages[0] - 1, ...pages])
    }


    return (
        <section className="flex items-center justify-between  gap-6">
            <button onClick={() => decrease(currentPage)} disabled={currentPage === 1}>
                <ArrowPrev color={currentPage === 1 ? "#E5E5E5" : "black"} />
            </button>
            <ul className="flex justify-between gap-4">
                {pagesShown.map((page) =>
                    <li
                        className={
                            `${page === currentPage ? "bg-primary text-bgWhite" : "bg-[#F6F6F6]"}
                            
                                rounded shadow-[0_0_2px_0_#E5E5E5] px-5 py-3 cursor-pointer`
                        }
                        key={"page" + page}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </li>
                )}
            </ul>
            <button onClick={() => increase(currentPage)} disabled={currentPage === pageNumbers.length}>
                <ArrowNext color={currentPage === pageNumbers.length ? "#E5E5E5" : "black"} />
            </button>

        </section>
    )
}

export default Pagination