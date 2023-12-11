"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Particles from "./particles";
import Highlighter, { HighlighterItem } from "./highlighter";

import CarouselImg01 from "@/public/images/carousel-icon-01.svg";
import CarouselImg02 from "@/public/images/carousel-icon-02.svg";
import CarouselImg03 from "@/public/images/carousel-icon-03.svg";
import CarouselImg04 from "@/public/images/carousel-icon-04.svg";
import CarouselImg05 from "@/public/images/carousel-icon-05.svg";

// Import Swiper
import Swiper, { Navigation } from "swiper";
import "swiper/swiper.min.css";
Swiper.use([Navigation]);

export default function TestimonialsCarouselNoApp() {
  const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false);

  useEffect(() => {
    const carousel = new Swiper(".testimonials-carousel", {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
    setSwiperInitialized(true);
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
                Streamlined for sleep
              </div>
            </div>
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              The Power of Rest
            </h2>
            <p className="text-lg text-slate-400">
              Five Major Reasons Why Better Sleep is Essential
            </p>
          </div>

          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-slate-900 before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-slate-900 after:to-20%">
            <div className="testimonials-carousel swiper-container group grid-cols-5 grid">
              <Highlighter
                className="swiper-wrapper w-fit "
                refresh={swiperInitialized}
              >
                {/* Carousel items */}
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="#f7f7f7"
                        viewBox="0 0 256 256"
                      >
                        <path d="M252,124a60.14,60.14,0,0,0-32-53.08,52,52,0,0,0-92-32.11A52,52,0,0,0,36,70.92a60,60,0,0,0,0,106.14,52,52,0,0,0,92,32.13,52,52,0,0,0,92-32.13A60.05,60.05,0,0,0,252,124ZM88,204a28,28,0,0,1-26.85-20.07c1,0,1.89.07,2.85.07h8a12,12,0,0,0,0-24H64A36,36,0,0,1,52,90.05a12,12,0,0,0,8-11.32V72a28,28,0,0,1,56,0v60.15a52.43,52.43,0,0,0-12.4-5.77,12,12,0,0,0-7.2,22.9A28,28,0,0,1,88,204Zm104-44h-8a12,12,0,0,0,0,24h8c1,0,1.9,0,2.85-.07a28,28,0,1,1-35.18-34.67,12,12,0,0,0-7.13-22.92A52,52,0,0,0,140,132.15V72a28,28,0,0,1,56,0v6.73a12,12,0,0,0,8,11.32,36,36,0,0,1-12,70Zm16-44a12,12,0,0,1-12,12,40,40,0,0,1-40-40V84a12,12,0,0,1,24,0v4a16,16,0,0,0,16,16A12,12,0,0,1,208,116ZM60,128a12,12,0,0,1,0-24A16,16,0,0,0,76,88V84a12,12,0,0,1,24,0v4A40,40,0,0,1,60,128Z"></path>
                      </svg>
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">
                          Improved Cognitive Function{" "}
                        </div>
                        <div className="text-slate-400 mb-3">
                          Adequate sleep is crucial for brain health. It
                          enhances memory, concentration, and decision-making
                          abilities. Good sleep can boost your learning
                          efficiency and problem-solving skills, making it
                          essential for both academic and professional success.
                        </div>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="#f7f7f7"
                        viewBox="0 0 256 256"
                      >
                        <path d="M230.47,67.5a12,12,0,0,0-19.26-4.32L172.43,99l-12.68-2.72L157,83.57l35.79-38.78a12,12,0,0,0-4.32-19.26A76,76,0,0,0,89.24,123.8L31.17,174c-.22.19-.44.39-.64.6a36,36,0,0,0,50.91,50.91c.21-.2.41-.42.6-.64l50.16-58.07A76,76,0,0,0,230.47,67.5ZM160,148a52.1,52.1,0,0,1-25.13-6.46A12,12,0,0,0,120,144.2L64.21,208.75a12,12,0,0,1-17-17L111.8,136a12,12,0,0,0,2.65-14.89A52,52,0,0,1,160,44h.89L135.17,71.87a12,12,0,0,0-2.91,10.65l5.66,26.35a12,12,0,0,0,9.21,9.21l26.35,5.66a12,12,0,0,0,10.65-2.91L212,95.12c0,.3,0,.59,0,.89A52.06,52.06,0,0,1,160,148Z"></path>
                      </svg>
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">
                          Enhanced Physical Health{" "}
                        </div>
                        <div className="text-slate-400 mb-3 ">
                          Sleep plays a vital role in physical wellness. It aids
                          in healing and repair of your heart and blood vessels,
                          supports healthy growth and development, and is
                          integral in maintaining a balanced metabolism, immune
                          function, and hormonal balance.
                        </div>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="#f7f7f7"
                        viewBox="0 0 256 256"
                      >
                        <path d="M249.3,119.63a19.51,19.51,0,0,0-12-9.2A76,76,0,0,0,218.92,108a92.19,92.19,0,0,0-3-42,20.15,20.15,0,0,0-23.44-13.57A88.39,88.39,0,0,0,166.3,62.8,98,98,0,0,0,140,32,20.07,20.07,0,0,0,116,32,98,98,0,0,0,89.7,62.8,88.39,88.39,0,0,0,63.55,52.42,20.15,20.15,0,0,0,40.11,66a92.19,92.19,0,0,0-3,42,76,76,0,0,0-18.41,2.43,19.51,19.51,0,0,0-12,9.2,20,20,0,0,0-2,15.31c3.55,13.16,14.4,38.16,47.14,57.72C84.16,212,112.76,212,128.08,212s43.76,0,76.07-19.34c32.74-19.56,43.59-44.56,47.14-57.72A20,20,0,0,0,249.3,119.63ZM64.16,172.05c-22.29-13.32-31.35-29.13-35-39.35a57.54,57.54,0,0,1,14.54-.46,134,134,0,0,0,8.55,17.69,142.54,142.54,0,0,0,19.59,26.32C69.3,175,66.74,173.6,64.16,172.05ZM79,147.27c-2.1-3-4.12-6-6-9.29C57.37,110.7,58.84,88.94,62,76.76A69,69,0,0,1,80.5,85.33,124.18,124.18,0,0,0,76,119.17,127.59,127.59,0,0,0,79,147.27Zm49,38c-9.72-8.07-28-28.28-28-66.13,0-37.42,18-57.7,28-66.08,10,8.38,28,28.66,28,66.08C156,157,137.72,177.23,128,185.3Zm49-38a127.59,127.59,0,0,0,3-28.1,124.18,124.18,0,0,0-4.5-33.84A69.08,69.08,0,0,1,194,76.75c3.13,12.19,4.6,34-11.06,61.23C181.1,141.23,179.08,144.32,177,147.27Zm14.86,24.78c-2.56,1.53-5.09,2.91-7.58,4.16a142.54,142.54,0,0,0,19.51-26.28,134,134,0,0,0,8.55-17.69,57.54,57.54,0,0,1,14.54.46C223.19,142.92,214.13,158.73,191.84,172.05Z"></path>
                      </svg>
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">
                          Emotional and Mental Wellbeing
                        </div>
                        <div className="text-slate-400 mb-3">
                          Quality sleep is linked to better emotional regulation
                          and mental health. It helps in reducing stress and
                          anxiety, lowering the risk of mood disorders, and
                          promotes an overall sense of wellbeing.
                        </div>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="#f7f7f7"
                        viewBox="0 0 256 256"
                      >
                        <path d="M196,52H28A28,28,0,0,0,0,80v96a28,28,0,0,0,28,28H196a28,28,0,0,0,28-28V80A28,28,0,0,0,196,52Zm4,124a4,4,0,0,1-4,4H28a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H196a4,4,0,0,1,4,4Zm-16-72v48a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm-40,0v48a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm-40,0v48a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm-40,0v48a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm192,0v48a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"></path>
                      </svg>
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">
                          Increased Energy and Productivity
                        </div>
                        <div className="text-slate-400 mb-3">
                          A good night's sleep can significantly boost your
                          energy levels and productivity throughout the day. It
                          leaves you feeling refreshed and alert, enabling you
                          to perform daily tasks more efficiently and
                          effectively.
                        </div>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="#f7f7f7"
                        viewBox="0 0 256 256"
                      >
                        <path d="M152,92a36,36,0,1,0-36-36A36,36,0,0,0,152,92Zm0-48a12,12,0,1,1-12,12A12,12,0,0,1,152,44Zm76,93.4a12,12,0,0,1-7,10.91,66,66,0,0,1-21.47,3.78c-14,0-34.25-3.82-59.77-19a177,177,0,0,1-10.27,21C153.12,162.83,188,183.8,188,232a12,12,0,0,1-24,0c0-18.69-6.95-33.06-21.26-43.94-9.16-7-19.55-11-27.43-13.34-.81,1-1.64,2-2.5,2.95-20,22.87-44.82,34.76-72.25,34.76a97.33,97.33,0,0,1-9.75-.49,12,12,0,1,1,2.39-23.88c52.3,5.22,77.48-45.92,85.79-67.75C84.8,102.46,63.74,118.78,63.51,119a12,12,0,0,1-15-18.72C50.08,99,88,69.44,142.75,106.62c43.1,29.31,68.1,19.92,68.5,19.76a12,12,0,0,1,16.75,11Z"></path>
                      </svg>
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">
                          Longevity and Reduced Health Risks
                        </div>
                        <div className="text-slate-400 mb-3">
                          Consistently getting good sleep has been associated
                          with a longer lifespan and reduced risk of chronic
                          diseases. It lowers the risk of serious health issues
                          like obesity, heart disease, diabetes, and stroke.
                        </div>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </Highlighter>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex mt-8 justify-end">
            <button className="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Next</span>
              <svg
                className="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
