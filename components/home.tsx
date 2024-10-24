import Image from "next/image";
import React from "react";
import Button from "./button";

const HomeLayout = () => {
  return (
    <main className="w-full">
      <section className="relative w-full">
        <Image
          src="/maizefield.jpg"
          height={800}
          width={1600}
          alt="Good looking agricultural products"
          className="w-full h-auto hidden-sm darken"
        />

        <Image
          src="/maizefieldmob.jpg"
          height={800}
          width={800}
          alt="Good looking agricultural products"
          className="w-full h-auto hidden-lg darken"
        />

        <div className="absolute inset-center  z-10 text-white bold text-6xl max-sm:text-3xl max-sm:w-screen box-border">
          <h1 className="text-center drop-shadow-2xl shadow-slate-950">
            Harvest Smarter, Store Better With Tipien Storage Solutions
          </h1>
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

      <section className="flex flex-row w-full pb-32 pt-0 justify-center items-center width-max max-sm:flex-col relative">
        <div className="w-3/4 max-sm:w-full max-sm:px-2 flex flex-col justify-start items-center text-center">
          <h2 className="text-center text-3xl max-sm:text-xl font-medium">
            WHAT WE DO
          </h2>
          <h3 className="text-4xl max-sm:text-2xl pt-5 font-bold">
            Tipien Company Limited
          </h3>
          <h3 className="text-2xl pt-5 font-light">
            Transforming food storage in the agricultural sector
          </h3>
          <p className="py-5 pr-0 max-sm:pt-5 max-sm:pb-8 text-center">
            Advanced, durable, accessible, Transformative
          </p>

          <div className="grid grid-cols-3 gap-y-2 width-max max-md:grid-cols-1 pt-10 pb-16">
            <div className="secondary-colour mr-2 p-5 rounded-xl flex flex-col justify-start items-center max-sm:m-0 shadow-2xl">
              <Image
                src="/storage.png"
                height={100}
                width={100}
                alt="storage"
                className="w-20 h-auto max-sm:w-16"
              />
              <h4 className="text-green-700 text-center pt-2">Custom bags</h4>
              <p className="text-slate-700 text-lg text-center pt-2">
                For farmers with unique needs, Tipien offers customization
                options to ensure that specific storage challenges are met. This
                service is tailored for bulk buyers or farmers dealing with
                specialized crops.
              </p>
            </div>
            <div className="secondary-colour mr-2 p-5 rounded-xl flex flex-col justify-start items-center max-sm:m-0 shadow-2xl">
              <Image
                src="/tank.png"
                height={100}
                width={100}
                alt="storage"
                className="w-20 h-auto max-sm:w-16"
              />
              <h4 className="text-green-700 text-center pt-2">
                Storage Solutions
              </h4>
              <p className="text-slate-700 text-lg text-center pt-2">
                Tipien offers specialized bags designed to store grains such as
                maize, rice, wheat, and beans. These bags are manufactured to
                protect the grains from pests, moisture, and mold, ensuring a
                longer shelf life and maintaining quality.
              </p>
            </div>
            <div className="secondary-colour mr-2 p-5 rounded-xl flex flex-col justify-start items-center max-sm:m-0 shadow-2xl">
              <Image
                src="/location.png"
                height={100}
                width={100}
                alt="storage"
                className="w-20 h-auto max-sm:w-16"
              />
              <h4 className="text-green-700 text-center pt-2">
                Countrywide Delivery
              </h4>
              <p className="text-slate-700 text-lg text-center pt-2">
                Through our easy-to-navigate online platform, farmers can browse
                and purchase storage solutions from the comfort of their homes.
                We offer fast, reliable delivery services, ensuring that our
                products reach every corner of the country promptly.
              </p>
            </div>
          </div>

            <Button value="LEARN MORE" params="/about" />
    
        </div>
      </section>

      <section className="w-full relative h-[550px] max-sm:h-auto max-sm:py-10 bg-green-700 flex justify-center items-center">
        <div className="flex justify-between items-center w-full width-max max-sm:px-2 max-sm:flex-col">
          <div className="max-sm:pb-5">
            <Image
              src="/yellow.png"
              height={408}
              width={612}
              alt="Good looking agricultural products"
              className="w-full h-auto"
            />
          </div>
          <div className="max-sm:bottom-5 max-sm:right-5 bg-white w-[500px] max-h-[450px] max-sm:w-auto max-sm:h-5/6 max-sm:left-5 rounded-lg px-5 py-20 max-sm:px-5 max-sm:py-10 flex flex-col justify-center items-center">
            <h2 className="text-center font-normal text-xl">
              OUR PRODUCTS CATALOGUE
            </h2>
            <p className="text-center py-2 text-lg">
              Explore Tipien’s durable, affordable storage bags for efficient
              crop preservation. Tailored for farmers of all sizes, our
              solutions enhance post-harvest management. Visit our online
              platform to safeguard your harvest today!
            </p>

            <Button value="LEARN MORE" params="/products" />
          </div>
        </div>
      </section>

      <section className="pb-28 pt-16 max-sm:pb-10 max-sm:pt-8 w-full  flex flex-col justify-center items-center primary-colour max-sm:px-2">
        <div>
          <h2 className="text-center pb-10 max-sm:pb-5 text-green-700">
            WHY CHOOSE US
          </h2>
        </div>
        <div className="grid grid-cols-4 width-max max-md:grid-cols-1">
          <div className="secondary-colour mr-2 p-5 rounded-xl flex flex-col justify-start items-center max-sm:m-0 shadow-2xl">
            <Image
              src="/storage.png"
              height={100}
              width={100}
              alt="storage"
              className="w-20 h-auto max-sm:w-16"
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

          <div className="secondary-colour p-5 rounded-xl mr-2 ml-2 flex flex-col justify-start items-center max-sm:m-0 max-sm:mt-2 shadow-2xl">
            <Image
              src="/price.png"
              height={100}
              width={100}
              alt="Pricing"
              className="w-20 h-auto max-sm:w-16"
            />
            <h4 className="text-green-700 text-center pt-2">
              Affordable Pricing
            </h4>
            <p className="text-slate-700 text-lg text-center pt-2">
              We are committed to offering competitive prices, making our
              storage solutions accessible to farmers of all scales.
            </p>
          </div>

          <div className="secondary-colour p-5 rounded-xl mr-2 ml-2 max-sm:m-0 flex flex-col justify-start items-center max-sm:mt-2 shadow-2xl">
            <Image
              src="/location.png"
              height={100}
              width={100}
              alt="Location"
              className="w-20 h-auto max-sm:w-16"
            />
            <h4 className="text-green-700 text-center pt-2">
              Nationwide Reach
            </h4>
            <p className="text-slate-700 text-lg text-center pt-2">
              Our efficient online sales and distribution system ensures that
              farmers in remote areas can access our products conveniently.
            </p>
          </div>

          <div className="secondary-colour p-5 rounded-xl ml-2 max-sm:m-0 flex flex-col justify-start items-center max-sm:mt-2 shadow-2xl">
            <Image
              src="/customer.png"
              height={100}
              width={100}
              alt="customer support"
              className="w-20 h-auto max-sm:w-16"
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

export default HomeLayout;
