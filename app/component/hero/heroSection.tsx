import { BriefcaseIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";





export default function HeroSection() {


    return (
        <div className=" flex flex-col flex-col-reverse gap-20 md:flex-row justify-between bg-black/60 rounded-[15px] md:p-10 p-5">
            <div className="md:w-[60%] flex flex-col justify-between">
                <article className="mb-10 flex flex-col items-center text-center md:items-start text-start">
                    <h1 className="text-[1.7rem]">Bahareh<strong className="text-orange-500"> Gholami</strong></h1>
                    <h2 className="text-[1.2rem] flex sm:items-center gap-2">
                        <BriefcaseIcon className="w-5 h-5" />Junior Front-End Developer
                    </h2>
                    
                    <p className="text-center md:text-start mb-10">Front-End Developer focused on Next.js, React and TypeScript. Currently seeking an internship to gain real-world experience and contribute to meaningful projects.</p>
                    <Link href={'https://github.com/BhGh1081'} className="flex items-center gap-2 hover:text-primary"><FaGithub /><u>github.com/BhGh1081</u></Link>
                    <Link href={'https://www.linkedin.com/in/bh-gholami'} className="flex items-center gap-2 hover:text-primary"><CiLinkedin /><u>linkedin.com/in/bh-gholami</u></Link>
                </article>
                <div className="flex gap-4 w-full items-center justify-center md:justify-start">
                    <img src={'/next-icon white.png'} alt="nextjs icon" className="w-6" />
                    <img src={'/react-icon.webp'} alt="react icon" className="h-6" />
                    <img src={'/typescript-icon.webp'} alt="typescript icon" className="w-6" />
                </div>
            </div>
            <div className="flex md:justify-end justify-center items-center flex-1">
                <div className="bg-orange-500 w-[13rem] h-[13rem] lg:w-[15rem] lg:h-[15rem] rotate-45">
                    <img src={'/profile.png'} alt="profile picture" className="w-[13rem] h-[13rem] lg:w-[15rem] lg:h-[15rem] rotate-315" />
                </div>
            </div>
        </div>
    )
}