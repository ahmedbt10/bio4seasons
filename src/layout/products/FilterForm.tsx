import { useContext, useEffect, useRef, useState } from "react";
import InputField from "../../components/InputField";
import SelectField from "../../components/SelectField";
import "./filter-form.css"
import { FilterFormContext, FilterFormProps } from "../../context/FilterFormContext";


const FilterForm = () => {
    // const [name, setName] = useState<string>("");
    // this is to get the data from the input element
    const name = useRef<HTMLInputElement>(null);

    // these are to get the data from the customized select element
    // const [submitted, setSubmitted] = useState<boolean>(false);
    const [category, setCategory] = useState<Array<string>>([]);
    const [sort, setSort] = useState<Array<string>>([])
    const filtredForm = useContext<FilterFormProps>(FilterFormContext)
    useEffect(() => {
        console.log(filtredForm)
    }, [filtredForm])
    const handleClick = () => {
        filtredForm.putCategory(category);
        filtredForm.putSort(sort[0])
        filtredForm.putName(name.current?.value)
    }

    return (
        <form className="flex w-full gap-2 justify-center" id="filter-form" onSubmit={(e) => e.preventDefault()}>
            <InputField
                name="SearchByName"
                type="search"
                placeholder="Que cherchez vous?"
                label="Chercher"
                ref={name}
            />
            <div className="flex gap-2 w-[40%]">
                <div className="w-1/2">
                    <SelectField
                        setOptSelected={setCategory}
                        label={"Catégories"}
                        options={["Fruits", "Légumes"]}
                        multiple={true} />
                </div>
                <div className="w-1/2">
                    <SelectField
                        setOptSelected={setSort}
                        label={"Tirer par"}
                        options={["Prix"]}
                        multiple={false} />
                </div>
            </div>
            <button type="submit" className="bg-primary h-14 rounded text-bgWhite px-4" onClick={handleClick}>
                <span className="h6 font-extrabold">Chercher</span>
            </button>
        </form>
    )
}

export default FilterForm