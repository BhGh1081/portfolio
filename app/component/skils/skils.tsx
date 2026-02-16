import { RiJavascriptLine, RiReactjsLine, RiNextjsLine,
        RiHtml5Line, RiCss3Line, RiTailwindCssLine} from "react-icons/ri";
import { TbBrandTypescript, TbBrandFigma, TbBrandGit,
        TbBrandAdobePhotoshop, TbBrandAdobePremier} from "react-icons/tb";
import { SiPostman, SiWordpress } from "react-icons/si";

export default function Skils() {


    return (
        <div className="w-full flex flex-col gap-15 pt-20">
            <p className="text-[22px] font-bold text-primary">My Skils</p>
            <div className="">
                <div className="flex flex-col gap-10">
                    <div>
                        <p className="text-[18px] font-bold mb-4">Core Front-End</p>
                        <p>JavaScript, Next.js, React, TypeScript</p>
                        <p>HTML, CSS, Tailwind, Responsive Design, REST API</p>
                    </div>
                    <div>
                        <p className="text-[18px] font-bold mb-4">UI/UX & Design</p>
                        <p>Figma, UX/UI, Wireframing, Prototyping</p>
                    </div>
                    <div>
                        <p className="text-[18px] font-bold mb-4">Tools</p>
                        <p>Git, Postman, WordPress, Adobe Photoshop, Adobe Illustrator, Adobe Premiere</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 p-5 pl-0">
                <RiJavascriptLine className="w-8 h-8" />
                <RiNextjsLine className="w-8 h-8" />
                <RiReactjsLine className="w-8 h-8" />
                <RiHtml5Line className="w-8 h-8" />
                <RiCss3Line className="w-8 h-8" />
                <TbBrandTypescript className="w-8 h-8" />
                <RiTailwindCssLine className="w-8 h-8" />
                <TbBrandGit className="w-8 h-8" />
                <SiPostman className="w-7 h-7" />
                <SiWordpress className="w-8 h-7" />
                <TbBrandFigma className="w-8 h-8" />
                <TbBrandAdobePhotoshop className="w-8 h-8" />
                <TbBrandAdobePremier className="w-8 h-8" />
            </div>
        </div>
    )
}