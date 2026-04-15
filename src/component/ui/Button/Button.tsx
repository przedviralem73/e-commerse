import {FC, useEffect, useState} from "react";


interface ButtonProps {
    idProduct: number;
}

const Button: FC<ButtonProps> = ({idProduct}) => {

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
        <div onClick={() => addToCart(idProduct)}>ADD CART</div>
    )
}

export default Button;