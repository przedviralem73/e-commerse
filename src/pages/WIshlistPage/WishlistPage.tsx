import {FC, useEffect, useState} from "react";
import "./WishlistPage.css";
import ButtonDeleteInWishlist from "../../component/ui/ButtonDeleteInWishlist/ButtonDeleteInWishlist";

const WishlistPage: FC = () => {

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

   const [wishList, setWishList] = useState(() => window.localStorage.getItem('wishlist') || '');


    useEffect(() => {

        const rawWishList = JSON.parse(wishList);

        const arrWishList: any[] = [];

        for (const rawWishListKey in rawWishList) {
            arrWishList.push(rawWishList[rawWishListKey].id);
        }

        const promiseWishList= arrWishList.map((a) =>
            fetch(`https://fakestoreapi.com/products/${a}`)
                .then((res) => res.json())
        )

        Promise.all(promiseWishList).then((result) => setProducts(result));

    }, [wishList]);

    return (
        <div className='wish-list'>
            {
                products.length ? (
                    products.map((p) => (
                        <div className="wish-list-item" key={p.id}>
                            <div className="wish-list-info">
                                <img className="wish-list-img" alt={p.title} src={p.image}/>
                                <h4 className="wish-list-title">{p.title}</h4>
                                <p className="wish-list-rate">{p.rating.rate}</p>
                                <p className="wish-list-price">{p.price}</p>
                                <p className="wish-list-count">{p.rating.count}</p>
                                <ButtonDeleteInWishlist productId={p.id} wishList={wishList} setWishList={setWishList}/>
                            </div>
                        </div>
                    ))
                ) : (
                    <h4>НЕТУ ЛЮБИМЫХ ТОВАРОВ</h4>
                )
            }
        </div>
    )
}

export default WishlistPage;