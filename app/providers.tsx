'use client';

import { NextIntlClientProvider } from "next-intl";
import en from '@/message/en.json';
import fa from '@/message/fa.json';
import { useEffect, useState } from "react";
import { createContext } from "react";
import { contextType } from "./lib/definition";
import { vazir } from '@/app/ui/font';



export const LocaleContext = createContext<contextType | null>(null);

export default function NextIntlProvider({ children }: { children: React.ReactNode }) {

    const message = { en, fa };
    const [locale, setLocale] = useState<'en' | 'fa'>('en');

    useEffect(() => {
        const languege = localStorage.getItem('lang') as 'fa' | 'en' | null;
        if(languege) {
            setLocale(languege);
        }
    },[])

    useEffect(() => {
        localStorage.setItem('lang', locale)
    },[locale])


    return (
        <NextIntlClientProvider locale={locale} messages={message[locale]}>
            <div dir={locale === 'fa' ? 'rtl' : 'ltr'} className={`${locale === 'fa' ? vazir.className : ''}`}>
                <LocaleContext value={{ locale, setLocale }} >
                    {children}
                </LocaleContext>
            </div>
        </NextIntlClientProvider>
    )
}