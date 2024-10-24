"use client";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  return (
    <main className="flex flex-row justify-between items-cente w-full bg-white lg:px-32 md:px-10 md:py-2 relative">
      <Link
        className="flex justify-center items-center pl-5 text-lg font-bold text-gray-950 w-auto"
        href="/"
      >
        <div className="h-auto w-full flex justify-center items-center text-xl">
          <Image
            src="/tp.png"
            alt="logo"
            width={1600}
            height={800}
            className="h-20 w-full max-sm:h-16"
          />
        </div>
      </Link>

      <section className="absolute pt-3 right-3 md:hidden">
        <div onClick={() => setToggleDropDown((prev) => !prev)}>
          <Bars3Icon className="w-8 h-8 text-bLack" />
        </div>
      </section>

      {/* ================Large devices================ */}
      <section className="flex flex-row items-center justify-center px-3 max-sm:hidden max-md:hidden w-auto">
        <Link
          href="/about"
          className="flex items-center justify-center  mx-8 rounded-sm hover:border-hidden"
        >
          <h1 className="flex items-center justify-center font-bold text-center text-black hover:text-green-700">
            ABOUT
          </h1>
        </Link>
        <Link
          href="/products"
          className="flex items-center justify-center  mx-8 rounded-sm hover:border-hidden"
        >
          <h1 className="justify-center font-bold text-center text-black flex-center hover:text-green-700">
            PRODUCTS
          </h1>
        </Link>
        <Link
          href="/contact"
          className="flex items-center justify-center  mx-8 rounded-sm hover:border-hidden"
        >
          <h1 className="justify-center font-bold text-center text-black flex-center hover:text-green-700">
            CONTACT
          </h1>
        </Link>
      </section>

      {/* ======================TOGGLE NAVBAR========================== */}
      {toggleDropDown && (
        <section className="fixed flex top-0 left-0 bottom-0 w-screen h-screen z-50">
          <div className="flex flex-row h-screen w-screen">
            <div className="flex-col w-full h-full bg-white bg-opacity-100">
              <div className="absolute top-0 right-0 pt-1 pr-6">
                <div onClick={() => setToggleDropDown((prev) => !prev)}>
                  <XMarkIcon className="w-8 h-8 text-black hover:text-slate-900" />
                </div>
              </div>
              <div className="flex flex-col items-center w-full h-full justify-">
                <div className="p-3 mt-20 font-bold text-start">
                  <Link
                    href="/"
                    className="text-lg text-slate-900 hover:text-green-700"
                    onClick={() => setToggleDropDown(false)}
                  >
                    Home
                  </Link>
                </div>
                <div className="p-3 mt-0 font-bold text-start">
                  <Link
                    href="/about"
                    className="text-lg text-slate-900 hover:text-green-700"
                    onClick={() => setToggleDropDown(false)}
                  >
                    About
                  </Link>
                </div>
                <div className="p-3 font-bold text-start">
                  <Link
                    href="/products"
                    className="text-lg text-slate-900 hover:text-green-700"
                    onClick={() => setToggleDropDown(false)}
                  >
                    Products
                  </Link>
                </div>
                <div className="p-3 font-bold text-start">
                  <Link
                    href="/contact"
                    className="text-lg text-slate-900 hover:text-green-700"
                    onClick={() => setToggleDropDown(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Header;
