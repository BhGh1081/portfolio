import clsx from "clsx";
import Link from "next/link";

export default function Menu ({className, active} : {className?: string, active:string}) {

    const menu = ['About','Skils','Projects'];
    
    return(
        <div className="w-full justify-center flex p-5">
            <ul className="flex gap-10">
                {menu.map((item,index) => 
                <li key={index}>
                    <Link href={`#${item}`}
                        className={clsx("hover:text-primary", item === active && 'text-primary text-[1.1rem]')}>{item}</Link>
                </li>)}
            </ul>
        </div>
    )
}