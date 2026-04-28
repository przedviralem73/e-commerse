import {FC, useState} from "react";
import ButtonAddToWishlist from "../ButtonAddToWishlist/ButtonAddToWishlist";
import ButtonDeleteInWishlist from "../ButtonDeleteInWishlist/ButtonDeleteInWishlist";

interface ButtonWishListProps {
    productId: number;
}

const ButtonWishList: FC<ButtonWishListProps> = ({productId}) => {

    const [update, setUpdate] = useState(0);

    const reload = () => setUpdate(prev => prev + 1);

    const wishList = window.localStorage.getItem('wishlist') || '';

    const objWishList = wishList ? JSON.parse(wishList) : {};


    return (
        <>
            {
                objWishList[productId] !== undefined ? (
                    <ButtonDeleteInWishlist productId={productId} wishList={wishList} onUpdate={reload}/>
                ) : (
                    <ButtonAddToWishlist productId={productId} onUpdate={reload}/>
                )
            }
        </>
    )
}

export default ButtonWishList