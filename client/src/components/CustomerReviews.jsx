import React from 'react';

export default function CustomerReviews() {
    // Sample review data
    const reviews = [
        {
            name: 'John Doe',
            rating: 5,
            review: 'Amazing product! Highly recommend.',
            image: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
            name: 'Jane Smith',
            rating: 4,
            review: 'Very good quality, but a bit expensive.',
            image: 'https://randomuser.me/api/portraits/women/1.jpg'
        },
        {
            name: 'Alice Johnson',
            rating: 5,
            review: 'Exceeded my expectations! Would buy again.',
            image: 'https://randomuser.me/api/portraits/women/2.jpg'
        },
        {
            name: 'Mark Brown',
            rating: 3,
            review: 'It’s okay, but I expected more.',
            image: 'https://randomuser.me/api/portraits/men/2.jpg'
        }
    ];

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold text-center">Customer Reviews</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center border-2"
                    >
                        <img
                            src={review.image}
                            alt={review.name}
                            className="w-20 h-20 rounded-full mb-4"
                        />
                        <h2 className="text-xl font-semibold">{review.name}</h2>
                        <div className="flex mt-2">
                            {Array.from({ length: review.rating }, (_, i) => (
                                <span key={i} className="text-yellow-400">★</span>
                            ))}
                        </div>
                        <p className="text-gray-600 mt-2 text-center">{review.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
