"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-start justify-center px-10 py-20 bg-[#F9F5FF]">
      <h2 className="text-4xl font-bold leading-snug max-w-3xl text-black">
        Your Trusted Partner for <br />
        Intelligent, <span className="text-purple-700">Future-Ready</span>{" "}
        Solutions
      </h2>

      <p className="mt-4 text-gray-600 max-w-2xl">
        At Hevelt Yard Inc., we combine cutting-edge technology with AI-driven
        innovation to deliver smart, scalable, and future-ready solutions.
      </p>

      <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
        Contact Our Sales →
      </button>

      <div>
        <Image
          src="/assests/HY.svg"  
          alt="Hy Logo"
          width={40}
          height={40}
          priority
        />

      </div>
    </section>
  );
}
