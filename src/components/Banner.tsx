'use client';

import Image from 'next/image';

const Banner = () => {
  return (
    <section className="relative w-full bg-black pt-16 md:pt-20 lg:pt-24">
      {/* Background Image */}
      <div className="relative w-full">
        <Image
          src="/banner-1.png"
          alt="MOUJ MAALIK Banner"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="w-full h-auto object-contain"
        />
      </div>


    </section>
  );
};

export default Banner;


