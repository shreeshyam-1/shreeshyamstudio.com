"use client";
import Image from "next/image";
import Nav from "@/components/Nav";
import Link from "next/link";

export default function Page() {
  // const { tapData } = useAuth();
  // console.log(tapData);

  return (
    <>
      <Nav />
      <div className="flex h-[100dvh] relative ">
        <Image
          height={500}
          width={1000}
          src="/images/logo.png"
          className="w-[95%] md:w-[35%] m-auto "
          alt="Singhal Sanitary and Hardware store logo"
        />
        <Image
          height={500}
          width={1000}
          src="/images/costume.jpeg"
          className="w-[100%] absolute md:relative top-0 left-0 opacity-[.10] -z-10 md:opacity-100 md:w-[30%] m-auto mt-10"
          alt="Singhal Sanitary and Hardware store logo"
        />
      </div>
      <div className="space-y-6">
        <div className="w-[100%] flex justify-between items-center px-12 flex-col md:flex-row">
          <Image
            height={500}
            width={500}
            src="/images/mod1.jpeg"
            className=" w-[100%] md:w-[50%]  m-10 rounded-md"
            alt="Singhal Sanitary and Hardware store logo"
          />
          <div>
            <h2 className="text-4xl font-medium text-col1 uppercase">
              Gown
            </h2>
            <div className=" my-8 space-y-3 ">
              <h3 className="text-2xl text-col2">Explore Our Collection</h3>
              <p>
                Discover a stunning range of gowns at Shree Shyam Studio, designed to captivate and elevate your fashion offerings. From elegant evening wear to luxurious party gowns, our collection blends traditional craftsmanship with modern aesthetics. Each gown is tailored to perfection using premium-quality fabrics, intricate embroidery, and stylish embellishments.

              </p>
            </div>
            <Link href="/gown"> <button className="w-full p-5 text-left font-semibold text-white rounded-sm bg-col4 hover:-translate-x-1 hover:-translate-y-1 transition-all">
              EXPLORE!
            </button></Link>
          </div>
        </div>
        <div className="w-[100%] flex justify-between items-center px-12 flex-col-reverse md:flex-row">
          <div>
            <h2 className="text-4xl font-medium text-col1 uppercase">Crop Top</h2>
            <div className=" my-8 space-y-3 ">
              <h3 className="text-2xl text-col2 ">
                Trendy Wholesale Crop Tops for Every Occasion
              </h3>
              <p>
                Stay ahead in the fashion game with Shree Shyam Studio's exclusive range of stylish crop tops. Designed to cater to the modern woman, our collection features a mix of chic, versatile, and contemporary styles that perfectly blend comfort and elegance.
              </p>
            </div>
            <Link href="/croptop"> <button className="w-full p-5 text-left font-semibold text-white rounded-sm bg-col4 hover:translate-x-1 hover:-translate-y-1 transition-all">
              EXPLORE!
            </button></Link>
          </div>
          <Image
            height={500}
            width={500}
            src="/images/mod2.jpeg"
            className=" w-[100%] md:w-[50%]  m-10 rounded-md"
            alt="Singhal Sanitary and Hardware store logo"
          />
        </div>
        <div className="w-[100%] flex justify-between items-center px-12 flex-col md:flex-row">
          <Image
            height={500}
            width={500}
            src="/images/mod3.jpeg"
            className=" w-[100%] md:w-[50%]  m-10 rounded-md"
            alt="Singhal Sanitary and Hardware store logo"
          />
          <div>
            <h2 className="text-4xl font-medium text-col1 uppercase">
              Indo Western
            </h2>
            <div className=" my-8 space-y-3 ">
              <h3 className="text-2xl text-col2 ">
                Grace Meets Glamour: Wholesale Indo-Western Outfits
              </h3>

              <p className=" my-8">
                Embrace the perfect fusion of tradition and modernity with Shree Shyam Studio's exclusive Indo-Western collection. Our designs bring together the richness of Indian heritage with contemporary silhouettes, creating outfits that are stylish, versatile, and perfect for every occasion
              </p>
            </div>
            <Link href="/indowestern"> <button className="w-full p-5 text-left font-semibold text-white rounded-sm bg-col4 hover:-translate-x-1 hover:-translate-y-1 transition-all">
              EXPLORE!
            </button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
