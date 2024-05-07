'use client'
import Image from "next/image";
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import { items } from "@/Data/Card"; 
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  
  const { tapData } = useAuth();
  console.log()

  

  return (


    <>
      <Image height={500} width={1000} src="/images/logo.png" className="w-[95%] md:w-[80%] m-auto mt-10" alt="Singhal Sanitary and Hardware store logo" />
      <Heading heading="Trending Products" />
      <div className="w-[90%] m-auto flex gap-8 justify-center flex-wrap">
        {
          // Object.values(tapData).map((e,i)=>(<Card data={e} key={i} />))
          items.map((e,i)=>(<Card data={e} key={i} />))
        }
      </div>
    </>

  );
}
