import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import axios from 'axios';

export default function SportsCategory() {
    const [categories, setCategories] = useState([]);

    const fetchAllCategories = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/categories')

            console.log(response.data.categories.length)

            if (response.status === 200) {
                setCategories(response.data.categories)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllCategories()
    }, [])

    return (
        <div className='container mx-auto mt-10'>
            <h1 className='text-2xl font-bold text-center'>Sports Categories</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                {
                    categories.map((cat, index) =>
                        <CategoryCard key={index} category={cat} />
                    )
                }
            </div>
        </div>
    )
}
