import Card from "./card";
import { dataType } from "@/app/lib/definition";

export default function Projects() {

    const todoData: dataType = {
        title: "Todo App",
        techs: ['Next', 'React', 'TypeScript', 'Supabase'],
        description: "A full-stack task management application featuring secure authentication, user-specific task management, search & filtering, categorization, and full CRUD operations with persistent storage",
        badge: "Full Stack",
        href: '/todo-app',
        img1: '/tododesktop.png',
        img2: 'todomobile.png'
    }

    const dashboardData: dataType = {
        title: 'Dashboard',
        techs: ['Next', 'React', 'TypeScript', 'Tailwind'],
        description: "E-commerce site management dashboard for managing users, customers, orders, and revenue using React and Next.js",
        href: '/dashboard',
        img1: '/1-dash.webp',
        img2: '/2-dashboard.webp'
    }

    return (
        <div className="flex flex-col gap-15 pt-20">
            <p className="text-[22px] font-bold text-primary">Projects</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <Card data={todoData} />
                <Card data={dashboardData} />
            </div>
        </div>
    )
}