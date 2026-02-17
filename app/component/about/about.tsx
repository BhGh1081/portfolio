import { HiAcademicCap } from "react-icons/hi2";
import { SiBookstack } from "react-icons/si";
import { LuBriefcaseBusiness } from "react-icons/lu";
import Link from "next/link";


export default function About() {


    return (
        <div className="w-full flex flex-col gap-15">
            <p className="text-[22px] font-bold text-primary">About Me</p>
            <div className="flex">
                <div className="bg-gradient-to-r from-pink-900/7 to-background rounded-lg p-5">
                    <p className="flex items-center text-[22px] gap-2"><HiAcademicCap /> Education</p>
                    <div className="p-5">
                        <p className="font-bold text-[20px]">B.E. in Software Engineering</p>
                        <i>Raja University – June 2016</i>
                    </div>
                    <div className="p-5 space-y-1">
                        <p className="font-bold text-[1.1rem]">University Final Project</p>
                        <p>Language School Management Software</p>
                        <p className="mt-5"><strong>Technologies:</strong> C#, Windows Forms, SQL Server</p>
                        <p className="font-bold text-[1.1rem] mt-5">Description</p>
                        <p>Developed a desktop application for managing classes and students in language schools incoluded course management and basic reporting</p>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-pink-900/7 to-background rounded-lg p-5">
                <p className="flex gap-2 text-[22px] items-center"><SiBookstack />Courses</p>
                <div className="p-5">
                    <p className="font-bold text-[18px]">Product Design Online Course</p>
                    <i>Amanj Academy - July 2022</i>
                    <p className="pt-2">Through this product design course, I learned that building a successful product is not only about solving a problem — it’s about creating an enjoyable experience that users prefer over alternatives. The course covered essential design practices such as wireframing, prototyping, user flow planning, clear navigation, accessibility, and creating products that are easy to learn and use.</p>
                </div>
                <div className="p-5">
                    <p className="font-bold">Course Project: Personal Accounting App – UI/UX Design</p>
                    <p className=""><strong>Platform:</strong> Figma</p>
                    <p className="font-bold">Description</p>
                    <p className="">Developed a desktop application for managing classes and students in language schools incoluded course management and basic reporting. 
                        <Link href={'https://www.figma.com/proto/i5UPY0pxpSOuYamsNvfPGr/Manito?node-id=12-2&starting-point-node-id=1%3A3&t=l0GFAM0lXRXvpUhJ-1'} className="hover:text-primary pl-2 font-bold"><u>View Project</u></Link>
                    </p>
                </div>
            </div>
            <div className="bg-gradient-to-r from-pink-900/7 to-background rounded-lg p-5">
                <p className="flex gap-2 text-[22px] items-center"><LuBriefcaseBusiness />Work Experience</p>
                <div className="p-5">
                    <p className="font-bold text-[18px]">WordPress Website Manager</p>
                    <i>Shahidi Trading Group – Jan-Nov 2024</i>
                </div>
                <div className="pl-10">
                    <ul className="list-disc">
                        <li>Managed and updated website content through WordPress CMS</li>
                        <li>Installed configured themes and plugins</li>
                        <li>Applied basic SEO using Yoast SEO</li>
                        <li>Troubleshot issues via WordPress admin panel</li>
                        <li>Designed mobile-friendly pages with Elementor</li>
                    </ul>
                </div>
                <div className="p-5">
                    <p className="font-bold">Current Focus</p>
                    <p>Transitioning toward modern Front-End development using React, Next.js, TypeScript and Tailwind through personal projects.</p>
                </div>
            </div>
        </div>
    )
}