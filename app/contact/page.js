"use client"
import Nav from '@/components/Nav';
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image'
import React from 'react'
import { FaLocationDot, FaMobileRetro, FaRegMessage } from "react-icons/fa6";

const page = () => {
    const { tapData, childDisplay } = useAuth()
    console.log(tapData, childDisplay)

    const cardData = [
        {
            icon: "<FaLocationDot />",
            heading: "Visit us",
            subHeading: "Visit our shop",
            buttonText: "Get direction ",
            buttonLink: "https://www.google.com/maps/place/28%C2%B039'36.0%22N+77%C2%B016'02.1%22E/@28.6599892,77.2646684,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.6599892!4d77.2672433?hl=en&entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D",
        },
        {
            icon: "<FaMobileRetro />",
            heading: "Call Us",
            subHeading: "From 10:00am to 7:00pm",
            buttonText: "Call ",
            buttonLink: "https://callme.abhisheksinghal.in/8802035717",
        },
        {
            icon: "<FaRegMessage />",
            heading: "Chat to support",
            subHeading: "We'er here to help",
            buttonText: "Chat to support ",
            buttonLink: "https://wa.me/+918802035717 ",
        }
    ]


    return (
        <>
            <Nav />
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

                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3500.9906041041068!2d77.26724999999999!3d28.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM5JzM2LjAiTiA3N8KwMTYnMDIuMSJF!5e0!3m2!1sen!2sin!4v1736436708390!5m2!1sen!2sin" width="600" height="450" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full my-8 shadow-xl border-2 rounded-md '></iframe>
            </div>
        </>
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
