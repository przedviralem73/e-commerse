import {FC, useEffect, useState} from "react";
import './ButtonAddToCart.css'

interface ButtonProps {
    idProduct: number;
}

const ButtonAddToCart: FC<ButtonProps> = ({idProduct}) => {

    const [cartProducts, setCartProducts] = useState(() => {
        const rawCart = window.localStorage.getItem('cart');
        return rawCart ? rawCart.split(',') : [];
    });


    function addToCart(idProduct:number) {
       const rawCart = window.localStorage.getItem('cart');
       if(rawCart){
           const currentCart = rawCart.split(',');
           setCartProducts([...currentCart, idProduct.toString()])
       }else{
           setCartProducts([idProduct.toString()]);
       }
    }

    useEffect(() => {
        window.localStorage.setItem('cart', cartProducts.toString());
    }, [cartProducts]);

    return (
        <div className="btn-add-to-cart" onClick={() => addToCart(idProduct)}>ADD CART</div>
    )
}

export default ButtonAddToCart;