import Image from "next/image";
import React from "react";
import Button from "./button";

const HomeLayout = () => {
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
          <h1 className="text-center">
            Harvest Smarter, Store Better With Tipien Storage Solutions
          </h1>
        </div>
      </section>

      <section className="flex flex-row w-full py-16 justify-between items-center width-max max-sm:flex-col">
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
          className="w-full h-auto max-sm:min-h-96"
        />
        <div className="absolute bottom-24 right-24 max-sm:bottom-5 max-sm:right-5 bg-white w-1/3 h-1/2 max-sm:w-auto max-sm:h-5/6 max-sm:left-5 rounded-lg p-5 flex flex-col justify-center items-center">
          <h2 className="text-center font-normal text-xl">OUR PRODUCTS CATALOGUE</h2>
          <p className="text-center py-2 text-lg">
            With a mission to ensure farmers preserve their crops effectively,
            Tipien offers a wide range of durable and affordable storage bags
            designed to meet the specific needs of both small-scale and
            large-scale farmers.
          </p>

          <Button value="LEARN MORE" />
        </div>
      </section>

      <section className="pb-28 pt-16 max-sm:pb-10 max-sm:pt-8 w-full  flex flex-col justify-center items-center bg-green-700 max-sm:px-2">
        <div>
          <h2 className="text-center pb-10 max-sm:pb-5 text-white">WHY CHOOSE US</h2>
        </div>
        <div className="grid grid-cols-4 width-max mr-2 max-md:grid-cols-1">
          <div className="bg-white p-5 rounded-xl flex flex-col justify-start items-center max-sm:m-0">
            <Image
              src="/storage.png"
              height={100}
              width={100}
              alt="storage"
              className="w-20 h-auto"
            />
            <h4 className="text-green-700 text-center pt-2">
              Expertise in Agricultural Storage
            </h4>
            <p className="text-slate-700 text-lg text-center pt-2">
              With years of experience in the agricultural storage industry, we
              understand the unique challenges farmers face and offer practical
              solutions tailored to their needs.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl mr-2 ml-2 flex flex-col justify-start items-center max-sm:m-0 max-sm:mt-2">
            <Image
              src="/price.png"
              height={100}
              width={100}
              alt="Pricing"
              className="w-20 h-auto"
            />
            <h4 className="text-green-700 text-center pt-2">
              Affordable Pricing
            </h4>
            <p className="text-slate-700 text-lg text-center pt-2">
              We are committed to offering competitive prices, making our
              storage solutions accessible to farmers of all scales.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl mr-2 ml-2 max-sm:m-0 flex flex-col justify-start items-center max-sm:mt-2">
            <Image
              src="/location.png"
              height={100}
              width={100}
              alt="Location"
              className="w-20 h-auto"
            />
            <h4 className="text-green-700 text-center pt-2">
              Nationwide Reach
            </h4>
            <p className="text-slate-700 text-lg text-center pt-2">
              Our efficient online sales and distribution system ensures that
              farmers in remote areas can access our products conveniently.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl ml-2 max-sm:m-0 flex flex-col justify-start items-center max-sm:mt-2">
            <Image
              src="/customer.png"
              height={100}
              width={100}
              alt="customer support"
              className="w-20 h-auto"
            />
            <h4 className="text-green-700 text-center pt-2">
              Customer Support
            </h4>
            <p className="text-slate-700 text-lg text-center pt-2">
              Tipien is dedicated to providing excellent customer service. Our
              team is always available to offer guidance and assistance
              regarding the best storage solutions for various crops.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center py-28 max-sm:py-20 max-sm:px-4">
        <div className="text-4xl max-sm:text-3xl text-center pb-5">
          Would you like to know more about us?
        </div>
        <div className="text-4xl max-sm:text-2xl  text-center pb-5">Reach out to us today</div>
          <Button value="CONTACT US" />
      </section>
    </main>
  );
};

export default HomeLayout;
