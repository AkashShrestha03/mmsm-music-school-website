'use client';

import Image from 'next/image';

const Banner = () => {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Banner 1.png"
          alt="MOUJ MAALIK Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center sm:object-top"
        />
      </div>

      {/* Overlay content (optional, e.g. text / CTA) */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold text-center drop-shadow-lg">
          Welcome to MOUJ MAALIK
        </h1>
      </div>
    </section>
  );
};

export default Banner;
