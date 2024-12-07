import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { FaSortAmountDown } from "react-icons/fa";
import { Helmet } from 'react-helmet';

export default function AllSportsEquipment() {
    const products = useLoaderData();
    const [sortedProducts, setSortedProducts] = useState(products.products);
    console.log(products)

    const sortByPrice = () => {
        const sortedProduct = [...products.products].sort((a, b) => a.price - b.price)
        setSortedProducts(sortedProduct)
    }

    return (
        <>
            <Helmet>
                <title>All Sports Equipment | EquiSports</title>
                <meta name="All Sports Equipment" content="EquiSports | All Sports Equipment" />
            </Helmet>

            <div className="overflow-x-auto mt-10 px-4">
                <div className='flex justify-between items-center mb-4'>
                    <p className='justify-center font-bold text-2xl'>All Sports Equipments</p>
                    <button onClick={sortByPrice} className='btn'>Sort <FaSortAmountDown /></button>
                </div>
                <table className="table table-zebra px-4">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sortedProducts.map((product, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{product.itemName}</td>
                                    <td>{product.categoryName}</td>
                                    <td>BDT {product.price}</td>
                                    <td>
                                        <Link to={`/product/${product._id}`} className='btn'>View Details</Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
