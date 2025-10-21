import React from "react"

function Hero() {
    return (<section className="text-center bg-gray-200 py-5">
        <img src="https://www.21kschool.com/in/wp-content/uploads/sites/4/2023/11/15-Facts-About-Coding-Every-Kid-Should-Know.png" alt="Coding-Image" className="w-72 sm:w-96 mt-5 mb-5 mx-auto shadow-lg rounded-lg"/>
        <h2 className="text-xl sm:text-3xl font-semibold">🎨Build Amazing UIs with React & Vite</h2>
        <p className="my-1 text-gray-600">Fast, lightweight, and modern frontend development.</p>
        <button className="bg-blue-500 py-1 px-5 my-2 hover:bg-blue-600 text-white rounded">🚀Get Started</button>
    </section>)
}

export default Hero