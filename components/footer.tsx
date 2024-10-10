import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <main className="min-w-full relative z-20">
      <div className="footer-layout-divider z-10">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="pt-10 pb-10 bg-black w-full z-10">

        <div className="flex flex-col justify-around pb-10 mx-10 border-b sm:flex-row md:flex">
          <section className="flex flex-col max-sm:w-full max-sm:justify-center max-sm:items-center">
            <div className="text-white">Logo Image</div>
          </section>

          <section className="flex flex-col max-sm:w-full max-sm:justify-center max-sm:items-center max-sm: py-5">
          <Link
              href="/"
              className="mx-8 rounded-sm font-medium pb-3 text-white hover:text-green-700"
            >
                Home
            </Link>
            <Link
              href="/about"
              className="mx-8 rounded-sm font-medium pb-3 text-white hover:text-green-700"
            >
                About
            </Link>
            <Link
              href="/products"
              className="mx-8 rounded-sm font-medium pb-3 text-white hover:text-green-700"
            >
                Products
            </Link>
            <Link
              href="/contact"
              className="mx-8 rounded-sm font-medium pb-3 text-white hover:text-green-700"
            >
                Contact
            </Link>
          </section>

          <section className="h-full flex flex-col justify-start items-start text-white max-sm:w-full max-sm:justify-center max-sm:items-center">
            <h3 className="pb-1">Eldoret Kenya</h3>
            <h3 className="pb-1">Uasingishu county</h3>
            <h3 className="pb-1">Tipien Company Limited</h3>
            <h3 className="pb-1">07000000</h3>
            <h3 className="pb-1">tipien@gmail.com</h3>
          </section>
        </div>

        {/* <div className="flex items-center justify-center pb-4 ">
        <h1 className="text-xs text-white ">Made by Reinhardt Lagat</h1>
        <h1 className="ml-5 text-xs text-white">Ⓒ2024</h1>
        <h1 className="ml-5 text-xs text-white">Twitter @_chirchirkip</h1>
      </div> */}
      </div>
    </main>
  );
};

export default Footer;
