import { HiAcademicCap } from "react-icons/hi2";
import { SiBookstack } from "react-icons/si";
import { LuBriefcaseBusiness } from "react-icons/lu";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import clsx from "clsx";


export default function About() {

    const t = useTranslations('about');
    const locale = useLocale();

    return (
        <div className="w-full flex flex-col gap-10 pt-10">
            <p className="text-[1.4rem] font-bold text-primary">{t('headding')}</p>
            <div className="flex">
                <div className={clsx(`w-full from-pink-900/10 to-background rounded-xl p-5`, locale === 'en' ? 'bg-gradient-to-r' : 'bg-gradient-to-l' )}>
                    <p className="flex items-center text-[1.4rem] gap-2"><HiAcademicCap /> {t('education.title')}</p>
                    <div className="p-5">
                        <p className="font-bold text-[1.2rem]">{t('education.degree')}</p>
                        <i>{t('education.uni')}</i>
                    </div>
                    <div className="p-5 space-y-1">
                        <p className="font-bold text-[1.1rem]">{t('education.project.title')}</p>
                        <p>{t('education.project.name')}</p>
                        <p className="mt-5"><strong>{t('education.project.tech')}:</strong> {t('education.project.techs')}</p>
                        <p className="font-bold text-[1.1rem] mt-5">{t('education.project.disTitle')}</p>
                        <p>{t('education.project.description')}</p>
                    </div>
                </div>
            </div>
            <div className={clsx(`w-full from-pink-900/10 to-background rounded-xl p-5`, locale === 'en' ? 'bg-gradient-to-r' : 'bg-gradient-to-l' )}>
                <p className="flex gap-2 text-[1.4rem] items-center"><SiBookstack />{t('courses.headding')}</p>
                <div className="p-5">
                    <p className="font-bold text-[1.1rem]">{t('courses.title')}</p>
                    <i className="text-[.9rem]">{t('courses.academy')}</i>
                    <p className="pt-2">{t('courses.description')}</p>
                </div>
                <div className="p-5 space-y-5">
                    <div>
                        <p className="font-bold">{t('courses.project.title')}</p>
                        <p>{t('courses.project.name')}</p>
                    </div>
                    <p className=""><strong>{t('courses.project.platform')}: </strong> Figma</p>
                    <div>
                        <p className="font-bold">{t("courses.project.disTitle")}</p>
                        <p className="">{t("courses.project.description")}
                            <Link href={'https://www.figma.com/proto/i5UPY0pxpSOuYamsNvfPGr/Manito?node-id=12-2&starting-point-node-id=1%3A3&t=l0GFAM0lXRXvpUhJ-1'} className="hover:text-primary pl-2 font-bold"><u> {t('courses.project.view')}</u></Link>
                        </p>
                    </div>
                    <strong>{t("courses.project.acquired")}</strong>
                    <ul className="list-disc px-3">
                        <li>{t("courses.project.1")}</li>
                        <li>{t("courses.project.2")}</li>
                        <li>{t("courses.project.3")}</li>
                    </ul>
                </div>
            </div>
            <div className={clsx(`w-full from-pink-900/10 to-background rounded-xl p-5`, locale === 'en' ? 'bg-gradient-to-r' : 'bg-gradient-to-l' )}>
                <p className="flex gap-2 text-[1.4rem] items-center"><LuBriefcaseBusiness />{t('experience.headding')}</p>
                <div className="p-5">
                    <p className="font-bold text-[1.1rem]">{t('experience.title')}</p>
                    <i>{t('experience.place')}</i>
                </div>
                <div className="px-8">
                    <ul className="list-disc">
                        <li>{t('experience.1')}</li>
                        <li>{t('experience.2')}</li>
                        <li>{t('experience.3')}</li>
                        <li>{t('experience.4')}</li>
                        <li>{t('experience.5')}</li>
                    </ul>
                </div>
                <div className="p-5">
                    <p className="font-bold">{t('experience.focus')}</p>
                    <p>{t('experience.description')}</p>
                </div>
            </div>
        </div>
    )
}