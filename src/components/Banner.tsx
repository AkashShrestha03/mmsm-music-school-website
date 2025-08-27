'use client';

import Image from 'next/image';

const Banner = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[200px] sm:h-[280px] md:h-[380px] lg:h-[480px] xl:h-[600px] 2xl:h-[700px] overflow-hidden">
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




