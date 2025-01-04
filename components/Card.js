import Image from "next/image";
import React from "react";

const Card = ({ data, Key }) => {
  return (
    <div
      key={Key}
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
    >
      <Image
        height={100}
        width={300}
        className="p-8 rounded-lg w-full"
        src={`/images/items/${data.path}${data.image}`}
        // src="/images/items/gown/mod2.jpeg"
        alt={data.heading}
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {data.heading}
        </h5>
        <div className="flex justify-between font-semibold text-gray-600 mt-2">
          <div>{data.categories}</div>
          <div>{data.company}</div>
        </div>
        {data.price && (
          <div className="flex flex-col  text-black my-2 ">
            <div className="  font-bold text-2xl ">₹{data.price}</div>
            {data.discount && (
              <span className="text-xl font-semibold text-red-600">
                (up to {data.discount}% discount in-store )
              </span>
            )}
          </div>
        )}
        <div className="flex items-center gap-5 mt-3">
          {/* <span className="text-3xl font-bold text-gray-900 dark:text-white">₹99</span> */}
          <a
            href="https://maps.app.goo.gl/Ks15KiUBGbQxVuJE6"
            target="_blank"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy Now
          </a>
          {/* <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
