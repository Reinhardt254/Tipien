// "use client";

// import { useState } from "react";

// const Products = () => {
//   const [panel, setPanel] = useState(false);
//   const [aluminium, setAluminium] = useState(false);
//   const [roofing, setRoofing] = useState(false);
//   const [coldRoom, setColdRoom] = useState(false);
//   const [aircondition, setAirCondition] = useState(false);
//   const [hvac, setHvac] = useState(false);
//   const [consultancy, setConsultancy] = useState(false);

//   return (
//     <section>
//       <div class="product">
//         <div class="product-layout">
//           <img
//             src="./products.jpg"
//             alt="Products-Home-Page"
//             class="product-layout-image small-hidden"
//             loading="lazy"
//           />
//           <img
//             src="./mobile/productmob.jpg"
//             alt="Products-Home-Page"
//             class="product-layout-image large-hidden"
//             loading="lazy"
//           />
//           <div class="product-layout-text">Products</div>
//         </div>

//         <div class="products-container">
//           <div class="products-cards-container">
//             <div class="product-cards">
//               <div class="product-image">
//                 <img
//                   src="./isopanel&accessories.jpg"
//                   alt=""
//                   class="product-card-image"
//                   loading="lazy"
//                 />
//                 {panel && (
//                   <div class="overlay-content" id="overlay-content">
//                     <div class="home-product-card-overlay">
//                       <div class="home-product-card-overlay-text">
//                         We manufacture a wide range of high-quality insulation
//                         panels and accompanying accessories designed to optimize
//                         thermal performance and structural integrity for roofing
//                         and wall applications in refrigerated cold rooms,
//                         controlled environment spaces, model housing units,
//                         commercial kiosks, and more.
//                       </div>

//                       <div onClick={() => setPanel(false)}>
//                         <img
//                           src="./close.png"
//                           alt="plus-icon"
//                           class="close-popup-icon"
//                           loading="lazy"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <img
//                 src="./+.png"
//                 alt="plus-icon"
//                 class="product-plus-icon"
//                 loading="lazy"
//                 onClick={() => setPanel(true)}
//               />

//               <div class="products-cards-text">
//                 <div class="products-cards-text-h1">Panels and Accesories</div>
//                 <div class="products-cards-text-p">
//                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
//                   diam nonummy nibh
//                 </div>
//               </div>
//             </div>

//             <div class="product-cards">
//               <div class="product-image">
//                 <img
//                   src="./aluminiumprofiles.jpg"
//                   alt=""
//                   class="product-card-image"
//                   loading="lazy"
//                 />
//                 {aluminium && (
//                   <div class="overlay-content" id="overlay-content">
//                     <div class="home-product-card-overlay">
//                       <div class="home-product-card-overlay-text">
//                         Our durable aluminum profiles are engineered to
//                         seamlessly integrate with our insulation panels,
//                         offering enhanced strength, flexibility, and aesthetic
//                         appeal for various construction projects.
//                       </div>

//                       <div onClick={() => setAluminium(false)}>
//                         <img
//                           src="./close.png"
//                           alt="plus-icon"
//                           class="close-popup-icon"
//                           loading="lazy"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <img
//                 src="./+.png"
//                 alt="plus-icon"
//                 class="product-plus-icon"
//                 loading="lazy"
//                 onClick={() => setAluminium(true)}
//               />

//               <div class="products-cards-text">
//                 <div class="products-cards-text-h1">Aluminum Profiles</div>
//                 <div class="products-cards-text-p">
//                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
//                   diam nonummy nibh
//                 </div>
//               </div>
//             </div>

//             <div class="product-cards">
//               <div class="product-image">
//                 <img
//                   src="./roofingproducts.jpg"
//                   alt=""
//                   class="product-card-image"
//                   loading="lazy"
//                 />
//                 {roofing && (
//                   <div class="overlay-content" id="overlay-content">
//                     <div class="home-product-card-overlay">
//                       <div class="home-product-card-overlay-text">
//                         Meticulously crafted to withstand harsh environmental
//                         conditions while maintaining exceptional thermal
//                         insulation properties, our roofing sheets are adequately
//                         galvanized, coated, and cold-rolled to various profiles
//                         to suit customer preferences.
//                       </div>

//                       <div onClick={() => setRoofing(false)}>
//                         <img
//                           src="./close.png"
//                           alt="plus-icon"
//                           class="close-popup-icon"
//                           loading="lazy"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <img
//                 src="./+.png"
//                 alt="plus-icon"
//                 class="product-plus-icon"
//                 loading="lazy"
//                 onClick={() => setRoofing(true)}
//               />

//               <div class="products-cards-text">
//                 <div class="products-cards-text-h1">Roofing Sheets</div>
//                 <div class="products-cards-text-p">
//                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
//                   diam nonummy nibh
//                 </div>
//               </div>
//             </div>

