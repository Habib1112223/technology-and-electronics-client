import React from 'react'

const Carousel = () => {

    const slider = [
        "https://i.ibb.co/vk8JwH0/luca-bravo-9l-326-FISzk-unsplash.jpg",
        "https://i.ibb.co/NtrNJHG/thisisengineering-raeng-64-Yr-PKigu-AE-unsplash.jpg",
        "https://i.ibb.co/h2XXJZp/jens-kreuter-GAPfhkgm-Zl-Q-unsplash.jpg",
        "https://i.ibb.co/vmZ9N2M/thisisengineering-raeng-a-L2rx-Qh-Ef-AM-unsplash.jpg"
    ]
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider[0]} className="w-full h-[600px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider[1]} className="w-full h-[600px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider[2]} className="w-full h-[600px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={slider[3]} className="w-full h-[600px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}

export default Carousel