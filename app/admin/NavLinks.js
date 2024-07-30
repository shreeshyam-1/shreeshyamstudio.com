
"use client"
import React, { useState } from "react";
import Link from 'next/link'
import { links } from "./Mylinks";
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link,i4) => (
        <div key={i4}>
          <div className=" pl-2 pt-2 md:p-0 md:cursor-pointer group">
            <h1
              className=" flex items-center group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <IoIosArrowDown className=" hidden md:block inline-flex text-blue-800 " />
              <span className="text-xl md:hidden  inline">
                {
                    heading === link.name ? <IoIosArrowUp/> : <IoIosArrowDown/>
                  }
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute right-0 top-10 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                   
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10 ">
                    {link.sublinks.map((mysublinks,i) => (
                      <div key={i}>
                        <h2 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h2>
                        {mysublinks.sublink.map((slink, i1) => (
                          <li key={i1} className="text-sm text-gray-600 my-2.5">
                            <Link
                              href={`/admin/${slink.link}`}
                              className="text-blue-600 hover:text-black"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks,i2) => (
              <div key={i2}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink,i3) => (
                      <li className="py-3 pl-14" key={i3}>
                        <Link href={`/admin/${slink.link}`}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
