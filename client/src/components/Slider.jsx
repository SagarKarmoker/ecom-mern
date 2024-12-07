import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function Slider() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide w-full h-96 border-2 rounded-lg bg-gray-100 relative">
                        <img
                            src="https://www.shutterstock.com/image-photo/male-athletes-sprinting-three-men-600nw-1218338986.jpg"
                            alt="Sports Gear"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 text-white">
                            <h2 className="text-3xl font-bold">Top Sports Gear for Every Athlete</h2>
                            <p className="mt-2 text-lg">Get the best performance gear for your sport.</p>
                        </div>
                    </div>
                    <div className="embla__slide w-full h-96 border-2 rounded-lg bg-gray-100 relative">
                        <img
                            src="https://auprosports.com/wp-content/uploads/2024/01/WNBA_Partnership_Desktop.jpg"
                            alt="Basketball Equipment"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-4">
                            <h2 className="text-3xl font-bold">Basketball Essentials</h2>
                            <p className="mt-2 text-lg">Shop the best basketball accessories for the court.</p>
                        </div>
                    </div>
                    <div className="embla__slide w-full h-96 border-2 rounded-lg bg-gray-100 relative">
                        <img
                            src="https://www.westernslopenow.com/wp-content/uploads/sites/95/2024/11/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280"
                            alt="Soccer Accessories"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-4">
                            <h2 className="text-3xl font-bold">Soccer Accessories for Top Performance</h2>
                            <p className="mt-2 text-lg">Upgrade your game with premium soccer accessories.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

