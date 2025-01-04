'use client'
import Image from "next/image";
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import { items } from "@/Data/Card"; 
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import Nav from "@/components/Nav";

export default function Page({params}) {
  
  const { content, fetchData } = useAuth();
  const [heading, setHeading] = useState()

  useEffect(() => {
    fetchData(params.root.replace(/_/g, "/"))
    let parts = params.root.split('_');
    let newStr = `${capitalize(parts[1])} (${capitalize(parts[2])})`;
    
    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    setHeading(newStr)
    
  }, [])
  
  console.log(content)

  

  return (


    <>
    <Nav/>
      {/* <div className="flex h-[100dvh] relative ">
          <Image height={500} width={1000} src="/images/logo.png" className="w-[95%] md:w-[50%] m-auto " alt="Singhal Sanitary and Hardware store logo" />
          <Image height={500} width={1000} src="/images/side2.png" className="w-[100%] absolute md:relative top-0 left-0 opacity-25 -z-10 md:opacity-100 md:w-[50%] m-auto mt-10" alt="Singhal Sanitary and Hardware store logo" />
      </div> */}
      <Heading heading={heading} />
      <div className="w-[90%] m-auto flex gap-8 justify-center flex-wrap">
        {
         content!==null &&  Object.values(content).map((e,i)=>(<Card data={e} key={i} />))
          // items.map((e,i)=>(<Card data={e} Key={i} />))
        }
      </div>
    </>

  );
}
