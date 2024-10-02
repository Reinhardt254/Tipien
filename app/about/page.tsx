import Button from "@/components/button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="w-full">
      <section className="relative w-full">
        <Image
          src="/hero.webp"
          height={1600}
          width={900}
          alt="Good looking agricultural products"
          className="w-full h-auto min-h-96"
        />

        <div className="absolute inset-center  z-10 text-white bold text-6xl max-sm:text-3xl max-sm:w-screen box-border">
          <h1 className="text-center">ABOUT US</h1>
        </div>
      </section>

      <section className="flex flex-row w-full py-16 justify-between items-center width-max max-sm:flex-col bg-white">
        <div className="w-1/2 max-sm:w-full max-sm:px-2">
          <h2>WHO WE ARE</h2>
          <p className="py-5 pr-10 max-sm:p-0 max-sm:pb-8">
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

          <Button value="LEARN MORE" />
        </div>
        <div className="w-1/2 pl-5 max-sm:w-full max-sm:p-0 max-sm:pt-10">
          <Image
            src="/hero.webp"
            height={900}
            width={1600}
            alt="Good looking agricultural products"
            className="rounded-xl max-sm:rounded-none"
          />
        </div>
      </section>

      <section className="w-full relative">
        <Image
          src="/bag.jpg"
          height={800}
          width={1600}
          alt="Good looking agricultural products"
          className="w-full h-auto max-sm:h-screen"
        />

        <div className="absolute inset-center-full h-full w-full flex justify-center items-center">
          <div className="h-full width-max flex flex-row max-sm:flex-col items-center justify-between max-sm:px-2 max-sm:py-5">
            <div className=" bg-white w-full h-2/3 max-h-96 rounded-lg p-5 m-2 flex flex-col justify-center items-center">
              <h2 className="text-center font-normal text-xl">OUR MISSION</h2>
              <p className="text-center py-2 text-lg text-slate-900">
                With a mission to ensure farmers preserve their crops
                effectively, Tipien offers a wide range of durable and
                affordable storage bags designed to meet the specific needs of
                both small-scale and large-scale farmers.
              </p>
            </div>

            <div className=" bg-white w-full h-2/3  max-h-96  rounded-lg p-5 m-2 flex flex-col justify-center items-center">
              <h2 className="text-center font-normal text-xl">OUR VISION</h2>
              <p className="text-center py-2 text-lg text-slate-900">
                With a mission to ensure farmers preserve their crops
                effectively, Tipien offers a wide range of durable and
                affordable storage bags designed to meet the specific needs of
                both small-scale and large-scale farmers.
              </p>
            </div>

            <div className=" bg-white w-full h-2/3  max-h-96  rounded-lg p-5 m-2 flex flex-col justify-center items-center">
              <h2 className="text-center font-normal text-xl">OUR Values</h2>
              <p className="text-center py-2 text-lg text-slate-900">
                With a mission to ensure farmers preserve their crops
                effectively, Tipien offers a wide range of durable and
                affordable storage bags designed to meet the specific needs of
                both small-scale and large-scale farmers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative h-full w-full flex flex-col justify-center items-center bg-green-700">
        <h2 className="text-center pb-10 text-white">OUR GALLERY</h2>
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
      </section>

      <section className="flex flex-col justify-center items-center py-28 max-sm:py-20 max-sm:px-4 bg-white">
        <div className="text-4xl max-sm:text-3xl text-center pb-5">
          Would you like to know more about us?
        </div>
        <div className="text-4xl max-sm:text-2xl  text-center pb-5">
          Reach out to us today
        </div>
        <Button value="CONTACT US" />
      </section>
    </main>
  );
};

export default About;
