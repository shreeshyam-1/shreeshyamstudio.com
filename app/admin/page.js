"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React from "react";


const page = () => {
  const { tapData,deleteTapData,fetchTaps } = useAuth();
  console.log(tapData);

  const deleteData = async(e)=>{
    if(!window.confirm("Are you sure you want to delete data?")){
      return;
    }

    try {
      await deleteTapData(e)

      fetchTaps();

      // setLoading(false)

      alert("Data delete successfully");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  }

  return (
    <>
    <div className="w-screen flex justify-end mt-4">
    <Link
  href={`/admin/details/`}
  className="font-medium bg-blue-200 rounded-md px-5 py-3  mx-10"
>
  Add New Item  
</Link>

    </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6 border-2">
        <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Categories
              </th>
              <th scope="col" className="px-6 py-3">
                Company
              </th>
             
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {
                  Object.values(tapData).map((e,i)=>(
                      <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {e.categories}
                  </th>
                  <td className="px-6 py-4">
                      {e.company}
                  </td>
                 
                  <td className="px-6 py-4">
                      {e.name}
                  </td>
                 
                  
                  <td className="px-6 py-4 text-right">
                  <Link
  href={`/admin/details/${e.uid}`}
  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
>
  Edit  
</Link>
                  
                      
                  </td>
                  <td>
                  <button
  onClick={()=>deleteData(e.uid)}
  className="font-medium text-red-600 dark:text-red-500 hover:underline "
>
  Delete  
</button>
                  </td>
              </tr>
                  ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default page;
