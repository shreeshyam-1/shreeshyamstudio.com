'use client'
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import { cropData } from "@/Data/croptop"; 
import Nav from "@/components/Nav";

export default function Page({params}) {

  return (


    <>
    <Nav/>
      <Heading heading={"Crop Top"} />
      <div className="w-[90%] m-auto flex gap-8 justify-center flex-wrap">
        {
         cropData!==null &&  Object.values(cropData).map((e,i)=>(<Card data={e} key={i} />))
          
        }
      </div>
    </>

  );
}
