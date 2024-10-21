"use client";
import Button from "@/components/button";
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

      <section className="pt-20 pb-32 max-sm:pb-10">
        <div className="width-max grid grid-cols-2 gap-10 max-sm:grid-cols-1">
          <div className="bg-white rounded-b-md shadow rounded-sm p-5 flex flex-col justify-center items-center">
            <Image
              src="/pink.png"
              height={500}
              width={500}
              alt="Good looking agricultural products"
              className="w-2/3 h-auto min-h- rounded-t-sm"
            />
            <h2 className="text-2xl pt-5">Pink Panel 90 Grams</h2>
            <p className="text-lg text-gray-800">
              The Pink Panel 90 Grams is a durable, lightweight solution for
              farmers looking to protect their produce from moisture and pests.
              Designed with high-quality materials, this panel offers optimal
              storage conditions for grains and other agricultural products. Its
              low weight ensures ease of handling, while providing excellent
              insulation to maintain crop quality during storage.
            </p>
          </div>

          <div className="bg-white rounded-b-md shadow rounded-sm p-5 flex flex-col justify-center items-center">
            <Image
              src="/3sacks.png"
              height={500}
              width={500}
              alt="Good looking agricultural products"
              className="w-2/3 h-auto min-h- rounded-t-sm"
            />
            <h2 className="text-2xl pt-5">Pink Panel 120 Grams</h2>
            <p className="text-lg text-gray-800">
              The Pink Panel 120 Grams provides enhanced strength and durability
              for long-term storage needs. This panel is ideal for farmers
              seeking to store larger quantities of produce, offering superior
              protection against environmental factors. Its moderate weight
              allows for easy installation and handling, ensuring that your
              crops remain safe and in perfect condition for extended periods.
            </p>
          </div>

          <div className="bg-white rounded-b-md shadow rounded-sm p-5 flex flex-col justify-center items-center">
            <Image
              src="/sackscollection.png"
              height={900}
              width={900}
              alt="Good looking agricultural products"
              className="w-72 h-auto min-h- rounded-t-sm"
            />
            <h2 className="text-2xl pt-5">Pink Panel 140 Grams</h2>
            <p className="text-lg text-gray-800">
              The Pink Panel 140 Grams is the ultimate solution for robust
              storage, providing maximum protection against pests, moisture, and
              temperature fluctuations. Its high-density construction ensures
              longevity and stability, making it ideal for farmers with
              large-scale storage needs. With this panel, your agricultural
              products are guaranteed to stay fresh and secure throughout the
              storage period.
            </p>
          </div>

          <div className="bg-white rounded-b-md shadow rounded-sm p-5 flex flex-col justify-center items-center">
            <Image
              src="/hermatic.jpg"
              height={900}
              width={900}
              alt="Good looking agricultural products"
              className="w-2/3 h-auto min-h- rounded-t-sm"
            />
            <h2 className="text-2xl pt-5">Hermetic Storage Bag</h2>
            <p className="text-lg text-gray-800">
              The Hermetic Storage Bag is a highly effective storage solution
              designed to prevent moisture and oxygen from entering, ensuring
              that stored grains and produce remain fresh for extended periods.
              This bag is ideal for farmers who need to store their crops in
              airtight conditions to prevent spoilage and pest infestations.
              It’s a reliable, cost-effective way to preserve the quality of
              your produce from harvest to market.
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
        <Button value="CONTACT US" />
      </section>
    </main>
  );
};

export default Products;
