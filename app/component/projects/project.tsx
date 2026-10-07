'use client';

import { useTranslations, useLocale } from "next-intl";
import clsx from "clsx";
import Link from "next/link";
import { LuLink } from "react-icons/lu";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";



export function Introduction({ projectName, githubLink }: { projectName: string, githubLink: string }) {

    const t = useTranslations(`project.${projectName}.introduction`);
    const locale = useLocale();

    return (
        <div className="w-full">
            <p className="text-[1.5rem] font-bold">{t('header')}</p>
            <p className="text-[1.1rem]">{t('title')}</p>
            <div className="pt-5 space-y-1">
                <div className={clsx(`flex flex-col gap-1 from-primary/7 to-background rounded-lg p-4`, locale === 'en' ? 'bg-linear-to-r' : 'bg-linear-to-l')}>
                    <Link href={`https://${projectName}.gholamidev.ir//`} className="flex w-fit gap-2 hover:text-primary">
                        <LuLink className="w-5 h-5" />
                        <u>{t('demo')}</u>
                    </Link>
                    <section className="text-sm p-2">
                        <p className="font-bold">{t('account')}</p>
                        <p>{t('userName')}</p>
                        <p>{t('pass')}</p>
                    </section>
                </div>
                <div className={clsx(`flex gap-2 from-yellow-500/7 to-background rounded-lg p-5`, locale === 'en' ? 'bg-linear-to-r' : 'bg-linear-to-l')}>
                    <Link href={githubLink} className="flex w-fit gap-2 hover:text-primary" >
                        <RiGitRepositoryCommitsLine className="w-5 h-5" />
                        <u>{t('github')}</u>
                    </Link>
                </div>
            </div>
        </div>
    )
}



export function Overview({ projectName }: { projectName: string }) {

    const t = useTranslations(`project.${projectName}.overview`);
    const locale = useLocale();


    return (
        <div className="space-y-2">
            <h1 className="text-2xl font-bold">{t('title')}</h1>
            <p className={clsx(`from-yellow-500/7 to-background rounded-lg p-5`, locale === 'en' ? 'bg-linear-to-r' : 'bg-linear-to-l')}>{t('description')}</p>
        </div>
    )
}




export function Features({ projectName }: { projectName: string }) {

    const t = useTranslations(`project.${projectName}.features`);
    const items = t.raw('items') as string[];
    console.log('items:', items)
    const locale = useLocale();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-2">{t('title')}</h1>
            <ul className={clsx(`list-disc from-green-800/10 to-background rounded-lg p-5 px-10`, locale === 'en' ? 'bg-linear-to-r' : 'bg-linear-to-l')}>
                {items.map((feature, index) => <li key={index}>{feature}</li>)}
            </ul>
        </div>
    )
}





export function TechStack({ frontEnd, backEnd, development }:
    { frontEnd: string[], backEnd?: string[], development: string }) {

    const t = useTranslations(`project.tech`);
    const locale = useLocale();

    return (
        <div className="space-y-5">
            <p className="text-2xl font-bold mb-2">{t('title')}</p>
            <section className={clsx(`from-primary/7 to-background rounded-lg p-5`, locale === 'en' ? 'bg-linear-to-r' : 'bg-linear-to-l')}>
                <h1 className="text-xl font-bold">Frontend</h1>
                {frontEnd.map((item, index) => <p key={index} className="inline">{item}</p>)}
            </section>
            {backEnd &&
                <section className={clsx(`from-primary/7 to-background rounded-lg p-5`, locale === 'en' ? 'bg-linear-to-r' : 'bg-linear-to-l')}>
                    <h1 className="text-xl font-bold">Backend / Database</h1>
                    {backEnd.map((item, index) => <p key={index} className="inline">{item}</p>)}
                </section>}
            <section className={clsx(`from-primary/7 to-background rounded-lg p-5`, locale === 'en' ? 'bg-linear-to-r' : 'bg-linear-to-l')}>
                <h1 className="text-xl font-bold">Deployment</h1>
                <p>Vercel</p>
            </section>
        </div>
    )
}




export function Challenges({ projectName }: { projectName: string }) {

    const t = useTranslations(`project.${projectName}.challenges`);
    const challenges = t.raw('items') as string[];
    const locale = useLocale();

    return (
        <div>
            <h1 className="text-xl font-bold mb-2">{t('title')}</h1>
            <ul className={clsx(`from-pink-800/10 to-background rounded-lg p-5`, locale === 'en' ? 'bg-linear-to-r' : 'bg-linear-to-l')}>
                {challenges.map((item, index) => <li key={index}>{item}</li>)}
            </ul>

        </div>
    )
}


export function Roadmap({ projectName }: { projectName: string }) {

    const t = useTranslations(`project.${projectName}.roadmap`);
    const items = t.raw('items') as string[];
    const locale = useLocale();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-2">{t('title')}</h1>
            <ul className={clsx(`list-disc from-pink-800/10 to-background rounded-lg p-5 px-10`, locale === 'en' ? 'bg-linear-to-r' : 'bg-linear-to-l')}>
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}
