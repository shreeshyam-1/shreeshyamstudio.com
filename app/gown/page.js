'use client'
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import { gownData } from "@/Data/gown"; 
import Nav from "@/components/Nav";

export default function Page({params}) {

  return (


    <>
    <Nav/>
      <Heading heading={"Gown"} />
      <div className="w-[90%] m-auto flex gap-8 justify-center flex-wrap">
        {
         gownData!==null &&  Object.values(gownData).map((e,i)=>(<Card data={e} key={i} />))
          
        }
      </div>
    </>

  );
}
