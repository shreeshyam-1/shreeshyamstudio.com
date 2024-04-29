'use client'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Image from "next/image";
import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import Heading from "@/components/Heading";

export default function Home() {


  const [data, setData] = useState([])
  const [loader, setLoader] = useState(true)


  // const firebaseConfig = {
  //   apiKey: "AIzaSyDS5C46LTPQmvxRkdpI-w7aWrDX7PuTQSs",
  //   authDomain: "abhisheksinghal-5f554.firebaseapp.com",
  //   projectId: "abhisheksinghal-5f554",
  //   storageBucket: "abhisheksinghal-5f554.appspot.com",
  //   messagingSenderId: "117685329931",
  //   appId: "1:117685329931:web:2146c80509eacc307c670e",
  //   measurementId: "G-SD2XRGNWD7"
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // // const analytics = getAnalytics(app);
  // const db = getFirestore(app);
  // const [data, setData] = useState([])

  // const getdata = async () => {
  //   const citiesCol = collection(db, 'products');
  //   const citySnapshot = await getDocs(citiesCol);
  //   const cityList = citySnapshot.docs.map(doc => doc.data());
  //   console.log(cityList)
  //   setData(cityList);
  //   // return cityList;
  // }
  // useEffect(() => {
  //   getdata()
  // },[])

  // return (
  //   <>
  //     <div>
  //       <table>
  //         <thead>
  //           <tr>
  //             <th>ID</th>
  //             <th>Name</th>
  //             <th>Price</th>
  //             <th>Action</th>
  //             <th>Discount</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {data.map((item) => (
  //             <tr key={item.id}>
  //               <td>{item.id}</td>
  //               <td>{item.name}</td>
  //               <td>{item.price}</td>
  //               <td>{item.action}</td>
  //               <td>{item.discount}</td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   </>
  // );

  return (


    <>
      <img src="images/logo.png" className="w-[95%] md:w-[80%] m-auto mt-10" alt="Singhal Sanitary and Hardware store logo" />
      <Heading heading="Trending Products" />
      <Card />
    </>

  );
}
