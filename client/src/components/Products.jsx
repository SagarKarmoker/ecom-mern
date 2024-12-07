import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Fade } from "react-awesome-reveal";
import axios from 'axios';

export default function Products() {
    const [products, setProducts] = useState([]);

    const fetchAllProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/home-products')

            console.log(response)

            if (response.status === 200) {
                setProducts(response.data.products)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllProducts()
    }, [])

    return (
        <div className='container mx-auto'>
            <h1 className='text-2xl font-bold text-center'>Featured Products</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                {
                    products.map((product, index) =>
                        <Fade key={index} direction={index % 2 == 0 ? "left" : "right"}>
                            <ProductCard product={product} />
                        </Fade>
                    )
                }

            </div>
        </div>
    )
}
