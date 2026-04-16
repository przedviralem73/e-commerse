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

      const fetchCart = rawCart?.split(',').map((r) =>
          fetch(`https://fakestoreapi.com/products/${r}`)
              .then((res) => res.json())
              .catch((error) => console.log(error.message))
      )

      Promise.all(fetchCart).then((result) => setProducts(result));

    }, [rawCart]);


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