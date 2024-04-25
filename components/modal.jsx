"use client"

import { useEffect, useState } from "react";


export default function Modal({ title, inputs, prefill, handleClose, setSaveData, modalType, modalIcon }) {


    const [modalData, setModalData] = useState(prefill || {})
    const handleSaveButton = (e) => {
        e.preventDefault();
        console.log(modalData)
        setSaveData(modalData)
        handleClose()
    }

    useEffect(() => {
        setModalData(prefill)
    }, [prefill])

    const handleFormChange = (e) => {
        setModalData({
            ...modalData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <div id="crud-modal" tabIndex="-1" aria-hidden="true" className="  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-screen mx-auto flex md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="absolute inset-0 bg-black bg-opacity-50" data-modal-close=""></div>
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {title}
                            </h3>
                            <button onClick={handleClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4 grid-cols-4">
                                {
                                    Object.keys(inputs).map((key, index) =>
                                        // console.log(inputs[key])
                                        inputs[key].map((input, index) => {
                                            console.log(input)
                                            return (
                                                key === 'select' ?
                                                    <>
                                                        <div className="col-span-2">
                                                            <label htmlFor={input.title} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{input.title}</label>
                                                            <select id={input.title} defaultValue={modalData[input.title]} name={input.title} onChange={handleFormChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
                                                                <option value="" disabled>{input.placeholder || "Select any option"}</option>
                                                                {
                                                                    input.options.map((option, index) => {
                                                                        return (
                                                                            <option key={index} value={option.value}>{option.text}</option>
                                                                        )
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                    </>
                                                    :
                                                    <>
                                                        <div className="col-span-2">
                                                            <label htmlFor={input.title} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{input.title}</label>
                                                            <input type={key} name={input.title} onChange={handleFormChange} value={modalData[input.title]} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                                                            {/* <div>{modalData[]}</div> */}
                                                        </div>
                                                    </>
                                            )
                                        })
                                    )
                                }
                            </div>
                            <button onClick={handleSaveButton} className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                {
                                    modalType &&
                                    (
                                        modalType === 'add'
                                            ?
                                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                            :
                                            modalType === 'edit' ?
                                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                                </svg>
                                                :
                                                modalIcon &&
                                                (
                                                    <div dangerouslySetInnerHTML={{ __html: modalIcon }}></div>
                                                )
                                    )
                                }
                                Add new product
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}