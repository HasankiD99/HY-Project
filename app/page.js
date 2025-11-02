import HeroSection from "@/components/HereSection";
import Navbar from "@/components/Navbar";
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
              src="/assests/banner.png"
              alt="banner"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>


      </main>
    </div>
  );
}
