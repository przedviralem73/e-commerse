import {FC, useEffect, useState} from "react";
import './ButtonAddToCart.css'

interface ButtonProps {
    idProduct: number;
}

const ButtonAddToCart: FC<ButtonProps> = ({idProduct}) => {

    const [cartProducts, setCartProducts] = useState(() => {
        const rawCart = window.localStorage.getItem('cart');
        return rawCart ? JSON.parse(rawCart) : {};
    });


    function addToCart(idProduct:number) {
       const rawCart = window.localStorage.getItem('cart') || '{}';
       const rawCartObj = JSON.parse(rawCart);
       if(rawCartObj[idProduct] !== undefined){
           rawCartObj[idProduct].quantity += 1;
       }else {
           rawCartObj[idProduct] = {
               productId: idProduct,
               quantity: 1,
           };
       }

       setCartProducts(rawCartObj);
    }

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cartProducts));
    }, [cartProducts]);

    return (
        <div className="btn-add-to-cart" onClick={(e) => {
            e.stopPropagation();
            addToCart(idProduct);
        }}>ADD CART</div>
    )
}

export default ButtonAddToCart;