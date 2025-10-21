import React from "react"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

function Footer() {
    return(<footer className="bg-gray-900 text-white p-5">
        <h4 className="text-center">🌎 Ⓒ 2025 Mywebsite. All Rights Reservered.</h4>
        <div className="flex justify-center mt-3 gap-5">
            <a href="https://facebook.com" className="flex items-center gap-1 text-blue-300 hover:text-blue-500 w-fit"><FaFacebook></FaFacebook>Facebook</a>
            <a href="https://twitter.com" className="flex items-center gap-1 text-blue-300 hover:text-blue-500 w-fit"><FaTwitter></FaTwitter>Twitter</a>
            <a href="https://instagram.com" className="flex items-center gap-1 text-blue-300 hover:text-blue-500 w-fit"><FaInstagram></FaInstagram>Instagram</a>
        </div>
    </footer>)
}

export default Footer