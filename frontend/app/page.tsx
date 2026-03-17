import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import FeatureSlider from "./component/featureSlider";
import ServiceBlock from "./component/ServiceBlock";
import teamblock from "./component/teamblock";
import Teamblock from "./component/teamblock";


export default function Home() {
  return (
    <main>
      <FeatureSlider />




      {/* 1. Architecture Section (Image Left) */}
      <ServiceBlock 
        number="01"
        title="Architecture"
        subtitle="Sophisticated"
        description="From ground-up builds to transformative renovations, we deliver nuanced, sophisticated architecture that reflects who our clients are."
        image="/architecture-f1.jpg"
        reversed={false} 
      />

      {/* 2. Interior Section (Image Right) */}
      <ServiceBlock 
        number="02"
        title="Interior Design"
        subtitle="Refined"
        description="Our approach to interior design blends form and function, creating spaces that are both beautiful and purposeful for modern living."
        image="/interior-f1.jpg"
        reversed={true} 
      />

      <ServiceBlock 
        number="03"
        title="Landscape Design"
        subtitle="Envisioned"
        description="We create landscapes that not only reflect the natural beauty of the environment but also reflect the vision and aspirations of our clients."
        image="/landscape-f1.png"
        reversed={false} 
      />

      <Teamblock />

    </main>
  );
}
