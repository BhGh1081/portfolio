import { RiReactjsLine, RiNextjsLine, RiTailwindCssLine, RiSupabaseFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

type techType = 'Next' | 'React' | 'TypeScript' | 'Tailwind' | 'Supabase';

export default function Card({ title, techs, description, badge }: { title: string, techs: techType[], description: string, badge?: string }) {

    const icons = {
        Next: RiNextjsLine,
        React: RiReactjsLine,
        TypeScript: TbBrandTypescript,
        Tailwind: RiTailwindCssLine,
        Supabase: RiSupabaseFill
    }

    return (
        <div className="rounded-2xl p-6 bg-gradient-to-br
            from-white/5 to-orange-500/15 border border-orange-500/10
            shadow-[0_5px_10px_rgba(255,140,0,0.15)] h-50 hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex justify-between">
                <p className="font-bold text-[18px]">{title}</p>
                {badge &&
                    <p className="border border-primary py-2 px-3 rounded-md text-[14px]">Full-Stack</p>}
            </div>
            <div className="grid grid-cols-2">
                {techs.map((tech, index) => {
                    const Icon = icons[tech];
                    return (
                        <div className="flex gap-2">
                            <p>{tech}</p>
                            <Icon key={index} className="w-5 h-5" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}