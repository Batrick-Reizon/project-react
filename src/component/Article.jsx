import React from "react"

function Article() {
    return (<article className="mx-auto max-w-2xl my-10">
        <h2 className="text-xl font-bold">📰Latest News</h2>
        <div className="flex flex-wrap sm:flex-nowrap justify-center items-center p-5 shadow-lg">
            <img src="https://c4.wallpaperflare.com/wallpaper/676/1015/776/usa-press-new-york-the-new-york-times-american-daily-newspaper-hd-wallpaper-preview.jpg" alt="Newspaper-Image" className="w-80 rounded-lg"/>
            <div className="ml-5">
                <h3 className="text-xl font-semibold mt-3">🚀Vite is Revolutionizing Frontend</h3>
                <p className="mt-2 text-gray-600">Vite is a next-gen frontend tool that delivers fast development.</p>
            </div>
        </div>
    </article>)
}

export default Article