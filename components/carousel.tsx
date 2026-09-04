"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export interface Slide {
  id: string | number;
  title: string;
  subtitle?: string;
  image: string;
  primaryCta?: string;
  secondaryCta?: string;
}

interface CarouselProps {
  autoPlayInterval?: number; // Time in ms (set to 0 to disable autoplay)
}

export default function InfiniteCarousel({
  autoPlayInterval = 5000,
}: CarouselProps) {
  const slides: Slide[] = [
    {
      id: 1,
      title: "Big-Bull",
      subtitle: "Enjoy The Eco-Friendly Ride With Electric Rickshaw In India",
      image: "/images/hero-loader.jpg",
      primaryCta: "Book Now",
      secondaryCta: "Test Ride",
    },
    {
      id: 2,
      title: "Big-Bull Loader",
      subtitle: "Heavy Duty Electric Loader For Commercial Cargo Transport",
      image: "/images/inventory-overhead.jpg",
      primaryCta: "Book Now",
      secondaryCta: "Test Ride",
    },
    {
      id: 3,
      title: "Prakriti Super",
      subtitle: "High Class Scooter Designs With Multiple Range Of Colours",
      image: "/images/home-storage.jpg",
      primaryCta: "Book Now",
      secondaryCta: "Test Ride",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    if (autoPlayInterval <= 0 || isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [nextSlide, autoPlayInterval, isPaused]);

  if (!slides || slides.length === 0) return null;

  return (
    <div
      className="mt-15 relative w-full h-[95vh] min-h-[560px] overflow-hidden bg-zinc-950 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Absolute Stacked Slides for Cross-Fade Animation */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              isActive
                ? "opacity-100 z-10 pointer-events-auto"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />

            {/* Aesthetic Gradient Shadow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 pointer-events-none z-10" />

            {/* Text Overlay & CTAs */}
            <div className="relative z-20 flex flex-col items-center justify-start pt-16 sm:pt-17 text-center mx-auto px-4 space-y-3">
              <h2 className="text-4xl sm:text-6xl font-semibold text-white tracking-tight drop-shadow-md">
                {slide.title}
              </h2>
              {slide.subtitle && (
                <p className="text-sm sm:text-base font-normal text-white/90 drop-shadow">
                  <span className="leading font-semibold decoration-1 hover:opacity-80 cursor-pointer">
                    {slide.subtitle}
                  </span>
                </p>
              )}

              {/* Action Buttons */}
              {(slide.primaryCta || slide.secondaryCta) && (
                <div className="w-full max-w-xs sm:max-w-md flex flex-row gap-3 pt-2">
                  {slide.primaryCta && (
                    <button className="flex-1 py-2.5 px-4 bg-[#3e6ae1] hover:bg-[#3457b1] text-white font-medium text-xs sm:text-sm rounded transition-all shadow-md">
                      {slide.primaryCta}
                    </button>
                  )}
                  {slide.secondaryCta && (
                    <button className="flex-1 py-2.5 px-4 bg-white/90 hover:bg-white text-[#171a20] font-medium text-xs sm:text-sm rounded shadow-md backdrop-blur-sm transition-all">
                      {slide.secondaryCta}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Navigation Arrow Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-md bg-black/20 hover:bg-black/50 text-white backdrop-blur-md border border-white/10 transition-all cursor-pointer"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-md bg-black/20 hover:bg-black/50 text-white backdrop-blur-md border border-white/10 transition-all cursor-pointer"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Radio Button Indicator Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
        {slides.map((_, index) => (
          <label
            key={index}
            htmlFor={`radio-indicator-${index}`}
            className="relative flex items-center justify-center cursor-pointer p-1"
          >
            <input
              type="radio"
              id={`radio-indicator-${index}`}
              name="carousel-slide-indicator"
              checked={currentIndex === index}
              onChange={() => setCurrentIndex(index)}
              className="sr-only"
            />
            <span
              className={`block h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-6 bg-white shadow-md"
                  : "w-2 bg-white/40 hover:bg-white/80"
              }`}
            />
          </label>
        ))}
      </div>
    </div>
  );
}