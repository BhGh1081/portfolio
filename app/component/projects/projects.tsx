import Card from "./card";
import { dataType } from "@/app/lib/definition";
import { useTranslations } from "next-intl";


export default function Projects() {

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
        img1: '/1-dash.webp',
        img2: '/2-dashboard.webp'
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