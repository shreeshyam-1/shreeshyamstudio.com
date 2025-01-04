'use client'
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import { indoData } from "@/Data/indowestern"; 
import Nav from "@/components/Nav";

export default function Page({params}) {

  return (


    <>
    <Nav/>
      <Heading heading={"Indo Western"} />
      <div className="w-[90%] m-auto flex gap-8 justify-center flex-wrap">
        {
         indoData!==null &&  Object.values(indoData).map((e,i)=>(<Card data={e} key={i} />))
          
        }
      </div>
    </>

  );
}
