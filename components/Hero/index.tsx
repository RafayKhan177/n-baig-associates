"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const TEXTS = ["lorem10", "Building", "Tree", "Color"];

  const heroContent = {
    title: "Find Your Dream Home ",
    subtitle: "Explore Stunning Properties in Your Area",
    dynamicText: (
      <TextTransition
        springConfig={presets.wobbly}
        style={{ fontSize: "1.3rem", fontWeight: 600 }}
        className="caret-neutral-900"
      >
        {
          [
            "Imagine stepping into a sunlit living room, your own haven to unwind. Discover properties that spark joy and ignite your imagination.",
            "Invest in more than just a property. Invest in a sense of belonging, where shared laughter echoes through the streets and memories are made to last..",
            "Picture yourself hosting backyard barbecues and raising a family in a space you call home. Start your adventure with us and find the perfect chapter for your life.",
          ][index % 3]
        }
      </TextTransition>
    ),
    buttonText: "Search Properties",
    placeholderText: "Enter your desired location",
    tryForFreeText: "dsa",
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                {heroContent.title}
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                {heroContent.subtitle}
              </h1>

              <h1>{heroContent.dynamicText}</h1>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      {heroContent.buttonText}
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  {heroContent.tryForFreeText}{" "}
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    style={{ borderRadius: "1rem" }}
                    src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_105762-2050.jpg?w=826&t=st=1704568085~exp=1704568685~hmac=aaea52599b79d29e2ac5c862ec731660abe5e43ac42e473995dd44153b254100"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
