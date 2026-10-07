'use client';

import Slider from "../ui/slider";
import {
    Introduction,
    Overview,
    Features,
    TechStack,
    Challenges
} from "../component/projects/project";


export default function TodoApp() {


    const slides = [
        { id: 1, src: '/todoApp/light.png' },
        { id: 2, src: '/todoApp/dark.png' },
        { id: 3, src: '/todoApp/mobileView.webp' }
    ]


    return (
        <div className="p-10 lg:px-30 min-h-screen">
            <div className="flex flex-col gap-10">
                <Introduction projectName="todo" />
                <Slider slides={slides} />
            </div>

            <div className="flex flex-col gap-15 pt-20">
                <Overview projectName="todoApp" />

                <Features projectName="todoApp" />

                <TechStack
                    frontEnd={['Next.js - ', 'React - ', 'TypeScript - ', 'Tailwind CSS']}
                    backEnd={['Supabase (PostgreSQL)']}
                    development="vercle"
                />
                <Challenges projectName="todoApp" />
            </div>
        </div>
    )
}
