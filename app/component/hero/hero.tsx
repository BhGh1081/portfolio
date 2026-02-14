import Image from "next/image"

export default function Hero () {

    return(
        <div className="h-screen w-full">
            <div className=" w-180 h-180 absolute right-0 bottom-0 bg-gradient-to-tl from-white from-50% to-stone-900 to-50%">
                <Image src='/profile.png' width={500} height={500} alt="profile picture" className="absolute right-20 z-10" />
                <div className="w-100 h-100 absolute right-0 bottom-0 bg-gradient-to-tl from-orange-500 from-50% to-white to-50%"></div>
            </div>
        </div>
    )
}