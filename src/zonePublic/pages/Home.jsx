import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import vitrine from "../../assets/vitrine.jpg?url";

const Home = () => {
  return (
    <div>
      <Navbar />

      <section
        id="vitrine"
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${vitrine})` }}
      >
        <div
          id="filter"
          className="
        flex justify-center items-center
         absolute inset-0 bg-black/60 text-white"
        >
          <h1 className=" text-2xl font-bold uppercase">
            Welcome to our Store
          </h1>
        </div>
      </section>

      <section id="services" className="px-6">
        <h2 className="text-center my-6 font-bold text-2xl">Services</h2>
        <div className=" grid grid-cols-3 place-items-center">
          <div>
            <img src="https://picsum.photos/400/250" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/400/251" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/401/250" alt="" />
          </div>
        </div>
      </section>

      <section id="products" className="px-6">
        <h2 className="text-center my-6 font-bold text-2xl">Produits</h2>
        <div className=" grid grid-cols-4 place-items-center">
          <div>
            <img src="https://picsum.photos/300/250" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/300/251" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/301/250" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/301/250" alt="" />
          </div>
        </div>
      </section>

      <section id="cgv" className="px-6 pb-5">
        <h2 className="text-center my-6 font-bold text-2xl">
          Conditions Generales
        </h2>

        <div className="space-y-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            perspiciatis aliquid voluptate et laborum vel impedit repellendus,
            reprehenderit rerum accusamus voluptates fugiat, odit beatae est
            ipsam. Quam hic commodi vitae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            perspiciatis aliquid voluptate .
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            perspiciatis aliquid voluptate et laborum vel impedit.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
