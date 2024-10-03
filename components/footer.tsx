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
        <div className="flex-col justify-around pb-3 mx-10 my-3 border-b sm:flex-row md:flex">
          <div className="pt-2">
            <Link
              href="/about"
              className="flex items-center justify-center  mx-8 rounded-sm hover:border-hidden"
            >
              <h1 className="flex items-center justify-center font-bold text-center text-white hover:text-green-700">
                ABOUT
              </h1>
            </Link>
            <Link
              href="/products"
              className="flex items-center justify-center  mx-8 rounded-sm hover:border-hidden"
            >
              <h1 className="justify-center font-bold text-center text-white flex-center hover:text-green-700">
                PRODUCTS
              </h1>
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center  mx-8 rounded-sm hover:border-hidden"
            >
              <h1 className="justify-center font-bold text-center text-white flex-center hover:text-green-700">
                CONTACT
              </h1>
            </Link>
            <Link
              href="/products"
              className="flex items-center justify-center  mx-8 rounded-sm hover:border-hidden"
            >
              <h1 className="justify-center font-bold text-center text-white flex-center hover:text-green-700">
                PRODUCTS
              </h1>
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center  mx-8 rounded-sm hover:border-hidden"
            >
              <h1 className="justify-center font-bold text-center text-white flex-center hover:text-green-700">
                CONTACT
              </h1>
            </Link>
            <Link
              href="/products"
              className="flex items-center justify-center  mx-8 rounded-sm hover:border-hidden"
            >
              <h1 className="justify-center font-bold text-center text-white flex-center hover:text-green-700">
                PRODUCTS
              </h1>
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center  mx-8 rounded-sm hover:border-hidden"
            >
              <h1 className="justify-center font-bold text-center text-white flex-center hover:text-green-700">
                CONTACT
              </h1>
            </Link>
          </div>
          <div className="pt-2">
            <h1 className="font-bold text-white">Location</h1>
            <h1 className="text-white">Nairobi Kenya</h1>
            <h1 className="text-white">Nairobi county</h1>
            <h1 className="font-bold text-white">Contact Us</h1>
            <p className="text-white">07000000</p>
            <p className="text-white">tipien@gmail.com</p>
          </div>
          <div className="pt-2">
            <h1 className="font-bold text-white">Socials</h1>
            <div className="flex mt-3 space-x-3">
              {/* <Link href="https://chat.whatsapp.com/HWLc2uRKPMiCxtMjZtIuiP">
                <Image 
                  src="/assets/photos/wsapp.jpg"
                  width={30}
                  height={30}
                  alt="Twitter"
                  className='rounded'
                />
              </Link>
           <Link href="https://instagram.com/helping.hearts.foundation.ke?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                  width={30}
                  height={30}
                  alt="instagram"
                />
            </Link>
            <Link href="www.twitter.com">
                <Image 
                  src="/assets/photos/x.png"
                  width={30}
                  height={30}
                  alt="Twitter"
                  className='rounded'
                />
              </Link> */}
            </div>
          </div>
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
