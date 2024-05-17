"use client"
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image'
import React from 'react'
import { FaLocationDot, FaMobileRetro, FaRegMessage } from "react-icons/fa6";

const page = () => {
    const {tapData,childDisplay} = useAuth()
    console.log(tapData,childDisplay)

    const cardData = [
        {
            icon: "<FaLocationDot />",
            heading: "Visit us",
            subHeading: "Visit our shop",
            buttonText: "Get direction ",
            buttonLink: "https://maps.app.goo.gl/Ks15KiUBGbQxVuJE6",
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
                            <Card data={e} Key={i} />
                        ))
                    }

                </div>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.736577184495!2d77.68394867537343!3d29.024787575452823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c65fb29361b3d%3A0x365aa421d203d31!2sSinghal%20Sanitary%20and%20Hardware%20Store%20(Sanitary%20ware%20and%20pipe%20fittings)!5e0!3m2!1sen!2sin!4v1715943987367!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full my-8 shadow-xl border-2 rounded-md '></iframe>
        </div>
    )
}

export default page

export const Card = ({ data, Key }) => {
    return (
        <div className='w-[100%] sm:w-96 border-2 rounded-lg p-8 bg-white flex flex-col gap-2 shadow-sm shrink-0' key={Key}>
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
