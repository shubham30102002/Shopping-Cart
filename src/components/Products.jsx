import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
import { add } from '../store/cartSlice';
import { fetchProducts, STATUSES } from '../store/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     try {
        //         const res = await axios.get('https://fakestoreapi.com/products');
        //         const products = res.data;

        //         console.log(products);
        //         setProducts(products);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }

        // fetchProducts();
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    }

    if(status === STATUSES.LOADING) {
        return <h2>Loading...</h2>
    }

    if(status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>
    }

    return (
        <div className='productsWrapper'>
            {
                products.map(product => (
                    <div key={product.id} className='card'>
                        <img src={product.image} alt="" />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button onClick={() => handleAdd(product) } className='btn'>Add to cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products;