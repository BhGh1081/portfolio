import { useContext } from "react";
import { LocaleContext } from "../providers";

export default function LangugeBtn({className} : {className?: string}) {

    const lang = useContext(LocaleContext);

    const langChange = () => {

        if (lang?.locale === 'en')
            lang.setLocale('fa')
        else lang?.setLocale('en')
    }
    

    return(
        <button 
            onClick={langChange}
            className={`${className} w-10 h-10 border-solid border-1 border-primary/20 bg-primary/10 rounded-lg cursor-pointer active:scale-95`}>
            {lang?.locale === 'en' ? 'فا' : 'EN'}
        </button>
    )
}