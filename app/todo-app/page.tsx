'use client';

import Link from "next/link";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { LuLink } from "react-icons/lu";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";



export default function TodoApp() {

    const slides = [
        { id: 1, src: '/light.png' },
        { id: 2, src: '/dark.png' },
        { id: 3, src: '/mobileView.webp' }
    ]

    const [slider, setSlider] = useState(0);

    const nextSlide = () => {
        setSlider(prev => (prev + 1) % slides.length);
    }

    const prevSlide = () => {
        setSlider(prev => (prev - 1 + slides.length) % slides.length);
    }


    return (
        <div className="p-10 lg:px-30 min-h-screen">
            <div className="flex flex-col gap-10">
                <div className="w-full">
                    <p className="text-[1.5rem] font-bold">Todo App</p>
                    <p className="text-[1.1rem]">Full-Stack Task Managment Application</p>
                    <div className="pt-5 space-y-1">
                        <Link href={'https://todo-list-stack.vercel.app/'} className="flex gap-2 w-[150px] hover:text-primary">
                            <LuLink className="w-5 h-5" />
                            <u>Live Demo</u>
                        </Link>
                        <Link href={'https://github.com/BhGh1081/Todo-List.git'} className="flex gap-2 w-[150px] hover:text-primary">
                            <RiGitRepositoryCommitsLine className="w-5 h-5" />
                            <u>GitHub Repository</u>
                        </Link>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <div className="relative w-full flex overflow-hidden">
                        {slides.map((slide) => <img key={slide.id} src={slide.src} className="transition-transform duration-500 cursor-pointer" style={{ transform: `translateX(-${slider * 100}%)` }}/>)}
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 bg-background/50 flex items-center justify-center rounded-full absolute top-1/2 -translate-1/2 right-0 hover:text-primary">
                            <IoIosArrowForward className="w-6 h-6" />
                        </button>
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 bg-background/30 flex items-center justify-center rounded-full absolute top-1/2 -translate-1/2 left-12 hover:text-primary">
                            <IoIosArrowBack className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}