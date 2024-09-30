import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <main>
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
           CONTACT US
          </h1>
        </div>
      </section>
    </main>
  );
};

export default Contact;
