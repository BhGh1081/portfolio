'use client';

import { RiReactjsLine, RiNextjsLine, RiTailwindCssLine, RiSupabaseFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import Link from "next/link";
import { dataType } from "@/app/lib/definition";
import { useTranslations } from "next-intl";


export function Card({ data }: { data: dataType }) {

    const t = useTranslations('card');

    const icons = {
        Next: RiNextjsLine,
        React: RiReactjsLine,
        TypeScript: TbBrandTypescript,
        Tailwind: RiTailwindCssLine,
        Supabase: RiSupabaseFill
    }

    return (
        <Link href={data.href} className="rounded-2xl p-6 flex flex-col justify-between space-y-5 bg-linear-to-br from-white/5 to-orange-500/15 border border-orange-500/10 shadow-[0_5px_10px_rgba(255,140,0,0.15)] hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center max-h-[7%]">
                <p className="font-bold text-[18px]">{t(`title.${data.title}`)}</p>
                {data.badge &&
                    <p className="border border-primary py-2 px-3 rounded-md text-[.9rem]">Full-Stack</p>}
            </div>
            <div className="grid grid-cols-2 h-[10%]">
                {data.techs.map((tech, index) => {
                    const Icon = icons[tech];
                    return (
                        <p key={index} className="flex gap-2">{tech}
                            <Icon key={index} className="w-5 h-5" />
                        </p>
                    )
                })}
            </div>
            <p className="text-[0.8rem] md:min-h-20">{t(`description.${data.description}`)}</p>
            <div className="flex w-full justify-center gap-2">
                <img src={data.img1} className="w-[70%] rounded-sm" />
                <img src={data.img2} className="w-[30%] rounded-sm" />
            </div>
        </Link>
    )
}


export default function CardWrapper() {

    const t = useTranslations('projects')

    const todoData: dataType = {
        title: "todoTitle",
        techs: ['Next', 'React', 'TypeScript', 'Supabase'],
        description: 'todoDescription',
        badge: "Full Stack",
        href: '/todo-app',
        img1: '/tododesktop.png',
        img2: 'todomobile.png'
    }

    const dashboardData: dataType = {
        title: 'dashboardTitle',
        techs: ['Next', 'React', 'TypeScript', 'Tailwind'],
        description: 'dashboardDescription',
        href: '/dashboard',
        img1: '/dashboard/desktop.jpg',
        img2: '/dashboard/mobile.jpg'
    }

    return (
        <div className="flex flex-col gap-10 pt-20">
            <p className="text-[22px] font-bold text-primary">{t('headding')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                <Card data={todoData} />
                <Card data={dashboardData} />
            </div>
        </div>
    )
}