import Card from "./card";
import { dataType } from "@/app/lib/definition";

export default function Projects() {

    const todoData: dataType = {
        title: "Todo App",
        techs: ['Next', 'React', 'TypeScript', 'Supabase'],
        description: "cnksn fejrv  jerjjs gerjekkk fefj rj",
        badge: "Full Stack",
        href: 'todo-app.tsx'
    }

    const dashboardData: dataType = {
        title: 'Dashboard',
        techs: ['Next', 'React', 'TypeScript', 'Tailwind'],
        description: "cnksn fejrv  jerjjs gerjekkk fefj rj",
        href: 'dashboard.tsx'
    }

    return (
        <div className="flex flex-col gap-15">
            <p className="text-[22px] font-bold text-primary">Projects</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <Card data={todoData} />
                <Card data={dashboardData} />
            </div>
        </div>
    )
}