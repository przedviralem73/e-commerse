import {FC, useState} from "react";
import './ButtodAddToWishlist.css';

interface ButtonAddToWishlistProps {
    productId: number;
    onUpdate?: () => void;
}

const ButtonAddToWishlistLink:FC<ButtonAddToWishlistProps> = ({productId, onUpdate}) => {

    const [wishlist, setWishlist] = useState(() => window.localStorage.getItem('wishlist'));

    function addWishlist(productId:number){
        const localWishList = window.localStorage.getItem('wishlist');
        const  objLocalWishList = localWishList ? JSON.parse(localWishList) : {};

        objLocalWishList[productId] = {
            id: productId,
        }

        window.localStorage.setItem('wishlist', JSON.stringify(objLocalWishList));
        setWishlist(objLocalWishList);

        if(onUpdate){
            onUpdate();
        }
    }

    return (
        <div
            className="btn-add-wishlist"
            onClick={(e) => {
                e.stopPropagation();
                addWishlist(productId);
        }}>
            ADD WISHLIST
        </div>
    )
}

export default ButtonAddToWishlistLink;