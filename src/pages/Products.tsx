
import { useState } from 'react';
import FilterForm from '../layout/products/FilterForm'
import OurProducts from '../layout/products/OurProducts'
import Pagination from '../layout/products/Pagination'
import FilterFormProvider from '../context/FilterFormContext';
import ProductModal from '../components/ProductModal';

const Products = () => {
    const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28];
    const [products, setProducts] = useState<Array<number>>(ids);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [prodsPerPage, setProdsPerPage] = useState<number>(8);
    const indexOfLastProd = currentPage * prodsPerPage;
    const indexOfFirstProd = indexOfLastProd - prodsPerPage;
    const currentProds = products.slice(indexOfFirstProd, indexOfLastProd)
    return (

        <FilterFormProvider>
            <main className="flex flex-col justify-center items-center gap-11 px-20 mt-10">
                <h1 className="h2 text-center">Nos Produits</h1>
                <FilterForm />
                <OurProducts currentIds={currentProds} />
                <ProductModal id={1} />
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} prodsPerPage={prodsPerPage} totalPages={products.length} />
            </main>
        </FilterFormProvider>
    )
}

export default Products