"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface CarouselProps {
  items: string[] | { image: string; title: string }[];
  effect?: 'slide' | 'coverflow';
  autoplay?: boolean;
}

export default function Carousel({ items, effect = 'slide', autoplay = false }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (effect === 'coverflow') {
        setItemsPerView(window.innerWidth < 1024 ? 1.2 : 1.6);
      } else {
        setItemsPerView(window.innerWidth < 768 ? 1 : 3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Autoplay functionality
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
      }, 3000);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interval) clearInterval(interval);
    };
  }, [effect, items.length, autoplay]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const renderItem = (item: string | { image: string; title: string }, index: number) => {
    const isActive = index === currentIndex;
    const imageUrl = typeof item === 'string' ? item : item.image;
    const title = typeof item === 'object' ? item.title : '';

    return (
      <div
        key={index}
        className={`
          ${effect === 'coverflow' 
            ? `relative transition-all duration-300 px-2 
               ${isActive ? 'scale-100 z-10 opacity-100' : 'scale-[0.65] opacity-40'}`
            : 'w-full md:w-1/3 min-w-[100%] md:min-w-[33.333%] px-2 flex flex-col items-center'
          }
        `}
      >
        <div className={`relative ${effect === 'coverflow' ? 'h-[200px] sm:h-[300px]' : 'w-full aspect-video'}`}>
          <Image
            src={imageUrl}
            alt={title || `Slide ${index + 1}`}
            fill
            className="rounded-lg object-cover"
            sizes={effect === 'coverflow' ? '90vw' : '(max-width: 768px) 90vw, 30vw'}
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-black/50 to-black/0" />
        </div>
        {title && (
          <p className="mt-2 bg-black/60 text-white p-2 rounded-md text-center">
            {title}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="relative w-[90vw] flex justify-center items-center overflow-hidden">
      {!autoplay && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 bg-blue-500 p-2 rounded-full shadow-md z-10 hover:bg-blue-600 transition-colors"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 bg-blue-500 p-2 rounded-full shadow-md z-10 hover:bg-blue-600 transition-colors"
          >
            &#8594;
          </button>
        </>
      )}

      <div className="w-full max-w-6xl overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100/itemsPerView)}%)` }}
        >
          {items.map((item, index) => renderItem(item, index))}
        </div>
      </div>
    </div>
  );
}
