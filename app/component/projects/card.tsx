'use client';

import { RiReactjsLine, RiNextjsLine, RiTailwindCssLine, RiSupabaseFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import Link from "next/link";
import { dataType } from "@/app/lib/definition";


export default function Card({ data }: {data: dataType}) {

    const icons = {
        Next: RiNextjsLine,
        React: RiReactjsLine,
        TypeScript: TbBrandTypescript,
        Tailwind: RiTailwindCssLine,
        Supabase: RiSupabaseFill
    }

    return (
        <Link href={'/todo-app'} className="rounded-2xl p-6 space-y-5 bg-gradient-to-br from-white/5 to-orange-500/15 border border-orange-500/10 shadow-[0_5px_10px_rgba(255,140,0,0.15)] hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-in-out">
            <div className="flex justify-between">
                <p className="font-bold text-[18px]">{data.title}</p>
                {data.badge &&
                    <p className="border border-primary py-2 px-3 rounded-md text-[.9rem]">Full-Stack</p>}
            </div>
            <div className="grid grid-cols-2">
                {data.techs.map((tech, index) => {
                    const Icon = icons[tech];
                    return (
                        <p key={index} className="flex gap-2">{tech}
                            <Icon key={index} className="w-5 h-5" />
                        </p>
                    )
                })}
            </div>
            <p className="text-[0.8rem]">A full-stack task management application featuring secure authentication, user-specific task management, search & filtering, categorization, and full CRUD operations with persistent storage</p>
            <div className="flex w-full justify-center gap-2 ">
                <img src={'/desktop.png'} className="w-[70%] rounded-sm" />
                <img src={'/mobile.png'} className="w-[30%] rounded-sm" />
            </div>
        </Link>
    )
}