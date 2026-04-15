import ProductsList from "../features/products/ProductsList/ProductsList";
import InputSearch from "../component/ui/InputSearch/InputSearch";
import {createContext, useState} from "react";


export const ValueProductsContext = createContext('');

const HomePage = () => {


    const [valueProducts, setValueProducts] = useState('');


    return (
        <div>
            <InputSearch setValueProducts={setValueProducts}/>
            <ValueProductsContext value={valueProducts}>
                <ProductsList/>
            </ValueProductsContext>
        </div>
    )
}

export default HomePage;