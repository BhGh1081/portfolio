import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';


export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const vazir = localFont({
    src: [
        {
            path: '../fonts/Vazirmatn-Regular.woff2',
            weight: '400'
        },
        {
            path: '../fonts/Vazirmatn-Bold.woff2',
            weight: '700',
            
        }
    ],
    variable: '--font-vazirmatn'
})

export const shabnam = localFont({
    src: [
        {
            path: '../fonts/Shabnam.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../fonts/Shabnam-Bold.woff2',
            weight: '700',
            style: 'normal'
        }
    ],
    variable: '--font-shabnam'
})