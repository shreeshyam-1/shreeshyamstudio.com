import Image from 'next/image'
import React from 'react'

const Card = ({data,key}) => {
    return (


        <div key={key} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Image height={100} width={300} className="p-8 rounded-t-lg w-full" src={`/images/items/tap/${data.image}`} alt="product image" />  
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                </a>
                <div className='flex text-black my-2 gap-2 items-center'>
                    <div className='  font-bold text-2xl '>
                        ₹500
                    </div>
                    <span className='text-md font-semibold text-blue-500'>
                        (up to 50% discount in-store )
                    </span>
                </div>
                <div className="flex items-center gap-5">
                    {/* <span className="text-3xl font-bold text-gray-900 dark:text-white">₹99</span> */}
                    <a href="https://maps.app.goo.gl/Ks15KiUBGbQxVuJE6" target='_blank' className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
                    {/* <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a> */}
                </div>
            </div>
        </div>

    )
}

export default Card