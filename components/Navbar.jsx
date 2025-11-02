"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm">
      {/* Logo */}
      {/* <h1 className="text-2xl font-bold text-purple-700">Hy</h1> */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assests/HY.svg"  
          alt="Hy Logo"
          width={40}
          height={40}
          priority
        />
      </Link>

      {/* Nav Links */}
      <div className="flex gap-8 text-gray-700 font-medium">
        <Link href="/" className="hover:text-purple-600">
          Home
        </Link>
        <Link href="/about" className="hover:text-purple-600">
          About
        </Link>
        <Link href="/solution" className="hover:text-purple-600">
          Solution
        </Link>
        <Link href="/tech-partners" className="hover:text-purple-600">
          Tech Partners
        </Link>
        <Link href="/contact" className="hover:text-purple-600">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
