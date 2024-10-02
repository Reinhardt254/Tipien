"use client";
import Image from "next/image";

const Products = () => {
  return (
    <main className="primary-colour">
      <section className="relative w-full">
        <Image
          src="/hero.webp"
          height={1600}
          width={900}
          alt="Good looking agricultural products"
          className="w-full h-auto min-h-96"
        />
 
        <div className="absolute inset-center  z-10 text-white bold text-6xl max-sm:text-3xl max-sm:w-screen box-border">
          <h1 className="text-center">OUR PRODUCTS</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="width-max grid grid-cols-3 gap-10 max-sm:grid-cols-1">
          <div className="primary-colour rounded-lg">
            <Image
              src="/hero.webp"
              height={1600}
              width={900}
              alt="Good looking agricultural products"
              className="w-full h-auto min-h- rounded-t-lg"
            />
            <h2>Floor bag</h2>
          </div>
          <div className="primary-colour rounded-lg">
            <Image
              src="/hero.webp"
              height={1600}
              width={900}
              alt="Good looking agricultural products"
              className="w-full h-auto min-h- rounded-t-lg"
            />
            <h2>Floor bag</h2>
          </div>
          <div className="primary-colour rounded-lg">
            <Image
              src="/hero.webp"
              height={1600}
              width={900}
              alt="Good looking agricultural products"
              className="w-full h-auto min-h- rounded-t-lg"
            />
            <h2>Floor bag</h2>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Products;
