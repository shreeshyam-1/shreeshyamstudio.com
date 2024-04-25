'use client'
import { useEffect, useState } from "react"
import { collection, getDocs } from "@firebase/firestore"
// import { db } from "../firebase"
import { getdata, getInputMasterTable } from "../data"
import Modal from "@/components/modal"


const eleminateHeadings = ["available"]

export default function Admin() {

    const [data, setData] = useState([])
    const [headingTable, setHeadingTable] = useState([])
    const [modal, setModal] = useState(false)
    const [saveData, setSaveData] = useState({})
    const [prefill, setPrefill] = useState({})
    const [inputs, setInputs] = useState({})
    const [modalTitle, setModalTitle] = useState("")
    const [modalType, setModalType] = useState("")
    const [modalIcon, setModalIcon] = useState("")

    // const getdata = async(database) => {
    //     const citiesCol = collection(database, 'products');
    //     const citySnapshot = await getDocs(citiesCol);
    //     const cityList = citySnapshot.docs.map(doc => doc.data());
    //     console.log(cityList)
    // }

    const get = async () => {
        const data = await getdata()
        // console.log(data);
        setData(data)
        setHeadingTable(Object.keys(data[0]).filter(item => !eleminateHeadings.includes(item)))
    }

    const getInputs = async () => {
        const data = await getInputMasterTable()
        console.log(data);
    }
    useEffect(() => {
        get()
        getInputs()
    }, [])

    const handleEditButton = () => {
        setModal(true)
    }

    const handleClose = () => {
        setModal(false)
    }

    const handleAvailableButton = (e) => {
        setData(data.map((item, index) => {
            if (index === parseInt(e.target.name)) {
                item["available"] = !item["available"]
            }
            return item
        }))
    }

    const handleCreateNewButton = () => {
        setModal(true)
    }

    return (
        <>
            <div className="container">
                <div className="w-full flex justify-between p-5 px-6">
                    <div className=" text-blue-100 text-3xl font-bold">Home</div>
                    <div>
                        <button onClick={handleCreateNewButton} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create New</button>
                    </div>
                </div>
                <div className=" w-[95vw] mx-auto justify-center flex">
                    <div className="relative w-full overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-600 dark:text-gray-100">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
                                <tr>
                                    <th scope="col" className="px-6 py-3">S No.</th>
                                    {
                                        headingTable.map((head, index) =>
                                            <th key={index} scope="col" className="px-6 py-3">
                                                {head}
                                            </th>
                                        )
                                    }
                                    <th scope="col" className="px-6 py-3">Action</th>
                                    <th scope="col" className="px-6 py-3">available</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, index) =>
                                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4">{index + 1}.</th>
                                            {
                                                headingTable.map((value, index) =>
                                                    <td key={index} className="px-6 py-4">
                                                        {item[value]}
                                                    </td>
                                                )
                                            }
                                            <td className="px-6 py-4">
                                                <button onClick={handleEditButton} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button onClick={handleAvailableButton} name={index} className={`${item["available"] ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 hover:bg-red-700'} text-white font-bold py-2 px-4 rounded`}>{item["available"] ? 'Activate' : 'Deactivate'}</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
            {
                modal &&
                <>
                    <Modal
                        title="Create New Product"
                        handleClose={handleClose}
                        setSaveData={setSaveData}
                        modalType={'ajksdakjd'}
                        prefill={{
                            Name: "",
                            Price: 66,
                            Category: "PC",
                            Description: ""
                        }}
                        inputs={
                            {
                                text: [
                                    {
                                        title: "Name",
                                        value: ""
                                    },
                                    {
                                        title: "Price",
                                        value: ""
                                    },
                                    {
                                        title: "Category",
                                        value: ""
                                    },
                                    {
                                        title: "Description",
                                        value: ""
                                    }
                                ],
                                number: [
                                    {
                                        title: "Price",
                                        value: ""
                                    }
                                ],
                                select: [
                                    {
                                        title: "Category",
                                        options: [
                                            {
                                                value: "TV",
                                                text: "TV/Monitors"
                                            },
                                            {
                                                value: "PC",
                                                text: "PC"
                                            },
                                            {
                                                value: "GA",
                                                text: "Gaming/Console"
                                            },
                                            {
                                                value: "PH",
                                                text: "Phones"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    />
                </>
            }
        </>
    )
}