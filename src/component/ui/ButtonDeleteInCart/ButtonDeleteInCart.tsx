import {FC} from "react";
import './ButtonDeleteInCart.css'

interface ButtonDeleteInCartProps {
    idProduct: number;
    rawCart: string | null;
    setRawCart: (rawCart: string | null) => void;
}

const ButtonDeleteInCart: FC<ButtonDeleteInCartProps> = ({idProduct, setRawCart, rawCart}) => {

    function deleteProduct(idProduct:number) {
        let rawCartArr = rawCart?.split(',');
        if(!rawCartArr){
            return;
        }
        rawCartArr = rawCartArr?.filter((r) => Number(r) !== idProduct);
        window.localStorage.setItem('cart', rawCartArr.toString());
        setRawCart(rawCartArr.toString());
    }

    return (
        <div className='btn-delete' onClick={() => deleteProduct(idProduct)}>DELETE</div>
    )
}

export default ButtonDeleteInCart;