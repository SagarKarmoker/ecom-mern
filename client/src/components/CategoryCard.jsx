import React from 'react'

export default function CategoryCard({ category }) {
    return (
        <div className='shadow-md p-4 rounded-lg border hover:cursor-pointer'>
            {/* <img className='rounded-lg' src="https://th.bing.com/th/id/OIP.a047Qj8J1Azlo6nkOHNBUgHaHa?rs=1&pid=ImgDetMain" alt="" /> */}
            <p className='text-center text-2xl font-bold mt-2'>{category}</p>
        </div>
    )
}
