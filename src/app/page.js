import Hero from "@/component/home/Hero-Section";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import HowItWorks from "../component/home/HowItWorks";
import PopularCategories from "@/component/home/PopularCategories";
import FeaturesSection from "@/component/home/Features";
import CTASection from "@/component/home/CTA";

export default function Home() {
  return (
    <div className="text-black">
      <Hero></Hero>
      <HowItWorks></HowItWorks>
      <PopularCategories></PopularCategories>
      <FeaturesSection></FeaturesSection>
      <CTASection></CTASection>
      <ToastContainer />
    </div>
  );
}
