import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ButtonAddToCart from "../../component/ui/ButtonAddToCart/ButtonAddToCart";
import './ProductCard.css'

const ProductCard: FC = () => {

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


    const [product, setProduct] = useState<Product>();

    const {id} = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);

    return (
        <div className="product-card">
            <div className="product-card-info">
                <img className="product-card-img" alt={product?.title} src={product?.image}/>
                <h4 className="product-card-title">{product?.title}</h4>
                <p className="product-card-rate">{product?.rating.rate}</p>
                <p className="product-card-price">{product?.price}</p>
                <p className="product-card-count">{product?.description}</p>
                <ButtonAddToCart idProduct={Number(product?.id)}/>
            </div>
        </div>
    )
}

export default ProductCard;