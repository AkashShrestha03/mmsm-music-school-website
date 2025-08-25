'use client';

import Image from 'next/image';

const Banner = () => {
  return (
    <section className="relative w-full bg-black pt-16 sm:pt-18 md:pt-20 lg:pt-24 xl:pt-28">
      {/* Background Image */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px] overflow-hidden">
        <Image
          src="/banner-1.png"
          alt="MOUJ MAALIK Banner"
          fill
          priority
          sizes="100vw"
          className="object-contain sm:object-cover object-center"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </section>
  );
};

export default Banner;


