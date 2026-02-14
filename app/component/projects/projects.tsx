import Card from "./card";

export default function Projects() {


    return (
        <div className="flex flex-col gap-15">
            <p className="text-[22px] font-bold text-primary">Projects</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
                <Card title="Todo App" techs={['Next', 'React', 'TypeScript', 'Supabase']} description="cnksn fejrv  jerjjs gerjekkk fefj rj" badge="Full Stack" />
                <Card title="Todo List" techs={['React', 'Tailwind']} description="cnksn fejrv  jerjjs gerjekkk fefj rj" />
            </div>
        </div>
    )
}