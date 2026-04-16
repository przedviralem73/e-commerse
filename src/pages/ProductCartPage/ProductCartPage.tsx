import {FC, useEffect, useState} from "react";
import ButtonDeleteInCart from "../../component/ui/ButtonDeleteInCart/ButtonDeleteInCart";
import './ProductCartPage.css'


const ProductCartPage:FC= () => {

    interface Product {
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

    const [products, setProducts] = useState<Product[]>([]);

    const [rawCart, setRawCart] = useState(() => localStorage.getItem('cart'))


    useEffect(() => {

      if(!rawCart){
          setProducts([])
          return;
      }

      const rawCartObj = JSON.parse(rawCart);

      const rawCartArr = [];

        for (const rawCartObjKey in rawCartObj) {
            rawCartArr.push(rawCartObj[rawCartObjKey]);
        }


      const fetchCart = rawCartArr.map((r) =>
          fetch(`https://fakestoreapi.com/products/${r.productId}`)
              .then((res) => res.json())
              .catch((error) => console.log(error.message))
      )

      Promise.all(fetchCart).then((result) => setProducts(result));

    }, [rawCart]);

    function addQuantity(idProduct:number) {
        if(!rawCart){
            return;
        }

        const rawCartObj = JSON.parse(rawCart);

        rawCartObj[idProduct].quantity += 1;

        window.localStorage.setItem('cart', JSON.stringify(rawCartObj));
        setRawCart(JSON.stringify(rawCartObj));
    }

    function minusQuantity(idProduct:number) {
        if(!rawCart){
            return;
        }

        const rawCartObj = JSON.parse(rawCart);


        rawCartObj[idProduct].quantity -= 1;

        if(rawCartObj[idProduct].quantity <= 0){
            delete rawCartObj[idProduct.toString()];

            window.localStorage.setItem('cart', JSON.stringify(rawCartObj));
            setRawCart(JSON.stringify(rawCartObj));
        }

        window.localStorage.setItem('cart', JSON.stringify(rawCartObj));
        setRawCart(JSON.stringify(rawCartObj));
    }


    return (
        <div className='product-cart'>
            {
                products.length > 0 ? (
                    products.map((p) => (
                        <div className="product-сart-item" key={p.id}>
                            <div className="product-сart-info">
                                <img className="product-сart-img" alt={p.title} src={p.image}/>
                                <h4 className="product-сart-title">{p.title}</h4>
                                <p className="product-сart-rate">{p.rating.rate}</p>
                                <p className="product-сart-price">{p.price}</p>
                                <p className="product-сart-count">{p.rating.count}</p>
                                <p className="quantity"><span onClick={() => minusQuantity(p.id)}>-</span> {JSON.parse(rawCart as string)[p.id]?.quantity} <span onClick={() => addQuantity(p.id)}>+</span></p>
                                <ButtonDeleteInCart rawCart={rawCart} setRawCart={setRawCart} idProduct={p.id}/>
                            </div>
                        </div>
                    ))
                ) : (
                    <h3>КОРЗИНА ПУСТАЯ</h3>
                )
            }
        </div>
    )
}

export default ProductCartPage;