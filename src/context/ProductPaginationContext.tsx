import React, { createContext, useEffect, useState } from 'react'


export interface ProductPaginationProps {
    pageItems: Array<ProductPageProps>,
    pagesToShow: number,
    getNextPage: () => void,
    getPrevPage: () => void,
    setPagesToShow: () => void,
}
export interface ProductPageProps {
    count: number;
    pageItems: Array<number>;
}
export const ProductPaginationContext = createContext({
    pageItems: [{ count: 1, pageItems: [0] }],
    pagesToShow: 0,
    getNextPage: () => { },
    getPrevPage: () => { },
    setPagesToShow: () => { }
})

const ProdPaginationProvider = ({ children }: { children: Array<JSX.Element> | JSX.Element }) => {
    const [count, setCount] = useState<ProductPageProps["count"]>(1)
    const [pageItems, setPageItems] = useState<Array<ProductPageProps>>([{ count: count, pageItems: [] }])
    const [pagesToShow, setPagesToShow] = useState<ProductPaginationProps[""]>(3)

    const getNextPage = () => {
        setCount((prev) => prev + 1)
    }
    const getPrevPage = () => {
        setCount((prev) => prev - 1)
    }
    const setPagesToShow = () => {

    }
    useEffect(() => {
        count === 1
            ? setPageItems

    })

    const contextValue: ProductPaginationProps = {
        pageItems: pageItems,
        pagesToShow: 0,
        getNextPage,
        getPrevPage,
        setPagesToShow,
    }
    return (
        <ProductPaginationContext.Provider value={contextValue}>
            {children}
        </ProductPaginationContext.Provider>
    )
}
