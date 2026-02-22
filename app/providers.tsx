'use client';

import { NextIntlClientProvider } from "next-intl";
import en from '@/message/en.json';
import fa from '@/message/fa.json';
import { useState } from "react";

export default function NextIntlProvider({ children }: { children: React.ReactNode }) {

    const message = { en, fa };
    const [locale, setLocale] = useState<'en' | 'fa'>('fa');


    return (
        <NextIntlClientProvider locale={locale} messages={message[locale]}>
            <div dir={locale === 'fa' ? 'rtl' : 'ltr'}>
                {children}
            </div>
        </NextIntlClientProvider>
    )
}