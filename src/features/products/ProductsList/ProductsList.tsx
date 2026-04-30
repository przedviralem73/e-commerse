import {useContext, useEffect, useMemo, useState} from "react";
import ProductItem from "../ProductItem/ProductItem";
import './ProductList.css';
import {ValueProductsContext} from "../../../pages/HomePage/HomePage";

const ProductsListPage = () => {

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

    const valueProducts = useContext(ValueProductsContext);

    const [sorting, setSorting] = useState([
        {
            value: 'popular',
            label: 'по популярности',
        },
        {
            value: 'priceLow',
            label: 'сначала дешевле',
        },
        {
            value: 'priceHigh',
            label: 'сначала дороже',
        },
    ]);

    const [activeSort, setActiveSort] = useState('popular');


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log(error.message));
    }, []);


    const activeProducts = useMemo(() => {
        const copy = [...products];

        switch (activeSort) {
            case 'priceLow':
                return copy.sort((a, b) => a.price - b.price);
            case 'priceHigh':
                return copy.sort((a, b) => b.price - a.price);
            case 'popular':
                return copy.sort((a, b) => b.rating.rate - a.rating.rate);
            default:
                return copy;
        }
    }, [products, activeSort])



    function onChangeSort(activeSort:string) {
        setActiveSort(activeSort);
    }


    return (
        <>
            <div className="sort-products">
                Сортировать:
                <select className="sort-select-products" value={activeSort} onChange={(e) => onChangeSort(e.target.value) }>
                    {sorting.map((sort) =>
                        (<option value={sort.value}>{sort.label}</option>)
                    )}
                </select>
            </div>
            <div className={products.length > 0 ? "products-list" : "products-list-empty"}>

                {
                    products.length > 0 ? (
                            valueProducts.length > 0 ? (
                                activeProducts.filter((p) => p.title.toLowerCase().includes(valueProducts.toLowerCase())).map((p) => (
                                    <ProductItem id={p.id} title={p.title} price={p.price} description={p.description} category={p.category} image={p.image} rating={p.rating}/>
                                ))
                            ) : (
                                activeProducts.map((p) => (
                                    <ProductItem key={p.id} id={p.id} title={p.title} price={p.price} description={p.description} category={p.category} image={p.image} rating={p.rating}/>
                                ))
                            )
                        ) :
                        (
                            <div className="empty-state">
                                <div className="empty-state__icon">🔍</div>
                                <h3 className="empty-state__title">Нет товаров</h3>
                                <p className="empty-state__text">
                                    К сожалению, товары не найдены.<br />
                                    Попробуйте изменить параметры поиска
                                </p>
                            </div>
                        )
                }
            </div>
        </>
    )
}

export default ProductsListPage;