import Double from "@/components/Double";
import HeroSection from "@/components/HereSection";
import Navbar from "@/components/Navbar";
import SimpleCard from "@/components/SimpleCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="    items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <Navbar />

        <HeroSection />

        <section className="flex flex-col items-start justify-center px-10 py-20 bg-[#F9F5FF]">
          <div className="w-full h-[467px] relative  ">
            <Image
              src="/assets/banner.png"
              alt="banner"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        <Double
          number="02"
          title="We Are"
          description="Hevelt Yard Inc. blends cutting-edge technology and AI innovation to deliver smart, scalable solutions, helping businesses streamline operations, enhance experiences, and launch future-ready products with intelligent, impactful results."
        />

        <SimpleCard />

        <Double
          number="03"
          title="Meet Our Team"
          description="Since our founding in 2015, we’ve been driven by one goal: to design and deliver products that truly enhance everyday life. What began as a small idea has grown into a dedicated team of thinkers, makers, and doers who share a passion for quality, innovation, and meaningful impact."
        />

        <section className="flex flex-col items-start justify-center px-10 py-20 bg-[#F9F5FF]">
          <div className="w-full h-[467px] relative  ">
            <Image
              src="/assets/banner2.png"
              alt="banner 2"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        <Double
          number="04"
          title="Tech conference 2025"
          description="Hevelt Yard Inc. Tech Conference 2025 will bring together innovators, entrepreneurs, and industry leaders for a day of cutting-edge discussions, hands-on workshops, and networking opportunities. "
        />

        <Double
          number="05"
          title="Insight"
          description="We're the best. Trust us on that."
        />
      </main>
    </div>
  );
}
