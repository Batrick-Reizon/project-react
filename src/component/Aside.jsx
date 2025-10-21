import React from "react"
import { FaBook, FaReact, FaRocket } from "react-icons/fa"

function Aside() {
    const asideLink = [
        {
            name: "Vite Documentation",
            icon: <FaBook></FaBook>,
            href: "#"
        },
        {
            name: "React Guides",
            icon: <FaReact></FaReact>,
            href: "#"
        },
        {
            name: "Frontend Trends",
            icon: <FaRocket></FaRocket>,
            href: "#"
        }
    ]

    return(<aside className="bg-gray-300 p-5 rounded-lg">
        <h2 className="text-xl font-semibold">📌Related Links</h2>
        <ul>{asideLink.map((data, index) => {
            return(
                <li key={index}><a href={data.href} className="flex items-center gap-1 text-blue-500 w-fit hover:underline my-2">{data.icon}{data.name}</a></li>
            )
        })}</ul>
    </aside>)
}

export default Aside