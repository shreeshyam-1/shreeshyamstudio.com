import Image from 'next/image'
import React from 'react'
import { FaLocationDot, FaMobileRetro, FaRegMessage } from "react-icons/fa6";

const page = () => {
    const cardData = [
        {
            icon: "<FaLocationDot />",
            heading: "Visit us",
            subHeading: "Visit our shop",
            buttonText: "Get direction ",
            buttonLink: "https://maps.app.goo.gl/1XwdE7gkBjn19tpm9",
        },
        {
            icon: "<FaMobileRetro />",
            heading: "Call Us",
            subHeading: "From 9:30am to 8:00pm",
            buttonText: "Call ",
            buttonLink: "https://callme.abhisheksinghal.in/9045865935",
        },
        {
            icon: "<FaRegMessage />",
            heading: "Chat to support",
            subHeading: "We'er here to help",
            buttonText: "Chat to support ",
            buttonLink: "https://wa.me/+919927245142 ",
        }
    ]


    return (
        <div className='relative m-auto w-[90%]'>
            <Image src="/images/contactBackground.webp" alt="" className='fixed top-0 left-0 w-screen h-screen opacity-10 -z-50' width={5000} height={500} />
            <div className="contactContent flex justify-center items-center flex-col pt-10">
                {/* <img src="images/logo.webp" className=" max-w-[400px] mx-10" alt="Singhal Sanitary and Hardware store logo" /> */}
                <h1 className='text-6xl font-medium tracking-wider mt-12'>Get in touch</h1>
                <p className='mt-4 mb-20 text-gray-400 text-center'>Ready to bring your dream bathroom to life? Reach out and let&apos;s make it happen together.</p>
                <div className=' flex gap-5 flex-wrap justify-center'>
                    {
                        cardData.map((e, i) => (
                            <Card data={e} key={i} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default page

export const Card = ({ data, key }) => {
    return (
        <div className='w-[100%] sm:w-96 border-2 rounded-lg p-8 bg-white flex flex-col gap-2 shadow-sm shrink-0' key={key}>
            <div className='bg-blue-100 aspect-square w-16 text-2xl rounded-md grid place-items-center text-blue-700'>
                {
                    data.icon == "<FaLocationDot />" ? <FaLocationDot /> :
                        data.icon == "<FaMobileRetro />" ? <FaMobileRetro /> :
                            data.icon == "<FaRegMessage />" ? <FaRegMessage /> :
                                ""
                }
            </div>
            <h4 className='text-lg  mt-12'>{data.heading}</h4>
            <h5 className='text-md text-gray-400 '>{data.subHeading}</h5>
            <a href={data.buttonLink} target='_blank'><button className=' w- border-2 py-2 px-6 rounded-md w-fit shadow-sm hover:bg-blue-700 hover:text-white'>{data.buttonText}</button></a>
        </div>
    )
}
