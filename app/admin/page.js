"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";


const page = () => {  

  return (
    <>
    <Nav/>
    <div className="flex h-[100dvh] relative ">
          <Image height={500} width={1000} src="/images/logo.png" className="w-[95%] md:w-[50%] m-auto " alt="Singhal Sanitary and Hardware store logo" />
          <Image height={500} width={1000} src="/images/side2.png" className="w-[100%] absolute md:relative top-0 left-0 opacity-25 -z-10 md:opacity-100 md:w-[50%] m-auto mt-10" alt="Singhal Sanitary and Hardware store logo" />
      </div>
    
    </>
  );
};

export default page;
