"use client";
import Logo from "./logo";
import { useEffect, useState } from "react";
import Illustration from "@/public/images/glow-top.svg";

export default function Header() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const heroSection = document.querySelector(".hero");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowButton(window.scrollY > heroBottom);
      }
    };

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once to check initial state

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="absolute lg:fixed w-full z-50">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow"></nav>

          {/* Join Waitlist Button */}

          {showButton && (
            <button
              onClick={scrollToTop}
              className="flex justify-center w-[10%] text-xs  xl:text-lg  font-semibold py-3 lg:px lg:px-3 px-4 bg-black/80 rounded-lg shadow-lg text-white hover:bg-black/50 transition duration-300 ease-in-out"
            >
              Join Waitlist{" "}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
