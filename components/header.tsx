"use client";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Header = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  return (
    <main className="flex flex-row justify-between items-center w-full bg-white md:px-40 md:py-2 relative">
      <Link
        className="flex justify-center items-center pl-5 text-lg font-bold text-gray-950"
        href="/"
      >
        <div className="h-16 flex justify-center items-center text-xl">
          {/* <Image
            src="/assets/photos/logo.jpg"
            alt="logo"
            width={60}
            height={60}
          /> */}
          Tipien
        </div>
      </Link>

      <section className="absolute pt-3 right-3 md:hidden">
        <div onClick={() => setToggleDropDown((prev) => !prev)}>
          <Bars3Icon className="w-8 h-8 text-bLack" />
        </div>
      </section>

      {/* ================Large devices================ */}
      <section className="flex flex-row items-center justify-center px-3 max-sm:hidden max-md:hidden">
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
            <div
              className="w-1/2 h-screen bg-black opacity-50"
              onClick={() => setToggleDropDown((prev) => !prev)}
            />
            <div className="flex-col w-2/3 h-full bg-white bg-opacity-100">
              <div className="absolute top-0 right-0 pt-1 pr-6">
                <div onClick={() => setToggleDropDown((prev) => !prev)}>
                  <XMarkIcon className="w-8 h-8 text-black hover:text-slate-900" />
                </div>
              </div>
              <div className="flex flex-col items-center w-full h-full justify-">
                <div className="p-3 mt-20 font-bold text-start">
                  <Link
                    href="/"
                    className="text-lg text-slate-900 hover:text-red-600"
                    onClick={() => setToggleDropDown(false)}
                  >
                    Home
                  </Link>
                </div>
                <div className="p-3 mt-0 font-bold text-start">
                  <Link
                    href="/about"
                    className="text-lg text-slate-900 hover:text-red-600"
                    onClick={() => setToggleDropDown(false)}
                  >
                    About
                  </Link>
                </div>
                <div className="p-3 font-bold text-start">
                  <Link
                    href="/products"
                    className="text-lg text-slate-900 hover:text-red-600"
                    onClick={() => setToggleDropDown(false)}
                  >
                    Products
                  </Link>
                </div>
                <div className="p-3 font-bold text-start">
                  <Link
                    href="/contact"
                    className="text-lg text-slate-900 hover:text-red-600"
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
