import Button from "@/components/button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="w-full">
      <section className="relative w-full">
        <Image
          src="/cobs.jpg"
          height={800}
          width={1600}
          alt="Good looking agricultural products"
          className="w-full h-auto hidden-sm darken"
        />

        <Image
          src="/cobsmob.jpg"
          height={800}
          width={800}
          alt="Good looking agricultural products"
          className="w-full h-auto hidden-lg darken"
        />

        <div className="absolute inset-center  z-10 text-white bold text-6xl max-sm:text-3xl max-sm:w-screen box-border">
          <h1 className="text-center drop-shadow-2xl">ABOUT</h1>
        </div>
        <div className="home-layout-divider">
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
      </section>

      <section className="flex flex-row w-full py-16 max-sm: pt-0 justify-between items-center width-max max-sm:flex-col">
        <div className="w-1/2 max-sm:w-full max-sm:px-2 md:px-5 ">
          <h2 className="max-sm:text-center">WHO WE ARE</h2>
          <p className="py-5 pr-10 max-sm:p-0 max-sm:pb-5 max-sm:pt-2 max-sm:text-center">
            Tipien Company Limited is a dynamic and innovative enterprise
            specializing in the sale and distribution of high-quality storage
            bags, primarily targeting farmers through its efficient online
            platform. The company aims to provide practical and sustainable
            storage solutions to enhance post-harvest management for
            agricultural produce. With a mission to ensure farmers preserve
            their crops effectively, Tipien offers a wide range of durable and
            affordable storage bags designed to meet the specific needs of both
            small-scale and large-scale farmers.
          </p>
          <div className="flex justify-start items-center max-sm:justify-center">
            <Button value="OUR PRODUCTS" params="/products" />
          </div>
        </div>
        <div className="w-1/2 pl-5 max-sm:w-full max-sm:p-0 max-sm:pt-10">
          <Image
            src="/gunia.png"
            height={900}
            width={900}
            alt="Good looking agricultural products"
            className="rounded-xl max-sm:rounded-none"
          />
        </div>
      </section>

      <section className="w-full relative min-h-[500px] py-20 bg-green-700 flex justify-center items-center">
        <div className="h-full width-max flex flex-row max-sm:flex-col items-center justify-center max-sm:px-2 max-sm:py-5">
          <div className=" bg-white w-1/3 h-2/3 max-sm:w-full md:min-h-[300px] rounded-lg p-5 max-sm:py-10 m-2 flex flex-col justify-center items-center">
            <h2 className="text-center font-normal text-xl">OUR MISSION</h2>
            <p className="text-center py-2 text-lg text-slate-900">
              To empower farmers by offering high quality storage bags that
              preserve the quality of harvested produce, reduce wastage, and
              enhance food security through accessible online distribution.
            </p>
          </div>

          <div className=" bg-white w-1/3 max-sm:w-full md:min-h-[300px] rounded-lg p-5 max-sm:py-10 m-2 flex flex-col justify-center items-center">
            <h2 className="text-center font-normal text-xl">OUR VISION</h2>
            <p className="text-center py-2 text-lg text-slate-900">
              To be the leading provider of innovative, sustainable and
              affordable storage solutions for farmers across the country,
              promoting better post-harvest management and minimizing food
              loses.
            </p>
          </div>

          {/* <div className=" bg-white w-full h-2/3 md:min-h-[300px]  rounded-lg p-5 max-sm:py-10 m-2 flex flex-col justify-center items-center">
            <h2 className="text-center font-normal text-xl">OUR VALUES</h2>
            <p className="text-center py-2 text-lg text-slate-900">
              With a mission to ensure farmers preserve their crops effectively,
              Tipien offers a wide range of durable and affordable storage bags
              designed to meet the specific needs of both small-scale and
              large-scale farmers.
            </p>
          </div> */}
        </div>
      </section>

      {/* <section className="py-16 relative h-full w-full flex flex-col justify-center items-center">
        <h2 className="text-center pb-10 text-green-700">OUR GALLERY</h2>
        <div className="w-full width-max h-full flex">
          <div className="flex flex-col w-2/3">
            <div className="flex flex-row">
              <Image
                src="/bag.jpg"
                height={800}
                width={1600}
                alt="Good looking agricultural products"
                className="w-1/2 h-auto"
              />
              <Image
                src="/bag.jpg"
                height={800}
                width={1600}
                alt="Good looking agricultural products"
                className="w-1/2 h-auto"
              />
            </div>
            <div>
              <Image
                src="/bag.jpg"
                height={800}
                width={1600}
                alt="Good looking agricultural products"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="w-1/3">
            <Image
              src="/bag.jpg"
              height={1600}
              width={800}
              alt="Good looking agricultural products"
              className="w-full h-full bg-green-700"
            />
          </div>
        </div>
      </section> */}

      <section className="flex flex-col justify-center items-center py-28 pb-40 max-sm:pt-28 max-sm:pb-40 max-sm:px-4 bg-white w-full">
        <div className="text-4xl max-sm:text-3xl text-center pb-5">
          Would you like to know more about us?
        </div>
        <div className="text-4xl max-sm:text-2xl  text-center pb-5">
          Reach out to us today
        </div>
        <Button value="CONTACT US" params="/contact" />
      </section>
    </main>
  );
};

export default About;
