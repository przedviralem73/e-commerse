import {FC} from "react";
import './ButtonDeleteInWishlist.css'

interface PropsButtonDeleteInWishlistProps {
    productId: number;
    wishList: string;
    setWishList?: (wishList: string) => void;
    onUpdate?: () => void;
}

const ButtonDeleteInWishlist: FC<PropsButtonDeleteInWishlistProps> = ({productId, setWishList, wishList, onUpdate}) => {

    function deleteWishlist(productId:number){
        const rawWishList = JSON.parse(wishList);
        delete rawWishList[productId];

        window.localStorage.setItem('wishlist', JSON.stringify(rawWishList));

        if(setWishList){
            setWishList(JSON.stringify(rawWishList));
        }

        if(onUpdate){
            onUpdate();
        }
    }

    return (
        <div
            className="btn-delete-wishlist"
            onClick={(e) => {
                e.stopPropagation();
                deleteWishlist(productId)
        }}>delete from wishlist</div>
    )
}

export default ButtonDeleteInWishlist;