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
      <div className="min-h-[90vh] bg-gray-100 flex flex-col items-center justify-center px-4">
        <div className="max-w-xl text-center text-slate-900">
          <h1 className="text-2xl md:text-3xl font-semibold mb-5">
            Thank You for Joining the Waitlist!
          </h1>
          <p className="text-slate-900 mb-4 text-sm md:text-xs">
            {email ? (
              <>
                A confirmation email has been sent to <strong>{email}</strong>.
                If you don’t see it soon, please check your spam folder.
              </>
            ) : (
              "Please check your email for a confirmation message."
            )}
          </p>
          <p className="mb-4 text-sm">
            We've received your request for{" "}
            <strong>early access to SleepPods</strong>. You're now on our list,
            and we'll keep you <strong>updated on our progress</strong>.
          </p>
          <p className="mb-4 text-sm">
            In the meantime, why not check out Eight Athletics'{" "}
            <strong>revolutionary Sleep Mask One</strong>, designed for{" "}
            <strong>maximum comfort</strong> and <strong>total blackout</strong>
            .
          </p>
          <div className="mb-5">
            <Image
              src={"/images/image5.jpg"}
              width="300"
              height="300"
              alt="Sleep Mask One from Eight Athletics"
              className="rounded-lg object-contain mx-auto shadow-black drop-shadow-sm"
            />
          </div>
          <a
            href="https://www.eightathletics.com/products/sleep-mask-one"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out text-sm"
          >
            Experience the future of sleep, today!
          </a>
          <div className="mt-8 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">
              Go back to the homepage
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ThankYouPage;
