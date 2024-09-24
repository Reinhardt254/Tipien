import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <section className="relative">
        <Image
          src="/hero.webp"
          height={900}
          width={1600}
          alt="Good looking agricultural products"
        />

        <div className="absolute inset-center  z-10 text-white bold text-6xl">
          <h1>Harvest Smarter, Store Better With Tipien Storage Solutions</h1>
        </div>
      </section>

      <section>
        <div>
          <h2>WHO WE ARE</h2>
          <p>
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
        <div>
          <img />
        </div>
      </section>

      <section>
        <div>
          <h2>WHY CHOOSE US</h2>
        </div>
        <div>
          <div>
            <img />
            <h4>Expertise in Agricultural Storage</h4>
            <p>
              With years of experience in the agricultural storage industry, we
              understand the unique challenges farmers face and offer practical
              solutions tailored to their needs.
            </p>
          </div>

          <div>
            <img />
            <h4>Affordable Pricing</h4>
            <p>
              We are committed to offering competitive prices, making our
              storage solutions accessible to farmers of all scales.
            </p>
          </div>

          <div>
            <img />
            <h4>Nationwide Reach</h4>
            <p>
              Our efficient online sales and distribution system ensures that
              farmers in remote areas can access our products conveniently.
            </p>
          </div>

          <div>
            <img />
            <h4>Customer Support</h4>
            <p>
              Tipien is dedicated to providing excellent customer service. Our
              team is always available to offer guidance and assistance
              regarding the best storage solutions for various crops.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div>Would you like to know more about us?</div>
        <div>Reach out to us today</div>
        <button>CONTACT US</button>
      </section>
    </div>
  );
};

export default About;
