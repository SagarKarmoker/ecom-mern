import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../providers/AuthProvider'
import MyProductCard from '../components/MyProductCard'
import { Helmet } from 'react-helmet'

export default function MyEquipment() {
    const [myProducts, setMyProducts] = useState([])
    const { user } = useContext(AuthContext)
    console.log(user)

    useEffect(() => {
        const fetchMyProducts = async () => {
            const response = await axios.get(`http://localhost:5000/api/v1/my-product`, {
                params: {
                    email: user.email
                }
            })

            console.log(response)

            if (response.status === 200) {
                setMyProducts(response.data.products)
            }
        }

        fetchMyProducts();
    }, [])

    console.log(myProducts)

    return (
        <>
            <Helmet>
                <title>My Equipments | EquiSports</title>
                <meta name="My Equipments" content="EquiSports | My Equipments" />
            </Helmet>

            <div className='px-4'>
                <p className='text-3xl font-bold my-10'>My Equipments</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        myProducts.length > 0 ? (
                            myProducts.map((product) =>
                                <MyProductCard product={product} />
                            )
                        ) : (
                            <p className='mt-5'>No products enter yet</p>
                        )
                    }
                </div>
            </div>
        </>
    )
}
