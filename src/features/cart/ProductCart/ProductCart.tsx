import {FC, useEffect, useState} from "react";



const ProductCart:FC= () => {

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

    const [products, setProducts] = useState<Product[]>();

    useEffect(() => {
        const rawCart = window.localStorage.getItem('cart');
        const rawCartArr = rawCart?.split(',');
        console.log(rawCartArr);
        rawCartArr?.map((rC) => {
            fetch(`https://fakestoreapi.com/products/${rC}`)
                .then((res) => res.json())
                .then((data) => setProducts([...products, data]))
        })
    }, []);



    return (
        <div className='product-cart'>
            {
                products ? (
                    products.map((p) => (
                        <div className="product-сart-item" key={p.title}>
                            <div className="product-сart-info">
                                <img className="product-сart-img" alt={p.title} src={p.image}/>
                                <h4 className="product-сart-title">{p.title}</h4>
                                <p className="product-сart-rate">{p.rating.rate}</p>
                                <p className="product-сart-price">{p.price}</p>
                                <p className="product-сart-count">{p.rating.count}</p>
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

export default ProductCart;