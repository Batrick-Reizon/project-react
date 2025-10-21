import React, { useState } from "react"
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope, FaBars } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"

function Navbar() {
    const navList = [
        {
            name: "Home",
            icon: <FaHome></FaHome>,
            href: "#"
        },
        {
            name: "About",
            icon: <FaInfoCircle></FaInfoCircle>,
            href: "#"
        },
        {
            name: "Services",
            icon: <FaServicestack></FaServicestack>,
            href: "#"
        },
        {
            name: "Contact",
            icon: <FaEnvelope></FaEnvelope>,
            href: "#"
        },
    ]
    const [menu, setmenu] = useState(false)

    return (<nav className="bg-gray-900 text-white p-5">
        <div className="flex justify-between items-center">
            <h1 className="sm:text-2xl cursor-default font-black">🚀MyWebsite</h1>
            <ul className="hidden sm:flex gap-5">
                {navList.map((data, index) => {
                    return (
                        <li key={index}><a href={data.href} className="flex items-center gap-1 hover:text-blue-400 hover:underline w-fit">{data.icon}{data.name}</a></li>
                    )
                })}
            </ul>
            <FaBars className="flex sm:hidden" onClick={() => setmenu(true)}></FaBars>
        </div>
        {<div className="bg-gray-900 fixed top-0 w-1/2 h-screen z-10 p-10 transition-all ease-in-out duration-1000" style={{right : menu ? "0%" : "-50%"}}>
            <div className="flex justify-end w-full hover:text-red-500">
                <FaXmark onClick={() => setmenu(false)}></FaXmark>
            </div>
            <ul>
                {navList.map((data, index) => {
                    return(
                        <li key={index}><a href={data.href} className="flex items-center gap-3 my-5 hover:text-blue-400 hover:underline w-fit">{data.icon}{data.name}</a></li>
                    )
                })}
            </ul>
        </div>}
    </nav>)
}

export default Navbar