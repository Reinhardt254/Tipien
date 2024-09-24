import Image from "next/image";
import React from "react";

const HomeLayout = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/hero.webp"
          height={900}
          width={1600}
          alt="Good looking agricultural products"
        />

        <div className="absolute inset-center  z-10 text-white bold text-6xl">
          <h1>Harvest Smarter, Store Better With Tipien Storage Solutions</h1>
        </div>
      </div>

      <div>
        <div>
          <h2></h2>
          <h3></h3>
          <h3></h3>
          <p></p>
        </div>
        <div>
          <div>
            <div>
              <img />
              <h4></h4>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
