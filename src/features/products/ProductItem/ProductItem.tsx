import {FC} from "react";
import './ProductItem.css';

interface ProductProps {
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

const ProductItem: FC<ProductProps> = ({id, title, price, description, rating, image, category}) => {
    return (
        <div className="product-item" key={title}>
            <div className="product-info">
                <img className="product-img" alt={title} src={image}/>
                <h4 className="product-title">{title}</h4>
                <p className="product-rate">{rating.rate}</p>
                <p className="product-price">{price}</p>
                <p className="product-count">{rating.count}</p>
            </div>
        </div>
    )
}

export default ProductItem