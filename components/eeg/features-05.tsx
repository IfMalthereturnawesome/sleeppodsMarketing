import Image from "next/image";
import Particles from "./particles";
import Highlighter, { HighlighterItem } from "./highlighter";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import FeatureImg04 from "@/public/images/sleepodsModels/motoki-tonn.jpg";
import FeatureImg05 from "@/public/images/sleepodsModels/jabari-timothy.jpg";
import FeatureImg06 from "@/public/images/sleepodsModels/jessica-flavia.jpg";
import "@splidejs/react-splide/css";

export default function Features05() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="relative">
      {/* Particles animation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
        <Particles
          className="absolute inset-0 -z-10"
          quantity={6}
          staticity={30}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 md:pt-26">
          {/* Highlighted boxes */}
          <div className="relative pb-12 md:pb-20">
            {/* Blurred shape */}
            <div
              className="absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <defs>
                  <linearGradient
                    id="bs2-a"
                    x1="19.609%"
                    x2="50%"
                    y1="14.544%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#bs2-a)"
                  fillRule="evenodd"
                  d="m346 898 461 369-284 58z"
                  transform="translate(-346 -898)"
                />
              </svg>
            </div>
            {/* Grid */}
            <Highlighter className="grid md:grid-cols-12 gap-6 group">
              {/* Box #1 */}
              <div className="md:col-span-12" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      {/* Blurred shape */}
                      <div
                        className="absolute right-0 top-0 blur-2xl"
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="342"
                          height="393"
                        >
                          <defs>
                            <linearGradient
                              id="bs-a"
                              x1="19.609%"
                              x2="50%"
                              y1="14.544%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#6366F1" />
                              <stop
                                offset="100%"
                                stopColor="#6366F1"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#bs-a)"
                            fillRule="evenodd"
                            d="m104 .827 461 369-284 58z"
                            transform="translate(0 -112.827)"
                            opacity=".7"
                          />
                        </svg>
                      </div>
                      {/* Radial gradient */}
                      <div
                        className="absolute flex items-center justify-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70" />
                        <div className="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]" />
                      </div>
                      {/* Image */}
                      <div className=" w-full h-full lg:h-96 lg:justify-center lg:flex lg:items-center md:h-auto overflow-hidden">
                        <Splide
                          aria-label="My Favorite Images"
                          options={{
                            rewind: true,
                            arrows: false,
                            autoplay: true,
                            speed: 1000,
                            rewindSpeed: 1000,
                            rewindByDrag: true,
                            startSlide: 0,
                          }}
                        >
                          <SplideSlide>
                            <Image
                              src={FeatureImg04}
                              width="2400"
                              height="850"
                              alt="Feature 05"
                              quality={100}
                            />
                          </SplideSlide>
                          <SplideSlide>
                            <Image
                              src={FeatureImg05}
                              width="2000"
                              height="850"
                              alt="Feature 05"
                              quality={100}
                            />
                          </SplideSlide>
                          <SplideSlide>
                            <Image
                              src={FeatureImg06}
                              width="2400"
                              height="850"
                              alt="Feature 05"
                              quality={100}
                            />
                          </SplideSlide>
                        </Splide>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
            </Highlighter>
          </div>
        </div>
      </div>
    </section>
  );
}
