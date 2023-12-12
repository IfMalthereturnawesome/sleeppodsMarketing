import Logo from "./logo";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:justify-between md:items-end">
          {/* Logo and copyright */}
          <div className="mb-6 md:mb-0">
            <Logo />
            <div className="text-sm text-slate-300 mt-2">
              © SleepPods.io {currentYear} - All rights reserved.
            </div>
          </div>
          {/* Eight Athletics Link */}
          <div className="text-sm text-slate-50 mt-4 mb-4 md:my-0">
            <Link
              href="https://www.eightathletics.com"
              className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out flex flex-col items-center md:flex-row"
            >
              <div className="flex items-center justify-center md:justify-start">
                <span>
                  <strong className={"text-white"}>SleepPods:</strong> A
                  Pioneering Vision by
                </span>

                <Image
                  src="https://www.eightathletics.com/images/Eight-Athletics-white-logo.svg"
                  alt="Eight Athletics Logo"
                  width={24}
                  height={24}
                  className="mx-2"
                  style={{ width: "auto", height: "20px" }} // Adjust size as needed
                />
              </div>
            </Link>
          </div>

          {/* Legal Links */}
          <div className="text-sm text-slate-50">
            <h6 className="font-medium mb-2">Legals</h6>
            <ul className="flex flex-col items-center md:flex-row md:space-x-4">
              <li className="mb-2 md:mb-0">
                <Link
                  href="/disclaimer"
                  className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/cookiepolicy"
                  className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
