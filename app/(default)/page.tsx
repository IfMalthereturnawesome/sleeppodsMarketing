"use client";
import {
  usePostHog,
  useFeatureFlagEnabled,
  useFeatureFlagVariantKey,
} from "posthog-js/react";
import { useEffect, useState } from "react";

// EEG
import Hero from "@/components/eeg/hero";
import Clients from "@/components/eeg/clients";
import Features from "@/components/eeg/features";
import Features02 from "@/components/eeg/features-02";
import Features03 from "@/components/eeg/features-03";
import TestimonialsCarousel from "@/components/eeg/testimonials-carousel";
import Features04 from "@/components/eeg/features-04";
import Pricing from "@/components/eeg/pricing";
import Testimonials from "@/components/eeg/testimonials";
import Cta from "@/components/eeg/cta";

// PPG
import HeroPPG from "@/components/ppg/hero";
import ClientsPPG from "@/components/ppg/clients";

// NOAPP
import HeroNoApp from "@/components/noapp/hero";
import CtaNoApp from "@/components/noapp/cta";
import ClientsNoApp from "@/components/noapp/clients";
import FeaturesNoApp from "@/components/noapp/features";
import Features02NoApp from "@/components/noapp/features-02";
import Features03NoApp from "@/components/noapp/features-03";
import TestimonialsCarouselNoApp from "@/components/noapp/testimonials-carousel";
import Features04NoApp from "@/components/noapp/features-04";
import TestimonialsNoApp from "@/components/noapp/testimonials";
import FeaturesPPG from "@/components/ppg/features";
import Features02PPG from "@/components/ppg/features-02";
import Features03PPG from "@/components/ppg/features-03";
import TestimonialsCarouselPPG from "@/components/ppg/testimonials-carousel";
import Features04PPG from "@/components/ppg/features-04";
import TestimonialsPPG from "@/components/ppg/testimonials";
import CtaPPG from "@/components/ppg/cta";
import posthog from "posthog-js";
import Features05NoApp from "@components/noapp/features-05";
import Features05PPG from "@components/ppg/features-05";
import Features05 from "@components/eeg/features-05";

export default function Home() {
  const landingPageVariant = useFeatureFlagVariantKey("landing_page");
  const [content, setContent] = useState(null);
  posthog.featureFlags.override({ landing_page: "control" });

  useEffect(() => {
    switch (landingPageVariant) {
      case "ppg":
        setContent(
          <>
            <HeroPPG />
            <ClientsPPG />
            <FeaturesPPG />
            <Features02PPG />
            <Features05PPG />
            <TestimonialsCarouselPPG />
            <Features03PPG />
            <Features04PPG />
            <TestimonialsPPG />
            <CtaPPG />
          </>,
        );
        break;
      case "noapp":
        setContent(
          <>
            <HeroNoApp />
            <ClientsNoApp />
            <FeaturesNoApp />
            <Features02NoApp />
            <Features05NoApp />
            <TestimonialsCarouselNoApp />
            <Features04NoApp />
            <TestimonialsNoApp />
            <CtaNoApp />
          </>,
        );
        break;
      //     EEG is the default
      case "control":
      default:
        setContent(
          <>
            <Hero />
            <Clients />
            <Features />
            <Features02 />
            <Features05 />
            <TestimonialsCarousel />
            <Features03 />
            <Features04 />
            <Testimonials />
            <Cta />
          </>,
        );
    }
  }, [landingPageVariant]);

  return content;
}
