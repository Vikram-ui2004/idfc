'use client';
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-full mx-auto ">
        <Image
          src="/header.png"
          alt="Earn Big Returns"
          width={1200}
          height={400}
          className="rounded-lg object-cover w-full"
          priority
        />
      </div>
    </section>
  );
};

export default Navbar;
