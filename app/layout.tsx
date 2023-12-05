import "./css/style.css";

import {Inter, Poppins} from "next/font/google";
import {Suspense} from "react";
import {PHProvider, PostHogPageview} from "./providers";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import CookieBanner from "@/components/analytics/CookieBanner";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-poppins",
    display: "swap",
});

export const metadata = {
    title: "SleepPods | Enhance Recovery & Performance for Athletes through Sleep",
    description: "Experience better sleep and performance with SleepPods'. Tailored for athletes to boost recovery and success.",
};

function Fallback() {
    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="flex  items-center  justify-center lg:justify-start">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-8">
                </div>
            </div>
        </div>
    )
}

const GTAG = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
        <Suspense fallback={<Fallback/>}>
            <PostHogPageview/>
        </Suspense>
        <PHProvider>
            <body
                className={`${inter.variable} ${poppins.variable} font-poppins antialiased bg-[#0F1729] text-slate-100 tracking-tight`}
            >
            <div className="flex flex-col min-h-screen overflow-hidden">
                {children}
            </div>
            <Suspense fallback={<Fallback/>}>
                <GoogleAnalytics GA_MEASUREMENT_ID={GTAG}/>
                <CookieBanner/>
            </Suspense>
            </body>
        </PHProvider>
        </html>
    );
}
