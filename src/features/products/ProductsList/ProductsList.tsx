import {useEffect, useState} from "react";
import ProductItem from "../ProductItem/ProductItem";
import './ProductList.css';

const ProductsListPage = () => {

    interface Product {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
        rating: {
            rate: number;
            count: number;
        }
    }

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="products-list">
            {products.map((p) => (
                <ProductItem id={p.id} title={p.title} price={p.price} description={p.description} category={p.category} image={p.image} rating={p.rating}/>
            ))}
        </div>
    )
}

export default ProductsListPage;