//             <div class="product-cards">
//               <div class="product-image">
//                 <img
//                   src="./coldroomproducts.jpg"
//                   alt=""
//                   class="product-card-image"
//                   loading="lazy"
//                 />
//                 {coldRoom && (
//                   <div class="overlay-content" id="overlay-content">
//                     <div class="home-product-card-overlay">
//                       <div class="home-product-card-overlay-text">
//                         Ensure precise temperature control and optimal storage
//                         conditions with our advanced cold room equipment.
//                         Featuring innovative refrigeration systems and insulated
//                         panels, our equipment is tailored to meet the specific
//                         needs of cold storage facilities.
//                       </div>

//                       <div onClick={() => setColdRoom(false)}>
//                         <img
//                           src="./close.png"
//                           alt="plus-icon"
//                           class="close-popup-icon"
//                           loading="lazy"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <img
//                 src="./+.png"
//                 alt="plus-icon"
//                 class="product-plus-icon"
//                 loading="lazy"
//                 onClick={() => setColdRoom(true)}
//               />

//               <div class="products-cards-text">
//                 <div class="products-cards-text-h1">Cold Room Equipment</div>
//                 <div class="products-cards-text-p">
//                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
//                   diam nonummy nibh9
//                 </div>
//               </div>
//             </div>

//             <div class="product-cards">
//               <div class="product-image">
//                 <img
//                   src="./airconditioning.jpg"
//                   alt=""
//                   class="product-card-image"
//                   loading="lazy"
//                 />
//                 {aircondition && (
//                   <div class="overlay-content" id="overlay-content">
//                     <div class="home-product-card-overlay">
//                       <div class="home-product-card-overlay-text">
//                         Enhance indoor comfort and air quality with our range of
//                         high-performance air conditioning equipment, including
//                         energy-efficient systems and components designed for
//                         residential, commercial, and industrial applications.
//                       </div>

//                       <div onClick={() => setAirCondition(false)}>
//                         <img
//                           src="./close.png"
//                           alt="plus-icon"
//                           class="close-popup-icon"
//                           loading="lazy"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <img
//                 src="./+.png"
//                 alt="plus-icon"
//                 class="product-plus-icon"
//                 loading="lazy"
//                 onClick={() => setAirCondition(true)}
//               />

//               <div class="products-cards-text">
//                 <div class="products-cards-text-h1">
//                   Air-Conditioning Equipment
//                 </div>
//                 <div class="products-cards-text-p">
//                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
//                   diam nonummy nibh9
//                 </div>
//               </div>
//             </div>

//             <div class="product-cards">
//               <div class="product-image">
//                 <img
//                   src="./hvacproducts.jpg"
//                   alt=""
//                   class="product-card-image"
//                   loading="lazy"
//                 />
//                 {hvac && (
//                   <div class="overlay-content" id="overlay-content">
//                     <div class="home-product-card-overlay">
//                       <div class="home-product-card-overlay-text">
//                         Trust our expert team for seamless installation of
//                         heating, ventilation, and air conditioning (HVAC)
//                         systems. We deliver efficient climate control solutions
//                         tailored to your project requirements with meticulous
//                         attention to detail.
//                       </div>

//                       <div onClick={() => setHvac(false)}>
//                         <img
//                           src="./close.png"
//                           alt="plus-icon"
//                           class="close-popup-icon"
//                           loading="lazy"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <img
//                 src="./+.png"
//                 alt="plus-icon"
//                 class="product-plus-icon"
//                 loading="lazy"
//                 onClick={() => setHvac(true)}
//               />

//               <div class="products-cards-text">
//                 <div class="products-cards-text-h1">HVAC Installation</div>
//                 <div class="products-cards-text-p">
//                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
//                   diam nonummy nibh9
//                 </div>
//               </div>
//             </div>

//             <div class="product-cards">
//               <div class="product-image">
//                 <img
//                   src="./consultancy&design.jpg"
//                   alt=""
//                   class="product-card-image"
//                   loading="lazy"
//                 />
//                 {consultancy && (
//                   <div class="overlay-content" id="overlay-content">
//                     <div class="home-product-card-overlay">
//                       <div class="home-product-card-overlay-text">
//                         Benefit from our specialized expertise and comprehensive
//                         consultancy services. We guide you through every stage
//                         of your project, from initial concept to final
//                         implementation, ensuring optimal design solutions and
//                         performance efficiency.
//                       </div>

//                       <div onClick={() => setConsultancy(false)}>
//                         <img
//                           src="./close.png"
//                           alt="plus-icon"
//                           class="close-popup-icon"
//                           loading="lazy"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <img
//                 src="./+.png"
//                 alt="plus-icon"
//                 class="product-plus-icon"
//                 loading="lazy"
//                 onClick={() => setConsultancy(true)}
//               />

//               <div class="products-cards-text">
//                 <div class="products-cards-text-h1">Consultancy and Design</div>
//                 <div class="products-cards-text-p">
//                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
//                   diam nonummy nibh9
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="products-contact-container">
//           <div class="products-contact-h1">
//             HAVE A QUESTION? LETS DISCUSS
//           </div>

//           <div class="products-contact-h1">
//             YOUR BUSINESS NEEDS &
//           </div>

//           <div class="products-contact-h1">
//             HOW WE CAN HELP
//           </div>

//           <div class="products-contact-button">
//             <a href="/contact">Get In Touch</a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;