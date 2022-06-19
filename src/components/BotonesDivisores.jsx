
import React from 'react'

const BotonesDivisores = () => {
    return (
        <>
            <section>

                <div className="bg-wave-pattern h-6 bg-repeat-x relative -top-2"></div>
                <div className="bg-wave-pattern-dots text-center p-4 flex md:flex-row flex-col gap-3 justify-center">
                    <a href="#" className="inline-block py-3 px-16 bg-black text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-300">Buy Now</a>
                    <a href="#" className="inline-block py-3 px-16 bg-red-500 text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-300">Watch the Trailer</a>
                </div>

                <div className="bg-wave-pattern bg-repeat-x h-6 relative top-2"></div>

            </section>
        </>
    )
}

export default BotonesDivisores

