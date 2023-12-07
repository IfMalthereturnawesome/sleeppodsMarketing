"use client";

import React, { useRef, useState } from "react";
import * as Form from "@radix-ui/react-form";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

function EmailSignupForm() {
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  async function handleOnSubmit(event) {
    event.preventDefault();

    if (!agreeToTerms) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    const formData = new FormData(formRef.current);
    const email = formData.get("email");
    if (typeof email === "string") {
      setState("loading");

      // Replace with your actual API endpoint
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setState("success");
        router.push(`/?success-email=${encodeURIComponent(email)}`);
      } else {
        alert("There was a problem with your submission.");
        setState("idle");
      }
    } else {
      alert("Invalid email address.");
      setState("idle");
    }
  }

  if (state === "success") {
    // Function to close the modal
    const closeModal = () => {
      setState("idle");
    };

    // Function to handle clicking outside the modal
    const handleOutsideClick = (event) => {
      if (event.target.id === "modal-backdrop") {
        closeModal();
      }
    };

    return (
      <div
        id="modal-backdrop"
        className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
        onClick={handleOutsideClick} // Close modal when clicking outside
      >
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full relative">
          <button
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            onClick={closeModal} // Close modal when clicking 'X'
          >
            <span className="text-2xl">&times;</span> {/* 'X' icon */}
          </button>
          <div className="p-6 text-center bg-[#0F1729]">
            <h1
              className="text-3xl font-semibold text-slate-100"
              data-aos="fade-up"
            >
              Pre-Order Confirmed!
            </h1>
            <p
              className="text-lg text-slate-200 mt-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Thank you for your interest in SleepPods! We've received your
              waiting list request. You're one step closer to experiencing
              revolutionary sleep technology.
            </p>
            <p className="text-slate-200 pt-4 text-xs">
              A confirmation email has been sent to you. If you don’t see it
              soon, please check your spam folder.
            </p>
            <button
              className="mt-6 py-2 px-4 bg-blue-800 text-white font-bold rounded hover:bg-blue-700 transition duration-300 ease-in-out"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Form.Root ref={formRef} onSubmit={handleOnSubmit} className="space-y-4">
      <div className="flex items-center ">
        <Form.Field name="email" id="email" className="  ">
          <Form.Label htmlFor="email" className="sr-only">
            Email Address
          </Form.Label>
          <Form.Control asChild>
            <input
              type="email"
              id={"email"}
              className="w-full px-6 py-4 lg:text-lg text-xs font-normal rounded-r-none rounded-lg shadow-lg bg-black/80 text-white hover:bg-black/50 transition duration-300 ease-in-out"
              placeholder="Enter your email..."
              required
            />
          </Form.Control>
        </Form.Field>

        <Form.Submit asChild>
          <button
            type="submit"
            className="flex justify-center w-1/2 lg:text-lg text-xs font-semibold py-4  lg:px-6 px-4 rounded-l-none rounded-lg shadow-lg bg-black text-white hover:bg-black/50 transition duration-300 ease-in-out"
            disabled={state === "loading"}
          >
            {state === "loading" ? "Processing..." : "Join Waitlist"}
            <span className="lg:ml-2 ml-0.5 hidden lg:block">🌟</span>
          </button>
        </Form.Submit>
      </div>

      <div className="flex items-center justify-start ml-1">
        <Checkbox.Root
          checked={agreeToTerms}
          // @ts-ignore
          onCheckedChange={setAgreeToTerms}
          id="terms-checkbox"
          className="w-5 h-5 p-[1px] bg-black/80 rounded border-[#6b7280] border"
        >
          <Checkbox.Indicator asChild>
            <div className="flex items-center justify-center w-full h-full">
              {agreeToTerms && <CheckIcon className="text-white" />}
            </div>
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="terms-checkbox" className="text-sm ml-2 text-white">
          I agree to the{" "}
          <Link
            href="/disclaimer"
            className="text-blue-300 underline underline-offset-2 hover:underline"
          >
            Terms and Conditions
          </Link>
          .
        </label>
      </div>
    </Form.Root>
  );
}

export default EmailSignupForm;
