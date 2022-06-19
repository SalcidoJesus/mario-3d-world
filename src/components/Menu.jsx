
import React, { useEffect } from 'react'
import imgLogo from "../img/logo.png";

const Menu = () => {

    const mostrarMenu = () => {
        const menu = document.querySelector( '.mobile-links' )
        menu.classList.toggle( 'hidden' )
    }

    return (
        <>
            <nav className="bg-gray-800 flex justify-between lg:justify-start items-center">
                <div className="logo p-2 w-1/6">
                    <img src={ imgLogo } width="100" alt="mario world logo"/>
                </div>

                {/* menú principal dn pantallas grandes */}
                <div className="links lg:block hidden w-1/6 md:w-4/6">
                    <ul className="menu flex items-center justify-center gap-5">
                        <li><a href="#" className="link">Home</a></li>
                        <li><a href="#" className="link">Play Together</a></li>
                        <li><a href="#" className="link">Explore</a></li>
                        <li><a href="#" className="border-4 border-yellow-400 text-white font-bold p-2 rounded-full hover:bg-white hover:text-black transition duration-300">Bowser Fury</a></li>
                        <li><a href="#" className="rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:text-black hover:bg-white transition duration-300">Buy Now</a></li>
                    </ul>
                </div>


                {/* menu móvil */}
                <div className="block lg:hidden w-1/6 lg:w-4/6">
                    <a href="#" className="link" id="mobile-menu" onClick={ mostrarMenu }>Menú</a>
                    <ul className="mobile-links hidden w-full absolute z-50 left-0 text-center bg-gray-800">
                        <li><a href="#" className="link">Home</a></li>
                        <li><a href="#" className="link">Play Together</a></li>
                        <li><a href="#" className="link">Explore</a></li>
                        <li><a href="#" className="my-4 inline-block border-4 border-yellow-400 text-white font-bold p-2 rounded-full hover:bg-white hover:text-black transition duration-300">Bowser Fury</a></li>
                        <li><a href="#" className="my-4 inline-block rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:text-black hover:bg-white transition duration-300">Buy Now</a></li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Menu

