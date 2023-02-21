import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, createContext, useState } from 'react'

export interface FilterFormProps {
    name: string | undefined,
    category: Array<string>,
    sort: string,
    putName: (currentName: string | undefined) => void,
    putCategory: (currentCategory: Array<string>) => void,
    putSort: (currentSort: string) => void,
}

export const FilterFormContext = createContext<FilterFormProps>({
    name: "",
    category: [],
    sort: "",
    putName: (currentName: string | undefined) => { },
    putCategory: (currentCategory: Array<string>) => { },
    putSort: (currentSort: string) => { },

})




const FilterFormProvider = ({ children }: { children: Array<JSX.Element> | JSX.Element }) => {
    const [name, setName] = useState<string>("");
    const [category, SetCategory] = useState<Array<string>>([]);
    const [sort, setSort] = useState<string>("")
    const putName = (currentName: string | undefined): void => {
        currentName === undefined ? setName("")
            : currentName.length > 0 && setName(currentName);
    }
    const putCategory = (currentCategory: Array<string>): void => {
        currentCategory.length > 0 && SetCategory(currentCategory);
    }
    const putSort = (currentSort: string): void => {
        currentSort === undefined ? setSort("")
            : currentSort.length > 0 && setSort(currentSort);
    }
    const contextValue: FilterFormProps = {
        name: name,
        category: category,
        sort: sort,
        putName,
        putCategory,
        putSort,
    }
    return (
        <FilterFormContext.Provider value={contextValue}>
            {children}
        </FilterFormContext.Provider>
    )
}

export default FilterFormProvider