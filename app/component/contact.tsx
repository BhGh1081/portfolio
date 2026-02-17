import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import {FaRegCalendarAlt  } from "react-icons/fa";

export default function Contact() {


    return (
        <div className="flex gap-5 justify-center items-center h-[80px] w-full shadow-lg shadow-white">
                <p className="flex gap-1 items-center"><IoLocationOutline /> Tehran </p>
                <p className="flex gap-1 items-center"><MdOutlinePhone /> 09355367233 </p>
                <p className="flex gap-1 items-center"><FaRegCalendarAlt /> Born: 09/09/1995</p>

        </div>
    )
}