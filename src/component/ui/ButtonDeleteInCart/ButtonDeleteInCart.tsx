import {FC} from "react";
import './ButtonDeleteInCart.css'

interface ButtonDeleteInCartProps {
    idProduct: number;
    rawCart: string | null;
    setRawCart: (rawCart: string | null) => void;
}

const ButtonDeleteInCart: FC<ButtonDeleteInCartProps> = ({idProduct, setRawCart, rawCart}) => {

    function deleteProduct(idProduct:number) {
        if(!rawCart){
            return;
        }
        let rawCartObj = JSON.parse(rawCart);
        delete rawCartObj[idProduct.toString()];

        window.localStorage.setItem('cart', JSON.stringify(rawCartObj));
        setRawCart(JSON.stringify(rawCartObj));

    }

    return (
        <div className='btn-delete' onClick={() => deleteProduct(idProduct)}>DELETE</div>
    )
}

export default ButtonDeleteInCart;