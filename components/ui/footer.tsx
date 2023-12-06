import Logo from "./logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:justify-between md:items-end">
          {/* Logo and copyright */}
          <div className="mb-6 md:mb-0">
            <Logo />
            <div className="text-sm text-slate-300 mt-2">
              © SleepPods.io 2023 - All rights reserved.
            </div>
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
