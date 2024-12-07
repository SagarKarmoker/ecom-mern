import React from 'react';
import { Link } from 'react-router-dom';

export default function RecentBlog() {
    // Sample blog data
    const blogPosts = [
        {
            title: '5 Essential Sports Accessories for Every Athlete',
            summary: 'Discover the top 5 must-have sports accessories that every athlete needs for enhanced performance and safety...',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhg0co6ty4zbKI7PuFTVbeSuRcQu3I21i5Iw&s',
            date: 'December 1, 2024',
            link: '5-essential-sports-accessories'
        },
        {
            title: 'Choosing the Right Basketball Gear: A Complete Guide',
            summary: 'Looking to up your game on the court? Here’s everything you need to know about picking the perfect basketball gear...',
            image: 'https://scheels.scene7.com/is/image/Scheels/WhatDoyouNeedForBasketballFrameFrame392?wid=768&hei=400',
            date: 'November 20, 2024',
            link: 'choosing-right-basketball-gear'
        },
        {
            title: 'Top Soccer Accessories for Improved Performance',
            summary: 'Soccer is a game of speed and precision. Here are the best accessories to elevate your game...',
            image: 'https://cdn.prod.website-files.com/5f76f6c411c73d27be28d571/672b9f4a4904cd166cbb0885_661996f2eec50ce97445d1a8_football-and-cones.webp',
            date: 'November 15, 2024',
            link: 'top-soccer-accessories'
        },
        {
            title: 'Winter Sports Gear You Need This Season',
            summary: 'Prepare for the winter sports season with the best gear to keep you warm, safe, and performing at your peak...',
            image: 'https://i.natgeofe.com/n/a7346113-088a-48fc-bf90-4aee81d322db/stwhats-new-rental.jpg',
            date: 'November 10, 2024',
            link: 'winter-sports-gear-2024'
        }
    ];

    return (
        <div className='container mx-auto mt-10'>
            <h1 className='text-2xl font-bold text-center'>Recent Blog Posts</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                {blogPosts.map((post, index) => (
                    <div key={index} className='bg-white shadow-lg rounded-lg overflow-hidden border'>
                        <img src={post.image} alt={post.title} className='w-full h-48 object-cover' />
                        <div className='p-5'>
                            <h2 className='text-xl font-semibold'>{post.title}</h2>
                            <p className='text-gray-600 mt-2'>{post.summary}</p>
                            <p className='text-gray-400 text-sm mt-2'>{post.date}</p>
                            <Link to={`/blog/${post.link}`} className='text-blue-500 mt-3 inline-block'>Read More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
