'use client';

import Image from 'next/image';

const Banner = () => {
  return (
    <section className="relative w-full bg-black pt-16 md:pt-20 lg:pt-24">
      {/* Background Image */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="/banner-1.png"
          alt="MOUJ MAALIK Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>


    </section>
  );
};

export default Banner;


