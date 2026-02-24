'use client';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { slideData } from "../lib/definition";
import { useLocale } from "next-intl";

export default function Slider({ slides }: { slides: slideData[] }) {

    const [slider, setSlider] = useState(0);
    const locale = useLocale();

    useEffect(() => {

        const timer = setTimeout(nextSlide, 3000)

        return () => clearTimeout(timer)

    })

    const nextSlide = () => {
        setSlider(prev => (prev + 1) % slides.length);
    }

    const prevSlide = () => {
        setSlider(prev => (prev - 1 + slides.length) % slides.length);
    }


    return (
        <div className="w-full flex items-center justify-center">
            <div className="relative xl:w-[90%] w-full flex overflow-hidden rounded-lg">
                {slides.map((slide) => <img key={slide.id} src={slide.src} className="transition-transform duration-800 ease-in-out" style={{ transform: `translateX(${locale === 'en' ? -slider * 100 : slider * 100}%)` }} />)}
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 bg-background/50 flex items-center justify-center rounded-full absolute top-1/2 -translate-1/2 right-0 hover:text-primary cursor-pointer">
                    <IoIosArrowForward className="w-6 h-6" />
                </button>
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 bg-background/30 flex items-center justify-center rounded-full absolute top-1/2 -translate-1/2 left-12 hover:text-primary cursor-pointer">
                    <IoIosArrowBack className="w-6 h-6" />
                </button>
            </div>
        </div>
    )
}