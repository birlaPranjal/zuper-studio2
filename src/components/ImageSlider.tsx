"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCoverflow } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/autoplay"
import Image from "next/image"
import i from "../../public/i1.jpg"
import im from "../../public/i2.jpg"
import ima from "../../public/i3.jpg"
import imag from "../../public/i4.jpg"
import image from "../../public/i5.jpg"
import imagei from "../../public/i6.jpg"
import imageia from "../../public/i7.avif"
import imageiaa from "../../public/i8.avif"
import imageiaaa from "../../public/i9.avif"


const images = [
  i,im,ima,imag,image,imagei,imageia,imageiaa,imageiaaa
]

export default function CustomSwiper() {
  return (
    <div className="w-[90vw] flex justify-center overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={1}
        loop
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full max-w-6xl"
        breakpoints={{
          640: {
            slidesPerView: 1.2
          },
          1024: {
            slidesPerView: 1.6
          }
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide 
            key={index} 
            className="relative transition-all duration-300"
          >
            {({ isActive }: { isActive: boolean }) => (
              <div 
                className={`relative h-[200px] sm:h-[300px] transition-all duration-300 ${
                  isActive 
                    ? 'scale-100 z-10 opacity-100' 
                    : 'scale-[0.65] opacity-40'
                }`}
              >
                <Image
                  src={img}
                  alt={`Slide ${index + 1}`}
                  style={{ objectFit: "cover"}}
                  fill
                  className="rounded-lg"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-black/50 to-black/0"></div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
