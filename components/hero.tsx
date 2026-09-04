'use client';

import { useState } from 'react';
import Image from 'next/image';

const slides = [
    {
        title: 'Big-Bull',
        subtitle: 'Enjoy The Eco-Friendly Ride With Electric Rickshaw In India',
        image: '/images/hero-model-y.jpg',
        primaryCta: 'Book Now',
        secondaryCta: 'Test Ride',
    },
    {
        title: 'Big-Bull Loader',
        subtitle: 'Heavy Duty Electric Loader For Commercial Cargo Transport',
        image: '/images/model-3-road.jpg',
        primaryCta: 'Book Now',
        secondaryCta: 'Test Ride',
    },
    {
        title: 'Prakriti Super',
        subtitle: 'High Class Scooter Designs With Multiple Range Of Colours',
        image: '/images/home-storage.jpg',
        primaryCta: 'Book Now',
        secondaryCta: 'Test Ride',
    },
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="relative h-[calc(100vh-56px)] min-h-[600px] w-full flex flex-col justify-between p-4 sm:p-8 overflow-hidden bg-gray-100">
            {/* Background Image Container with Fade Transition */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 z-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority={index === 0}
                        className="object-cover object-center"
                    />
                </div>
            ))}

            {/* Top Combined Block: Text Overlay + CTA Buttons (Grouped closely to match exact Tesla design) */}
            <div className="relative z-10 w-full max-w-sm sm:max-w-md mx-auto pt-2 sm:pt-4 flex flex-col items-center text-center space-y-4">
                {/* Title & Subtitle */}
                <div className="space-y-1.5 px-2">
                    <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white drop-shadow-md transition-all duration-300">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="text-base sm:text-lg font-normal text-white drop-shadow-sm transition-all duration-300">
                        <span className="underline underline-offset-4 decoration-1 hover:opacity-90 cursor-pointer">
                            {slides[currentSlide].subtitle}
                        </span>
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="w-full flex flex-row gap-3 pt-1">
                    <button className="flex-1 py-2.5 px-4 bg-[#3e6ae1] hover:bg-[#3457b1] text-white font-medium text-xs sm:text-sm rounded transition-all shadow-sm">
                        {slides[currentSlide].primaryCta}
                    </button>
                    <button className="flex-1 py-2.5 px-4 bg-white hover:bg-gray-100 text-[#171a20] font-medium text-xs sm:text-sm rounded shadow-sm transition-all">
                        {slides[currentSlide].secondaryCta}
                    </button>
                </div>
            </div>
            {/* Carousel Arrow Controls */}
            <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center w-10 h-10 rounded-md bg-white/70 hover:bg-white text-[#171a20] shadow-md transition-all cursor-pointer"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center w-10 h-10 rounded-md bg-white/70 hover:bg-white text-[#171a20] shadow-md transition-all cursor-pointer"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Pagination Dots at Bottom */}
            <div className="relative z-10 flex items-center justify-center gap-2 pb-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-2 sm:h-2.5 rounded-full transition-all cursor-pointer ${index === currentSlide
                            ? 'w-6 sm:w-7 bg-white shadow'
                            : 'w-2 sm:w-2.5 bg-white/50 hover:bg-white'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}