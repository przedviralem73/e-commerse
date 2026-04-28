import {FC} from "react";
import './ProductItem.css';
import ButtonAddToCart from "../../../component/ui/ButtonAddToCart/ButtonAddToCart";
import {useNavigate} from "react-router-dom";
import ButtonAddToWishlist from "../../../component/ui/ButtonAddToWishlist/ButtonAddToWishlist";
import ButtonWishList from "../../../component/ui/ButtonWishlist/ButtonWishList";

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

    const navigate = useNavigate();

    return (
        <div className="product-item" onClick={() => navigate(`/product/${id}`)} key={id}>
            <div className="product-info">
                <img className="product-img" alt={title} src={image}/>
                <h4 className="product-title">{title}</h4>
                <p className="product-rate">{rating.rate}</p>
                <p className="product-price">{price}</p>
                <p className="product-count">{rating.count}</p>
                <ButtonAddToCart idProduct={id}/>
                <ButtonWishList productId={id}/>
            </div>
        </div>
    )
}

export default ProductItem