'use client';

import Image from 'next/image';

const Banner = () => {
  return (
    <section className="relative w-full pt-20">
      <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] overflow-hidden">
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



