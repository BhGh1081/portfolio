import {
    RiJavascriptLine, RiReactjsLine, RiNextjsLine,
    RiHtml5Line, RiCss3Line, RiTailwindCssLine
} from "react-icons/ri";
import {
    TbBrandTypescript, TbBrandFigma, TbBrandGit,
    TbBrandAdobePhotoshop, TbBrandAdobePremier
} from "react-icons/tb";
import { SiPostman, SiWordpress } from "react-icons/si";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { useLocale } from "next-intl";

export default function Skils() {

    const t = useTranslations('skills')
    const locale = useLocale();

    return (
        <div className="w-full flex flex-col gap-10 pt-20">
            <p className="text-[22px] font-bold text-primary">{t('headding')}</p>
            <div>
                <div className="flex flex-col gap-5">
                    <div className={clsx(`from-gray-700/25 to-background rounded-xl p-5`, locale === 'en' ? 'bg-gradient-to-r' : 'bg-gradient-to-l')}>
                        <p className="text-[18px] font-bold mb-4">{t('1.title')}</p>
                        <p>{t('1.item1')}</p>
                        <p>{t('1.item2')}</p>
                    </div>
                    <div className={clsx(`from-gray-700/25 to-background rounded-xl p-5`, locale === 'en' ? 'bg-gradient-to-r' : 'bg-gradient-to-l')}>
                        <p className="text-[18px] font-bold mb-4">{t('2.title')}</p>
                        <p>{t('2.item')}</p>
                    </div>
                    <div className={clsx(`from-gray-700/25 to-background rounded-xl p-5`, locale === 'en' ? 'bg-gradient-to-r' : 'bg-gradient-to-l')}>
                        <p className="text-[18px] font-bold mb-4">{t('3.title')}</p>
                        <p>{t('3.item')}</p>
                    </div>
                    <div className={clsx(`flex gap-2 from-gray-700/25 to-background rounded-xl p-5`, locale === 'en' ? 'bg-gradient-to-r' : 'bg-gradient-to-l')}>
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
            </div>

        </div>
    )
}