import { Metadata } from "next";
import TrangChu from "@/components/TrangChu";

export const metadata: Metadata = {
  title: "Kiến trúc Bầu Trời Xanh",
  description:
    "Khám phá những giải pháp thiết kế kiến trúc độc đáo, hiện đại và phù hợp với phong thủy tại Kiến Trúc Bầu Trời Xanh.",
};

export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      {/* <Brands />  
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog /> */}
      <TrangChu />
    </main>
  );
}
