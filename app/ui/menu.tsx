'use client';

import clsx from "clsx";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LangugeBtn from "./langugeBTN";

export default function Menu({ className, active }: { className?: string, active: string }) {

    const t = useTranslations("menu")

    return (
        <div className="relative w-full justify-center flex p-5">
            <ul className="flex gap-10">
                <li>
                    <Link href={`#${t('about')}`}
                        className={clsx("hover:text-primary", t("about") === active && 'text-primary text-[1.1rem]')}>{t("about")}</Link>
                </li>
                <li>
                    <Link href={`#${t('skills')}`}
                        className={clsx("hover:text-primary", t("skills") === active && 'text-primary text-[1.1rem]')}>{t("skills")}</Link>
                </li>
                <li>
                    <Link href={`#${t('projects')}`}
                        className={clsx("hover:text-primary", t("projects") === active && 'text-primary text-[1.1rem]')}>{t("projects")}</Link>
                </li>
            </ul>
            <LangugeBtn className="absolute right-5 lg:right-30 top-1/2 -translate-y-1/2" />
        </div>
    )
}