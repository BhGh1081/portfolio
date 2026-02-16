'use client';

import Link from "next/link";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { LuLink } from "react-icons/lu";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";


export default function TodoApp() {

    const slides = [
        { id: 1, src: '/light.png' },
        { id: 2, src: '/dark.png' },
        { id: 3, src: '/mobileView.webp' }
    ]

    const [slider, setSlider] = useState(0);

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
        <div className="p-10 lg:px-30 min-h-screen">
            <div className="flex flex-col gap-10">
                <div className="w-full">
                    <p className="text-[1.5rem] font-bold">Todo App</p>
                    <p className="text-[1.1rem]">Full-Stack Task Managment Application</p>
                    <div className="pt-5 space-y-1">
                        <Link href={'https://todo.gholamidev.ir/'} className="flex flex-col bg-gradient-to-r from-primary/7 to-background rounded-lg p-2">
                            <section className="flex gap-2 hover:text-primary">
                                <LuLink className="w-5 h-5" />
                                <u>Live Demo</u>
                            </section>
                            <section className="text-sm p-2">
                                <p className="font-bold">Demo Account:</p>
                                <p>Email: user@demo.com</p>
                                <p>Password: 12345</p>
                            </section>
                        </Link>
                        <Link href={'https://github.com/BhGh1081/Todo-List.git'} className="flex gap-2 hover:text-primary bg-gradient-to-r from-yellow-500/7 to-background rounded-lg p-2">
                            <RiGitRepositoryCommitsLine className="w-5 h-5" />
                            <u>GitHub Repository</u>
                        </Link>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <div className="relative xl:w-[90%] w-full flex overflow-hidden rounded-lg">
                        {slides.map((slide) => <img key={slide.id} src={slide.src} className="transition-transform duration-800 ease-in-out" style={{ transform: `translateX(-${slider * 100}%)` }} />)}
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
                <div>
                    <div className="flex flex-col gap-15 pt-20">
                        <section className="space-y-2">
                            <h1 className="text-2xl font-bold">Overview</h1>
                            <p className="bg-gradient-to-r from-yellow-500/7 to-background rounded-lg p-5">This is a full-stack task management application built with Next.js and Supabase. The app allows users to securely authenticate, manage their own tasks, and interact with a persistent database. It focuses on clean UI, responsive design</p>
                        </section>
                        <section>
                            <h1 className="text-2xl font-bold mb-2">Key Features</h1>
                            <ul className="list-disc bg-gradient-to-r from-green-800/10 to-background rounded-lg p-5 pl-10">
                                <li>Secure user authentication</li>
                                <li>User-specific task management</li>
                                <li>Create, edit, delete, and update tasks (CRUD)</li>
                                <li>Search and filter functionality</li>
                                <li>Task categorization</li>
                                <li>Persistent database storage</li>
                                <li>Fully responsive design</li>
                            </ul>
                        </section>
                        <div className="space-y-5">
                            <p className="text-2xl font-bold mb-2">Tech Stack</p>
                            <section className="bg-gradient-to-r from-primary/7 to-background rounded-lg p-5">
                                <h1 className="text-xl font-bold">Frontend</h1>
                                <p>Next.js - React - TypeScript - Tailwind CSS</p>
                            </section>
                            <section className="bg-gradient-to-r from-primary/7 to-background rounded-lg p-5">
                                <h1 className="text-xl font-bold">Backend / Database</h1>
                                <p>Supabase (PostgreSQL)</p>
                            </section>
                            <section className="bg-gradient-to-r from-primary/7 to-background rounded-lg p-5">
                                <h1 className="text-xl font-bold">Deployment</h1>
                                <p>Vercel</p>
                            </section>
                        </div>
                        <section>
                            <h1 className="text-xl font-bold mb-2">Challenges & Solutions</h1>
                            <p className="bg-gradient-to-r from-pink-800/10 to-background rounded-lg p-5">A key challenge was configuring NextAuth providers and managing authentication consistently across both client-side and server-side environments, which required proper session handling and protected route logic.</p>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    )
}