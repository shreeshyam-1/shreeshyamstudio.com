'use client'
import Image from "next/image";
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import { items } from "@/Data/Card"; 
import { useAuth } from "@/context/AuthContext";

export default function Page() {
  
  const { tapData } = useAuth();
  console.log(tapData)

  

  return (


    <>
      <div className="flex h-[100dvh] relative ">
          <Image height={500} width={1000} src="/images/logo.png" className="w-[95%] md:w-[50%] m-auto " alt="Singhal Sanitary and Hardware store logo" />
          <Image height={500} width={1000} src="/images/side2.png" className="w-[100%] absolute md:relative top-0 left-0 opacity-25 -z-10 md:opacity-100 md:w-[50%] m-auto mt-10" alt="Singhal Sanitary and Hardware store logo" />
      </div>
      <Heading heading="Trending Products" />
      <div className="w-[90%] m-auto flex gap-8 justify-center flex-wrap">
        {
          Object.values(tapData).map((e,i)=>(<Card data={e} key={i} />))
          // items.map((e,i)=>(<Card data={e} Key={i} />))
        }
      </div>
    </>

  );
}
