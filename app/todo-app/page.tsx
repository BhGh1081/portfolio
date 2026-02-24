'use client';

import Link from "next/link";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { LuLink } from "react-icons/lu";
import Slider from "../ui/slider";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { useLocale } from "next-intl";


export default function TodoApp() {

    const t = useTranslations('project')
    const locale = useLocale();

    const slides = [
        { id: 1, src: '/light.png' },
        { id: 2, src: '/dark.png' },
        { id: 3, src: '/mobileView.webp' }
    ]


    return (
        <div className="p-10 lg:px-30 min-h-screen">
            <div className="flex flex-col gap-10">
                <div className="w-full">
                    <p className="text-[1.5rem] font-bold">{t('todoApp.header')}</p>
                    <p className="text-[1.1rem]">{t('todoApp.title')}</p>
                    <div className="pt-5 space-y-1">
                        <Link href={'https://todo.gholamidev.ir/'} className={clsx(`flex flex-col gap-1 from-primary/7 to-background rounded-lg p-4`, locale === 'en' ? 'bg-gradient-to-r' : 'bg-gradient-to-l')}>
                            <section className="flex gap-2 hover:text-primary">
                                <LuLink className="w-5 h-5" />
                                <u>{t('todoApp.demo')}</u>
                            </section>
                            <section className="text-sm p-2">
                                <p className="font-bold">{t('todoApp.account')}</p>
                                <p>{t('todoApp.email')}</p>
                                <p>{t('todoApp.pass')}</p>
                            </section>
                        </Link>
                        <Link href={'https://github.com/BhGh1081/Todo-List.git'} className={clsx(`flex gap-2 hover:text-primary from-yellow-500/7 to-background rounded-lg p-5`, locale === 'en' ? 'bg-gradient-to-r' : 'bg-gradient-to-l')}>
                            <RiGitRepositoryCommitsLine className="w-5 h-5" />
                            <u>{t('todoApp.github')}</u>
                        </Link>
                    </div>
                </div>
                <Slider slides={slides} />
                <div>
                    <div className="flex flex-col gap-15 pt-20">
                        <section className="space-y-2">
                            <h1 className="text-2xl font-bold">{t('overview.title')}</h1>
                            <p className={clsx(`from-yellow-500/7 to-background rounded-lg p-5`, locale === 'en' ? 'bg-gradient-to-r' : 'bg-gradient-to-l')}>{t('overview.description')}</p>
                        </section>
                        <section>
                            <h1 className="text-2xl font-bold mb-2">{t('features.title')}</h1>
                            <ul className={clsx(`list-disc from-green-800/10 to-background rounded-lg p-5 px-10`, locale === 'en' ? 'bg-gradient-to-r' : 'bg-gradient-to-l')}>
                                <li>{t('features.1')}</li>
                                <li>{t('features.2')}</li>
                                <li>{t('features.3')}</li>
                                <li>{t('features.4')}</li>
                                <li>{t('features.5')}</li>
                                <li>{t('features.6')}</li>
                                <li>{t('features.7')}</li>
                            </ul>
                        </section>
                        <div className="space-y-5">
                            <p className="text-2xl font-bold mb-2">{t('tech.title')}</p>
                            <section className={clsx(`from-primary/7 to-background rounded-lg p-5`, locale === 'en' ? 'bg-gradient-to-r' : 'bg-gradient-to-l')}>
                                <h1 className="text-xl font-bold">Frontend</h1>
                                <p>Next.js - React - TypeScript - Tailwind CSS</p>
                            </section>
                            <section className={clsx(`from-primary/7 to-background rounded-lg p-5`, locale === 'en' ? 'bg-gradient-to-r' : 'bg-gradient-to-l')}>
                                <h1 className="text-xl font-bold">Backend / Database</h1>
                                <p>Supabase (PostgreSQL)</p>
                            </section>
                            <section className={clsx(`from-primary/7 to-background rounded-lg p-5`, locale === 'en' ? 'bg-gradient-to-r' : 'bg-gradient-to-l')}>
                                <h1 className="text-xl font-bold">Deployment</h1>
                                <p>Vercel</p>
                            </section>
                        </div>
                        <section>
                            <h1 className="text-xl font-bold mb-2">{t('challenges.title')}</h1>
                            <p className={clsx(`from-pink-800/10 to-background rounded-lg p-5`, locale === 'en' ? 'bg-gradient-to-r' : 'bg-gradient-to-l')}>{t('challenges.description')}</p>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    )
}