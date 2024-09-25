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
          className="w-full h-auto"
        />

        <div className="absolute inset-center  z-10 text-white bold text-6xl">
          <h1 className="text-center">
            Harvest Smarter, Store Better With Tipien Storage Solutions
          </h1>
        </div>
      </section>

      <section className="flex flex-row w-full py-16 justify-between items-center width-max">
        <div className="w-1/2">
          <h2>WHO WE ARE</h2>
          <p className="py-5 pr-10">
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
        </div>
        <div className="w-1/2 pl-5">
          <Image
            src="/hero.webp"
            height={900}
            width={1600}
            alt="Good looking agricultural products"
            className="rounded-xl"
          />
        </div>
      </section>

      <section className="w-full relative">
        <Image
          src="/bag.jpg"
          height={800}
          width={1600}
          alt="Good looking agricultural products"
          className="w-full h-auto"
        />

        <div className="absolute bottom-0 left-0 items-center flex flex-row w-screen h-full justify-around">
          <div className=" bg-white w-1/4 h-2/3 max-h-96 rounded-lg p-5 flex flex-col justify-center items-center">
            <h2 className="text-center font-normal text-xl">OUR MISSION</h2>
            <p className="text-center py-2 text-lg">
              With a mission to ensure farmers preserve their crops effectively,
              Tipien offers a wide range of durable and affordable storage bags
              designed to meet the specific needs of both small-scale and
              large-scale farmers.
            </p>
          </div>

          <div className=" bg-white w-1/4 h-2/3  max-h-96  rounded-lg p-5 flex flex-col justify-center items-center">
            <h2 className="text-center font-normal text-xl">OUR VISION</h2>
            <p className="text-center py-2 text-lg">
              With a mission to ensure farmers preserve their crops effectively,
              Tipien offers a wide range of durable and affordable storage bags
              designed to meet the specific needs of both small-scale and
              large-scale farmers.
            </p>
          </div>

          <div className=" bg-white w-1/4 h-2/3  max-h-96  rounded-lg p-5 flex flex-col justify-center items-center">
            <h2 className="text-center font-normal text-xl">OUR Values</h2>
            <p className="text-center py-2 text-lg">
              With a mission to ensure farmers preserve their crops effectively,
              Tipien offers a wide range of durable and affordable storage bags
              designed to meet the specific needs of both small-scale and
              large-scale farmers.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-16 relative">
        <h2 className="text-center pb-10">OUR GALLERY</h2>
        <div className="w-full h-full flex">
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

      <section className="flex flex-col justify-center items-center py-28">
        <div className="text-4xl text-center pb-5">
          Would you like to know more about us?
        </div>
        <div className="text-4xl text-center pb-5">Reach out to us today</div>
        <button className="text-xl text-center bg-green-700 text-white rounded-full px-5 py-3 hover:bg-white hover:text-green-700 border-2 border-green-700">
          CONTACT US
        </button>
      </section>
    </main>
  );
};

export default About;
