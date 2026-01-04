import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      <Header />

      {/* HERO */}
      <section className="w-full px-4 py-2">
        <HeroSlider />
      </section>

      {/* CARD PROTECTION */}
      <section className="text-center py-10 px-4 bg-white">
        <h2 className="text-xl md:text-2xl font-semibold text-[#9b1c23]">
          Card Protection
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Protect yourself with India&apos;s first comprehensive card protection
          service in case of loss, theft, or fraud.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <Link href="/signup">
            <button className="btn-primary">Activate</button>
          </Link>

          <Link href="/signup">
            <button className="btn-primary">Deactivate</button>
          </Link>
        </div>
      </section>

      {/* REDEEM */}
      <section className="text-center py-10 px-4 bg-gray-50">
        <h2 className="text-xl md:text-2xl font-semibold text-[#9b1c23]">
          Redeem Your Reward Points
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Redeem your IDFC Credit Card reward points for exciting products and
          e-vouchers.
        </p>

        <Link href="/signup">
          <button className="btn-primary mt-6">Redeem Now</button>
        </Link>
      </section>

      {/* ACCOUNT ACCESS */}
      <section className="text-center py-10 px-4 bg-white">
        <h2 className="text-xl md:text-2xl font-semibold text-[#9b1c23]">
          Account Access
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Login or register to your IDFC Credit Card account to manage your card.
        </p>

        <Link href="/signup">
          <button className="btn-primary mt-6">Login</button>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-10 text-center text-sm text-gray-600">

        {/* LOGO */}
        <div className="flex justify-center mb-4">
          <Image
            src="/IDFCFirstBank.webp"
            alt="IDFC FIRST Bank"
            width={60}
            height={50}
            priority
          />
        </div>

        {/* SECURITY */}
        <p className="flex items-center justify-center gap-2">
          🔒 Your data is protected with industry-standard encryption.
        </p>

        {/* LINKS */}
        <div className="flex justify-center gap-6 mt-4 text-[#9b1c23] font-medium">
          <Link href="/signup" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link href="/signup" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/signup" className="hover:underline">
            Help & Support
          </Link>
        </div>

        {/* COPYRIGHT */}
        <p className="mt-4 text-gray-500">
          © 2026 IDFC FIRST Bank. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
