"use client";

import Image from "next/image";
import Particles from "./particles";
import Illustration from "@/public/images/glow-bottom.svg";
import { useFeatureFlagEnabled } from "posthog-js/react";
import EmailSignupForm from "@/components/elements/ContactForm";

export default function Hero() {
  const flagEnabled = useFeatureFlagEnabled("hero");

  return (
    <section id={"join-waitlist"}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10" />

        {/* Illustration */}
        <div
          className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
            <Image
              src={Illustration}
              className="max-w-none opacity-50"
              width={2146}
              priority
              alt="Hero Illustration"
            />
          </div>
        </div>

        <div className="pt-52 pb-16 md:pt-48 md:pb-32">
          {/* Hero content */}
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="absolute inset-0 bottom-[45%] -z-10 flex justify-center items-center"
              aria-hidden="true"
              data-aos="fade-down"
            >
              <Image
                src={"/images/product/sleeppuds-from-behind.png"}
                alt="SleepPods"
                className="max-w-none"
                width={375}
                height={375}
                quality={100}
                priority
              />
            </div>
            <h1
              className="pt-7 lg:text-7xl text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-800/60 lg:pb-4"
              data-aos="fade-down"
            >
              SleepPods&trade;
            </h1>
            <h2
              className={
                "lg:text-5xl text-lg my-2 bg-clip-text font-bold text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 lg:pb-4"
              }
              data-aos="fade-up"
            >
              Deepen Your Sleep, Enhance Your Health
            </h2>
            <p
              className="lg:mb-8 lg:mt-4 lg:text-2xl text-sm text-[#e7ecef] mx-auto text-md font-semibold font-sans !leading-normal tracking-wide text-center"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Experience the future of sleep with EEG-powered earplugs,
              detecting deep sleep and soothing you with pink noise for ultimate
              rest and rejuvenation.
            </p>
            <div
              className="max-w-xs mt-4 mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <EmailSignupForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
