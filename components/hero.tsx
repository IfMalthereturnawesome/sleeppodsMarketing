'use client'

import Image from 'next/image'
import Particles from './particles'
import Illustration from '@/public/images/glow-bottom.svg'
import { useFeatureFlagEnabled } from 'posthog-js/react'


export default function Hero() {
  const flagEnabled = useFeatureFlagEnabled('hero')


    return (
        <section>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

            {/* Particles animation */}
            <Particles className="absolute inset-0 -z-10" />

            {/* Illustration */}
            <div className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
                <Image src={Illustration} className="max-w-none" width={2146} priority alt="Hero Illustration" />
              </div>
            </div>

            <div className="pt-32 pb-16 md:pt-52 md:pb-32">

              {/* Hero content */}
              <div className="max-w-3xl mx-auto text-center">
                <div className="mb-6" data-aos="fade-down">

                </div>
                <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4" data-aos="fade-down">SleepPods&trade; </h1>
                <span className={"h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4"}>A New Era of Sleep </span>
                <p className="mb-8 mt-4 text-[#e7ecef] mx-auto text-md xs:text-2xl large:text-[1.33rem] 2xl:text-[1.37rem] xxlarge:text-[1.4rem] 3xl:text-2xl font-semibold font-sans !leading-normal tracking-wide text-center" data-aos="fade-down" data-aos-delay="200">Experience the future of sleep with PPG-powered earplugs, detecting deep sleep and soothing you with pink noise for ultimate rest and rejuvenation.</p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-down" data-aos-delay="400">
                  <div>
                    <a className="btn inline-block text-lg font-semibold py-3 px-6 rounded-lg shadow-lg bg-black text-white hover:bg-gray-800 transition duration-300 ease-in-out transform hover:-translate-y-1" href="#preorder">
                      Pre-Order Now <span className="ml-2">🌟</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
    )


}