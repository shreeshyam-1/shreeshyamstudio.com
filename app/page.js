"use client";
import Image from "next/image";
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import { items } from "@/Data/Card";
import { useAuth } from "@/context/AuthContext";
import Nav from "@/components/Nav";

export default function Page() {
  const { tapData } = useAuth();
  console.log(tapData);

  return (
    <>
      <Nav />
      <div className="flex h-[100dvh] relative overflow-hidden">
        <Image
          height={500}
          width={1000}
          src="/images/logo.png"
          className="w-[95%] md:w-[50%] m-auto "
          alt="Singhal Sanitary and Hardware store logo"
        />
        <Image
          height={500}
          width={1000}
          src="/images/side01.png"
          className="w-[100%] absolute md:relative top-0 left-0 opacity-25 -z-10 md:opacity-100 md:w-[50%] m-auto mt-10"
          alt="Singhal Sanitary and Hardware store logo"
        />
      </div>
      <div className="space-y-6">
        <div className="w-[100%] flex justify-between items-center px-12 flex-col md:flex-row">
          <Image
            height={500}
            width={500}
            src="/images/sanitaryware.jpeg"
            className=" w-[100%] md:w-[50%]  m-10 rounded-md"
            alt="Singhal Sanitary and Hardware store logo"
          />
          <div>
            <h2 className="text-4xl font-medium text-col1 uppercase">
              Sanitaryware
            </h2>
            <div className=" my-8 space-y-3 ">
              <h3 className="text-2xl text-col2">Explore Our Collection</h3>
              <p>
              Our products strike the ideal balance between soft curves and geometric shapes, creating a unique and stylish look for your bathroom.
<br /><br />
As one of the leading bathroom fittings providers in India, Singhal Sanitary & Hardware Store is committed to offering world-class products that meet the highest standards of quality and design.
              </p>
            </div>
            <button className="w-full p-5 text-left font-semibold text-white rounded-sm bg-col4 hover:-translate-x-1 hover:-translate-y-1 transition-all">
              EXPLORE!
            </button>
          </div>
        </div>
        <div className="w-[100%] flex justify-between items-center px-12 flex-col-reverse md:flex-row">
          <div>
            <h2 className="text-4xl font-medium text-col1 uppercase">faucet</h2>
            <div className=" my-8 space-y-3 ">
              <h3 className="text-2xl text-col2 ">
                Innovative and Efficient
              </h3>
              <p>
              Our faucets blend artful lines and flowing forms to create
              efficient, water-saving solutions that complement all modern
              bathroom styles and sink configurations.
              </p>
            </div>
            <button className="w-full p-5 text-left font-semibold text-white rounded-sm bg-col4 hover:translate-x-1 hover:-translate-y-1 transition-all">
              EXPLORE!
            </button>
          </div>
          <Image
            height={500}
            width={500}
            src="/images/faucet.jpeg"
            className=" w-[100%] md:w-[50%]  m-10 rounded-md"
            alt="Singhal Sanitary and Hardware store logo"
          />
        </div>
        <div className="w-[100%] flex justify-between items-center px-12 flex-col md:flex-row">
          <Image
            height={500}
            width={500}
            src="/images/acessories.jpeg"
            className=" w-[100%] md:w-[50%]  m-10 rounded-md"
            alt="Singhal Sanitary and Hardware store logo"
          />
          <div>
            <h2 className="text-4xl font-medium text-col1 uppercase">
              accessories
            </h2>
            <div className=" my-8 space-y-3 ">
              <h3 className="text-2xl text-col2 ">
              Perfect Harmony of Design and Utility
              </h3>
              
            <p className=" my-8">
              Our accessories are meticulously crafted to blend artful lines and
              flowing forms, creating efficient and stylish solutions that suit
              all modern bathroom styles.
              <br />
              <br />
              Explore our shop collection today and transform your bathroom into
              a sanctuary of style and convenience.
            </p>
            </div>
            <button className="w-full p-5 text-left font-semibold text-white rounded-sm bg-col4 hover:-translate-x-1 hover:-translate-y-1 transition-all">
              EXPLORE!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
