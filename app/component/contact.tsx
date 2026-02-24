import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import {FaRegCalendarAlt  } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Contact() {

    const t = useTranslations('contact');

    return (
        <div dir="ltr" className="flex gap-7 justify-center items-center h-[60px] md:h-[80px] w-full shadow-lg shadow-white">
                <p className="flex gap-1 items-center"><IoLocationOutline /> {t('city')} </p>               
                <p className="flex gap-1 items-center"><FaRegCalendarAlt />{t('date')}</p>
                <p className="flex gap-1 items-center"><MdOutlinePhone />{t('number')}</p>

        </div>
    )
}