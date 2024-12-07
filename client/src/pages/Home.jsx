import React from 'react'
import Slider from '../components/Slider'
import Products from '../components/Products'
import SportsCategory from '../components/SportsCategory'
import CustomerReviews from '../components/CustomerReviews'
import RecentBlog from '../components/RecentBlog'
import { Helmet } from 'react-helmet'

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home | EquiSports</title>
                <meta name="Home" content="EquiSports | Home" />
            </Helmet>

            <div className='my-10 space-y-10 px-4 lg:px-0'>
                {/* Banner/Slider  */}
                <Slider />
                {/* Product section */}
                <Products />
                {/* Sports Categories section */}
                <SportsCategory />
                {/* Customer Review Card */}
                <CustomerReviews />
                {/* Recent Blog */}
                <RecentBlog />
            </div>
        </>
    )
}
