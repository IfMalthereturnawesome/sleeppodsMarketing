"use client";
// thank-you.tsx
import React, { useEffect } from "react";
import Link from "next/link";
import Container from "@components/elements/Container";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const ThankYouPage = () => {
  const router = useSearchParams();
  let email = router.toString();
  email = email.replace("email=", "").replace("%40", "@");

  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11433750637/mX40CP3ng_8YEO3ghMwq",
      });
    }
  }, []);

  return (
    <Container>
      <div className="mt-10 md:mt-5 bg-gray-100 flex flex-col items-center justify-center px-4 rounded-2xl">
        <div className="md:mx-20 text-center text-slate-900 flex flex-col md:gap-10 md:pt-10 my-2">
          <div className="flex flex-col md:gap-4 gap-2">
            <h1 className="text-2xl md:text-6xl font-semibold ">
              Thank You for Joining the Waitlist!
            </h1>
            <p className="text-slate-900  text-xs md:text-xl">
              {email ? (
                <>
                  A confirmation email has been sent to <strong>{email}</strong>
                  . If you don’t see it soon, please check your spam folder.
                </>
              ) : (
                "Please check your email for a confirmation message."
              )}
            </p>
            <p className=" text-sm md:text-2xl">
              We've received your request for{" "}
              <strong>early access to SleepPods</strong>. You're now on our
              list, and we'll keep you <strong>updated on our progress</strong>.
            </p>
            <p className=" text-sm md:text-2xl">
              In the meantime, why not check out Eight Athletics'{" "}
              <strong>revolutionary Sleep Mask One</strong>, designed for{" "}
              <strong>maximum comfort</strong> and{" "}
              <strong>total blackout</strong>.
            </p>
          </div>
          <div className="flex flex-col ">
            <div className="md:h-full md:w-full w-64 h-64">
              <Image
                className="rounded-lg object-contain mx-auto shadow-black drop-shadow-sm "
                src={"/images/image5.jpg"}
                width="600"
                height="600"
                quality={100}
                alt="Sleep Mask One from Eight Athletics"
              />
            </div>
            <div className="py-4 ">
              <div className="py-2">
                <a
                  href="https://www.eightathletics.com/products/sleep-mask-one"
                  className="inline-block bg-blue-600 text-white py-2 px-8 rounded hover:bg-blue-700 transition duration-300 ease-in-out text-lg md:text-2xl"
                >
                  Secure Yours Now 🌙
                </a>
              </div>
              <div className=" text-xs md:text-sm">
                <Link href="/" className="text-blue-600 hover:underline">
                  Go back to the homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ThankYouPage;
