'use client';

import Slider from "../ui/slider"
import { Introduction, Features, Roadmap } from "../component/projects/project"


export default function Dashboard() {

    const slides = [
        { id: 1, src: '/dashboard/desktop-light.jpg' },
        { id: 2, src: '/dashboard/desktop-dark.jpg' },
        { id: 3, src: '/dashboard/tablet-mobile.png' }
    ]

    return (
        <div className="p-10 lg:px-30 min-h-screen space-y-20">
            <div className="flex flex-col gap-10">
                <Introduction projectName="dashboard" />
                <Slider slides={slides} />
            </div>
            <Features projectName="dashboard" />
            <Roadmap projectName="dashboard" />
            
            <div className="flex flex-col gap-5 items-center justify-center">
                <img
                    src='/under-construction.svg'
                    className="w-170" />
                <p className="text-[2rem]">Under Development</p>
            </div>
        </div>
    )
}