import Image from "next/image";
import React from "react";

const HomeLayout = () => {
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
          <h1 className="text-center">Harvest Smarter, Store Better With Tipien Storage Solutions</h1>
        </div>
      </section>

      <section className="flex flex-row w-full py-16 justify-between items-center width-max">
        <div className="w-2/5">
          <h2>WHO WE ARE</h2>
          <p className="py-5">
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

          <button className="text-xl text-center bg-green-700 text-white rounded-full px-5 py-3 hover:bg-white hover:text-green-700 border-2 border-green-700">LEARN MORE</button>
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

      <section className="pb-28 pt-16 w-full bg-creame flex flex-col justify-center items-center">
        <div>
          <h2 className="text-center pb-10">WHY CHOOSE US</h2>
        </div>
        <div className="grid grid-cols-4 width-max mr-2">
          <div className="bg-green-700 p-5 rounded-xl ">
            <img />
            <h4 className="text-white text-center">Expertise in Agricultural Storage</h4>
            <p className="text-white text-lg text-center">
              With years of experience in the agricultural storage industry, we
              understand the unique challenges farmers face and offer practical
              solutions tailored to their needs.
            </p>
          </div>

          <div className="bg-green-700 p-5 rounded-xl mr-2 ml-2">
            <img />
            <h4 className="text-white text-center">Affordable Pricing</h4>
            <p className="text-white text-lg text-center">
              We are committed to offering competitive prices, making our
              storage solutions accessible to farmers of all scales.
            </p>
          </div>

          <div className="bg-green-700 p-5 rounded-xl mr-2 ml-2">
            <img />
            <h4 className="text-white text-center">Nationwide Reach</h4>
            <p className="text-white text-lg text-center">
              Our efficient online sales and distribution system ensures that
              farmers in remote areas can access our products conveniently.
            </p>
          </div>

          <div className="bg-green-700 p-5 rounded-xl ml-2">
            <img />
            <h4 className="text-white text-center">Customer Support</h4>
            <p className="text-white text-lg text-center">
              Tipien is dedicated to providing excellent customer service. Our
              team is always available to offer guidance and assistance
              regarding the best storage solutions for various crops.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center py-28">
        <div className="text-4xl text-center pb-5">Would you like to know more about us?</div>
        <div className="text-4xl text-center pb-5">Reach out to us today</div>
        <button className="text-xl text-center bg-green-700 text-white rounded-full px-5 py-3 hover:bg-white hover:text-green-700 border-2 border-green-700">CONTACT US</button>
      </section>
    </main>
  );
};

export default HomeLayout;
